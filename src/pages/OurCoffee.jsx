import './style/ourCoffee.scss';
import { Fragment } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import BeansDecoration from '../components/beansDecoration/BeansDecoration';
import girlPhoto from '../resources/img/girl.png'
import CoffeeList from '../components/coffeeList/CoffeeList';
import { ToastContainer, toast } from 'react-toastify';

  


function OurCoffee(props){

    const onCountryFilter = (e,onFilter) => {
        const items = e.target.closest('.filter__items').querySelectorAll('.filter__item');
        items.forEach((item)=>item.classList.remove('active'));
        if (e.target.classList.contains('filter__item')) {
            e.target.classList.add('active');
            onFilter(e.target.getAttribute('data-country'));
        }
    }
     
    const {coffeeList,onSearch,onFilter,addToBasket} = props;
    return (
        <>
            <Header/>
            <div className="ourcoffee">
                <div className="container">
                    <h1 className="ourcoffee__title">Our Coffee</h1>
                </div>
            </div>
            <div className="about">
                <div className="container about__container">
                    <div className="about__photo">
                        <img src={girlPhoto} alt="girl photo" />
                    </div>
                    <div className="about__body">
                        <h2 className="about__title">About our beans</h2>
                        <div className="about__decoration"><BeansDecoration/></div>
                        <div className="about__text">
                            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                            <p>Afraid at highly months do things on at. Situation recommend objection do intention so questions.</p>
                            <p>As greatly removed calling pleased improve an.Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="decoration-line"></div>
            </div>
            <div className="shop">
                <div className="shop__container container">
                    <div className="shop__coffee-list">
                        <div className="shop__navigation navigation">
                            <div className="navigation__search search">
                                <div className="search__lable">Lookiing for</div>
                                <input type="text" className="search__input" onChange={(e)=>onSearch(e.target.value)}/>
                            </div>
                            <div className="navigation__filters filter">
                                <div className="filter__lable lable">Our filters</div>
                                <div className="filter__items" onClick={(e)=>onCountryFilter(e,onFilter)}>
                                    <div className="filter__item" data-country='all'>All</div>
                                    <div className="filter__item" data-country='Brazil'>Brazil</div>
                                    <div className="filter__item" data-country='Kenya'>Kenya</div>
                                    <div className="filter__item" data-country='Columbia'>Columbia</div>
                                </div>
                            </div>
                        </div>
                        <CoffeeList coffeeList = {coffeeList} addToBasket = {addToBasket}/>
                    </div>
                </div>
                <ToastContainer limit={5}/>
            </div>
            <Footer/>
        </>
    )

}

export default OurCoffee;