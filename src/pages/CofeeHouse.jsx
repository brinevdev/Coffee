import { Component } from "react";
import './style/coffeeHouse.scss';
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import BeansDecoration from "../components/beansDecoration/BeansDecoration";
import { Fragment } from "react";
import Card from "../components/card/Card";
import coffeeImage from '../resources/img/coffee_placeholder.png';

class CoffeeHouse extends Component {

    render(){
        return (
        <>
            <Header/>
             <main className="main">
                <div className="about-coffee">
                    <div className="about-coffee__container container">
                        <h1 className="about-coffee__title">Everything You Love About Coffee</h1>
                        <div className="about__decoration"><BeansDecoration/></div>
                        <div className="about-coffee__subtitle">We makes every day full of energy and taste<br/>Want to try our beans?</div>
                        <div className="about-coffee__button"><a className="button">More</a></div>
                    </div>    
                </div> 
                <div className="about-us">
                    <div className="about-us__container container">
                        <h2 className="about-us__title title">About Us</h2>
                        <div className="about-us__decoration"><BeansDecoration/></div>
                        <div className="about-us__text">
                            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                            </p>
                            <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                horrible but confined day end marriage. Eagerness furniture set preserved far
                                recommend. Did even but nor are most gave hope. Secure active living depend son
                                repair day ladies now.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="our-best">
                    <div className="our-best__container container">
                        <h2 className="our-best__title title">Our best</h2>
                        <div className="our-best__list">
                             <Card img = {coffeeImage} title ='AROMISTICO Coffee 1 kg' country='Brazil' price = '12$' id={1}/>
                             <Card img = {coffeeImage} title ='AROMISTICO Coffee 1 kg' country='Brazil' price = '12$' id={1}/>
                             <Card img = {coffeeImage} title ='AROMISTICO Coffee 1 kg' country='Brazil' price = '12$' id={1}/>
                        </div>
                    </div>
                </div>   
            </main>   
            <Footer/>
        </>
        )
    }
}

export default CoffeeHouse;