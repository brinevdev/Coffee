import './basket.scss';
import coffeeImage from './../../resources/img/coffee_placeholder.png';




const Basket = (props) => {
    const {basket,order,setOrder,onAdd,onRemove,onOrder} = props;
    const {basketItems,totalSum} = basket;
   
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
                            <span>{price} x {count} = {(parseFloat(price)*count).toFixed(2)}$</span>
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

export default Basket;