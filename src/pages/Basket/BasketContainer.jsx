import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {Fragment,useState } from "react";
import {addCoffee,removeCoffee} from './../../actions/actions';
import OrderForm from "../../components/OrderForm/OrderForm";
import Basket from "./Basket";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";


const BasketContainer = () => {
    const {coffeeList} = useSelector(state =>state)    
    const [order,setOrder] = useState(false);
    const dispatch = useDispatch();

    const  getBasket = () => {
        return {
        basketItems: coffeeList.filter(({count})=>count > 0),
        totalSum: coffeeList.reduce((acc,next) => acc + parseFloat(next.price) * next.count, 0).toFixed(2),
        itemsCount: coffeeList.filter(({count})=>count > 0).length,
        }
    }

    const onOrder = (e,setOrder,order) => {
        e.preventDefault()
        setOrder(!order);
    }

    const onAdd = (id) => {
        dispatch(addCoffee(id));
    }
    const onRemove = (id) => {
        dispatch(removeCoffee(id));
    }


    const basket = getBasket();
    const {itemsCount} = basket
  
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
                { itemsCount > 0 && !order ? <Basket 
                basket = {basket} 
                order = {order} 
                setOrder = {setOrder} 
                onAdd = {onAdd} 
                onRemove = {onRemove} 
                onOrder = {onOrder}/> : null}
            </main>
            <Footer/>
            <ToastContainer limit={1}/>
        </>)
}


const EmptyBasket = () => {
    return (
        <div className="container">
        <div style={{padding:'30px 15px',fontSize:'24px',textAlign:'center'}}>The basket is empty</div>
        </div>
    )
}

export default BasketContainer