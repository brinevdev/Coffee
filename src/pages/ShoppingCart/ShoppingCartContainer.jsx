import { useDispatch, useSelector } from "react-redux";
import {Fragment,useState } from "react";
import { ToastContainer } from "react-toastify";
import {addCoffee,removeCoffee} from '../../components/coffeeSlice/coffeeSlice';
import OrderForm from "../../components/OrderForm/OrderForm";
import ShoppingCart from "./ShoppingCart";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";


const ShoppingCartContainer = () => {
    const {shoppingCart} = useSelector(state => state);
    const itemsCount =  shoppingCart.items.filter(item => item.amount > 0).length;
    const [order,setOrder] = useState(false);
    const dispatch = useDispatch();

 

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


  
    return (
        <>
            <Header/>
            <main className="main">
                <div className="ourcoffee">
                    <div className="container">
                        <h1 className="ourcoffee__title">Your purchases</h1>
                    </div>
                </div>
                { itemsCount == 0 ? <EmptyShoppingCart/> : null}
                { order ? <OrderForm setOrder={setOrder} order={order}/> : null}
                { itemsCount > 0 && !order ? <ShoppingCart 
                shoppingCart= {shoppingCart} 
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


const EmptyShoppingCart = () => {
    return (
        <div className="container">
        <div style={{padding:'30px 15px',fontSize:'24px',textAlign:'center'}}>The shopping cart  is empty</div>
        </div>
    )
}

export default ShoppingCartContainer