import { Component, Fragment } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/header";
import './style/basket.scss';


class Basket extends Component {

    render() {
        const {basketList} = this.props;
        const {basketItems,totalSum} = basketList;
        if (basketItems.length == 0) return (
          <>
            <Header/>
            <main className="main">
                <div className="ourcoffee">
                        <div className="container">
                            <h1 className="ourcoffee__title">Our Coffee </h1>
                        </div>
                    </div>
               <div className="container">
                <div style={{padding:'30px 15px',fontSize:'24px',textAlign:'center'}}>The backet is empty</div>
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
                            <h1 className="ourcoffee__title">Our Coffee </h1>
                        </div>
                    </div>
                    <div className="container">
                        <div className="basket">
                            <div className="basket__title">Your purchases</div>
                            <div className="basket__items">
                            {basketItems.map(({id,name,count,country,price})=>{
                            return ( 
                                    <div className="basket__item" key={id}>
                                        <div className="item__info">
                                        <span>{name}</span> 
                                        <div className="item__count">
                                            <div className="plus">+</div>
                                            {count}
                                            <div className="minus">-</div>
                                        </div>
                                        </div>
                                        <span>{country}</span>
                                        <span>{price}</span>
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
}

export default Basket;