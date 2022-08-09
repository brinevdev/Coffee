import { Component } from "react";
import './card.scss';
import coffeeImage from './../../resources/img/coffee_placeholder.png';

class Card extends Component {

    render() {
        const {img,name,country,price,id, addToBasket} = this.props;
        const link = `/ourCoffee/${id}`;
        return (
            <div className="card">
                <a href={link} >
                    <div className="card__image"> <img src={coffeeImage} alt=""/></div>
                </a>
                <h3 className="card__title"><a href={link}>{name}</a></h3>
                <div className="card__country">{country}</div>
                <div className="card__price">{price}</div>
                <a href="#" 
                style={{padding:'15px 20px',textAlign:'center',outline:"2px solid"}} 
                onClick={(e)=>addToBasket(e,id)}>add to basket</a>
            </div>
        )
    }
}

export default Card