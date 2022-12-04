import './aboutCoffee.scss';
import { useState } from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import { useParams } from 'react-router-dom';
import BeansDecoration from '../../components/beansDecoration/BeansDecoration';
import placeHolder from '../../resources/img/coffee_placeholder_big.jpg';
import { useSelector } from 'react-redux';


function AboutCoffee(){

    const [amount, setAmount] = useState(1);
    const {id} = useParams();
    const coffeeList = useSelector(state => state.coffeeList);
    const {name,country,price} = coffeeList.find((coffee) => coffee.id == id);
    return(
            <>
                <Header/>
                <div className="ourcoffee">
                    <div className="container">
                        <h1 className="ourcoffee__title">Our Coffee </h1>
                    </div>
                </div>
                <div className="about-it">
                   <div className="about-it__container container">
                        <div className="about-it__image">
                                <img src={placeHolder} alt="" />
                        </div>
                        <div className="about-it__body">
                            <div className="about-it__title">{name}</div>
                            <div className="about-it__decoration">
                                <BeansDecoration/>
                            </div>
                            <div className="about-it__coffee coffee">
                                <div className="coffee__country">Country: {country}</div>
                                <div className="coffee__description">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                <div className="coffee__price">Price: {price}</div>
                                <div className="coffee__sell">
                                    <button href="#" className = "button">add to basket</button>
                                </div>
                            </div>
                        </div>
                        
                   </div>
                </div>
    
                <Footer/>
            </>
        )
    }


export default AboutCoffee;