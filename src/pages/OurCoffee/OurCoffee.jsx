import './ourCoffee.scss';
import { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import CoffeeList from '../../components/coffeeList/CoffeeList';
import { ToastContainer} from 'react-toastify';
import { useDispatch } from 'react-redux';
import {countryFilter,search,priceFilter} from './../../components/coffeeSlice/coffeeSlice';
import gridIcon from './../../resources//img/icons8-grid-view-80.png';
import listIcon from './../../resources/img/icons8-list-view-24.png';

  


function OurCoffee(props){

    const dispatch = useDispatch()
    const [price, setPrice] = useState(20);

    const onCountryFilter = (e) => {
        const items = e.target.closest('.filter__items').querySelectorAll('.filter__item');
        items.forEach((item)=>item.classList.remove('active'));
        if (e.target.classList.contains('filter__item')) {
            e.target.classList.add('active');
            dispatch(countryFilter((e.target.getAttribute('data-country'))));
        }
    }
    const onPriceFilter = (e) => {
        setPrice(e.target.value);
        dispatch(priceFilter(price));
    }
     
  
    return (
        <>
            <Header/>
            <div className="ourcoffee">
                <div className="container">
                    <h1 className="ourcoffee__title">Our Coffee</h1>
                </div>
            </div>
            <div className="shop">
                <div className="shop__container container">
                    <div className="shop__navigation navigation">
                        <div className="navigation__search search">
                            <div className="search__lable lable">Lookiing for</div>
                            <input type="text" className="search__input" onChange={(e)=>dispatch(search(e.target.value))}/>
                        </div>
                        <div className="navigation__filters filter">
                            <div className="filter__lable lable">Country</div>
                            <div className="filter__items" onClick={(e)=>onCountryFilter(e)}>
                                <div className="filter__item" data-country='all'>All</div>
                                <div className="filter__item" data-country='Brazil'>Brazil</div>
                                <div className="filter__item" data-country='Kenya'>Kenya</div>
                                <div className="filter__item" data-country='Columbia'>Columbia</div>
                            </div>
                        </div>
                        <div className="price">
                        <div className="filter__lable lable">Max Price {price}$</div>
                        <input type="range" name="" id="" min = "5" max ="20" step={1} onChange = {onPriceFilter} value = {price} />
                        </div>
                        <div className="navigation__sort sort">
                                <div className="lable">
                                    </div>Sort by 
                                <select name="" id="">
                                    <option value="" selected>Title (Inc)</option>
                                    <option value="" selected>Title (Dec)</option>
                                    <option value="">Price (Inc)</option>
                                    <option value="">Price (Dec)</option>
                                </select>
                        </div>
                    </div>
                    <div className="shop__list">
                        <CoffeeList/>
                    </div>
                </div>
                <ToastContainer limit={5}/>
            </div>
            <Footer/>
        </>
    )

}

export default OurCoffee;