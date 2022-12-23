import './shoppingCart.scss';
import coffeeImage from './../../resources/img/coffee_placeholder.png';




const ShoppingCart = (props) => {
    const {shoppingCart,order, setOrder, onAdd, onRemove, onOrder} = props;
    const {items, totalSum} = shoppingCart;
    
   
    return (
        <div className="container">
            <div className="shopping-cart">
                <div className="shopping-cart__items">
                {items.map(({_id,title,amount,country,price})=>{
                    if (amount == 0) return null;
                return ( 
                        <div className="shopping-cart__item" key={_id}>
                            <div className="shopping-cart__image"><img src={coffeeImage} alt="" /> </div>
                            <div className="item__info">
                            <span>{title}</span> 
                            <div className="item__count">
                                <button className="plus" onClick={() => onAdd(_id)}>+</button>
                                {amount}
                                <button className="minus" onClick={() => onRemove(_id)}>-</button>
                            </div>
                            </div>
                            <span>{country}</span>
                            <span>{price} x {amount} = {(parseFloat(price)*amount).toFixed(2)}$</span>
                        </div>
                    )
                })}
                <div className="shopping-cart__total"> {totalSum > 0 ? 'total sum ' + totalSum : null }</div>
                <div className="shopping-cart__order">
                    <a href="" className="button"  onClick = {(e) => onOrder(e,setOrder,order)}>order</a>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default ShoppingCart;