import './basket.scss';
import {Fragment,useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";
import OrderForm from "../../components/OrderForm/OrderForm";
import coffeeImage from './../../resources/img/coffee_placeholder.png';
import { ToastContainer} from 'react-toastify';
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