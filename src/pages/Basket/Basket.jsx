import {Fragment,useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";
import './basket.scss';
import coffeeImage from './../../resources/img/coffee_placeholder.png';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import {addCoffee,removeCoffee} from './../../actions/actions';






function Basket() {
    
const {coffeeList} = useSelector(state =>state)    
const  getBasket = () => {
    return {
      basketItems: coffeeList.filter(({count})=>count > 0),
      totalSum: coffeeList.reduce((acc,next) => acc + parseFloat(next.price) * next.count, 0).toFixed(2),
      itemsCount: coffeeList.filter(({count})=>count > 0).length,
    }
  }

    const [order,setOrder] = useState(false);
    const basket = getBasket();
    const {itemsCount} = basket;
    return (
        <>
            <Header/>
            <main className="main">
                <div className="ourcoffee">
                    <div className="container">
                        <h1 className="ourcoffee__title">Your purchases</h1>
                    </div>
                </div>
                { itemsCount == 0 ? <EmptyBasket/> : null}
                { order ? <OrderForm setOrder={setOrder} order={order}/> : null}
                { itemsCount > 0 && !order ? <InnerBasket basket = {basket} order = {order} setOrder = {setOrder}/> : null}
            </main>
            <Footer/>
            <ToastContainer limit={1}/>
        </>
)
}

export default Basket;


const EmptyBasket = () => {
    return (
        <div className="container">
        <div style={{padding:'30px 15px',fontSize:'24px',textAlign:'center'}}>The basket is empty</div>
        </div>
    )
}

function onOrder(e,setOrder,order) {
    e.preventDefault()
    setOrder(!order);

}

const OrderForm = (props) => {
    const {setOrder,order} = props;
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [tel,setTel] = useState('');
    const [address,setAddress] = useState('');
    const [errName,setErrName] = useState(false);
    const [errEmail,setErrEmail] = useState(false);
    const [errTel,setErrTel] = useState(false);
    const [errAddress,setErrAddress] = useState(false);

    function handleValue(e) {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;
            case 'tel':
                setTel(e.target.value)
                break;
            case 'address':
                setAddress(e.target.value)
                break;
        }    
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      };

    function validation(e) {
        switch (e.target.name) {
            case 'name':
                if(!e.target.value || typeof e.target.value != 'string' || e.target.value.length < 4) {
                    setErrName(true);
                } else {
                    setErrName(false);
                }
                break;
            case 'email':
                if ( !e.target.value || !validateEmail(e.target.value)) {
                    setErrEmail(true);
                }
                else {
                    setErrEmail(false);
                }
                break;
            case 'tel':
                if (!e.target.value) {
                    setErrTel(true);
                }
                else {
                    setErrTel(false);
                }
                break;
            case 'address':
                if (!e.target.value) {
                    setErrAddress(true);
                }
                else {
                    setErrAddress(false);
                }
                break;
        }
    }

    function onSubmit(e) {
        e.preventDefault();
        toast.success("Thank you for your order", {
            position: toast.POSITION.TOP_CENTER
          });
        setOrder(false);
      
    }


    return (
        <div className="container">
            <form action="" className="form">
                <div className="form__title">Checkout</div>
                <div className="form__name">
                    <div className="lable">Full Name </div>
                        {errName ? <div style={{color:'red',fontSize:'12px',marginBottom:"15px"}}>Full name shoud be a string with more than 4 symbol</div> : null}
                        <input type="text" name="name" value = {name}  onChange={handleValue} onBlur = {validation}/>
                    </div>
                <div className="form__email">
                    <div className="lable">E-mail </div>
                    {errEmail ? <div style={{color:'red',fontSize:'12px',marginBottom:"15px"}}>Incorrect email</div> : null}
                    <input type="email" name="email" value = {email}  onChange={handleValue} onBlur = {validation}/>
                </div>
                <div className="form__phone">
                    <div className="lable">Contact Number </div>
                    {errTel ? <div style={{color:'red',fontSize:'12px',marginBottom:"15px"}}>Field cannot be  empty</div> : null}
                    <input type="tel" name="tel" value = {tel}  onChange={handleValue} onBlur = {validation}/>
                </div>
                <div className="form__adress">
                    <div className="lable">Address </div>
                    {errAddress ? <div style={{color:'red',fontSize:'12px',marginBottom:"15px"}}>Field cannot be  empty</div> : null}
                    <input type="text" name="address" value = {address}  onChange={handleValue} onBlur = {validation}/>
                </div>
                <div className="form__return">
                    <button 
                    className="button" 
                    type="submit"
                    disabled = {errAddress || errEmail || errName || errTel || !(name && email && tel && address)}
                    onClick = {onSubmit}
                    >Submit</button>
                    <button href="#" className="button" onClick = {(e) => onOrder(e,setOrder,order)}>Return</button>
            </div>
            </form>
        </div>
        
    )
}

const InnerBasket = (props) => {
   
    const {basket,order,setOrder} = props;
    const {basketItems,totalSum} = basket;
    const dispatch = useDispatch();

    const onAdd = (id) => {
        dispatch(addCoffee(id));
    }
    const onRemove = (id) => {
        dispatch(removeCoffee(id));
    }
    return (
        <div className="container">
            <div className="basket">
                <div className="basket__items">
                {basketItems.map(({id,name,count,country,price})=>{
                    if (count == 0) return null;
                return ( 
                        <div className="basket__item" key={id}>
                            <div className="basket__image"><img src={coffeeImage} alt="" /> </div>
                            <div className="item__info">
                            <span>{name}</span> 
                            <div className="item__count">
                                <button className="plus" onClick={() => onAdd(id)}>+</button>
                                {count}
                                <button className="minus" onClick={() => onRemove(id)}>-</button>
                            </div>
                            </div>
                            <span>{country}</span>
                            <span>{price} x {count} = {parseFloat(price)*count}$</span>
                        </div>
                    )
                })}
                <div className="basket__total"> {totalSum > 0 ? 'total sum ' + totalSum : null }</div>
                <div className="basket__order">
                    <a href="" className="button"  onClick = {(e) => onOrder(e,setOrder,order)}>order</a>
                    </div>
            </div>
            </div>
        </div>
    )
}