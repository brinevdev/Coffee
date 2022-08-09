import { Component, Fragment } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/header";


class Basket extends Component {

    render() {
        const {basketList} = this.props;
        const {basketItems,totalSum} = basketList;
        return (
           <>
            <Header/>
                <div className="ourcoffee">
                    <div className="container">
                        <h1 className="ourcoffee__title">Our Coffee </h1>
                    </div>
                </div>
                <div className="container">
                    

                </div>
            <Footer/>
           </>
    )
}
}

export default Basket;