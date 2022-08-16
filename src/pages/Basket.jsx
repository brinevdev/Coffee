import { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/header";
import './style/basket.scss';
import coffeeImage from './../resources/img/coffee_placeholder.png';


function Basket(props){

          
        const {basketList, changeProductCounter} = props;
        const {basketItems,totalSum,itemsCount} = basketList;
        
        if (itemsCount == 0) return (
          <>
            <Header/>
            <main className="main">
                <div className="ourcoffee">
                        <div className="container">
                            <h1 className="ourcoffee__title">Your purchases</h1>
                        </div>
                    </div>
               <div className="container">
                <div style={{padding:'30px 15px',fontSize:'24px',textAlign:'center'}}>The basket is empty</div>
               </div>
            </main>
            <Footer/>
          </>
        )
        
        return (
           <>
             <Header/>
                <main className="main">
                    <div className="ourcoffee">
                        <div className="container">
                            <h1 className="ourcoffee__title">Your purchases</h1>
                        </div>
                    </div>
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
                                            <div className="plus" onClick={()=>changeProductCounter(id,1)}>+</div>
                                            {count}
                                            <div className="minus" onClick={()=>changeProductCounter(id,-1)}>-</div>
                                        </div>
                                        </div>
                                        <span>{country}</span>
                                        <span>{price} x {count} = {parseFloat(price)*count}$</span>
                                    </div>
                                )
                            })}
                            <div className="basket__total"> {totalSum > 0 ? 'total sum ' + totalSum : null }</div>
                        </div>
                        </div>
                    </div>
                </main>
            <Footer/>
           </>
    )
}

export default Basket;