import './ourCoffee.scss';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer} from 'react-toastify';
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import CoffeeList from '../../components/coffeeList/CoffeeList';
import {getAllProducts} from './../../components/coffeeSlice/coffeeSlice';
import searchIcon from './../../resources//img/search-icon.png';


  


function OurCoffee(props){

    const dispatch = useDispatch()
    const [filters, setFilters] = useState({});
    const [title, setTitle] = useState('')
    const [price,setPrice] = useState(20);
    const products = useSelector(state => state.products) || [];

    const onCountryFilter = (e) => {
        const items = e.target.closest('.filter__items').querySelectorAll('.filter__item');
        items.forEach((item)=>item.classList.remove('active'));
        if (e.target.classList.contains('filter__item')) {
            e.target.classList.add('active');
            setFilters({
                ...filters,
                country:e.target.getAttribute('data-country')
            });
        }
    }

    const onTitleChange = (e) => {
        setTitle(e.target.value)
        if (e.target.value === ''){
            setFilters({
                ...filters,
                title:null
            })
        } 
    }
    const onPriceFilter = (e) => {
        setPrice(e.target.value);
        setFilters({
            ...filters,
            price:e.target.value
        });
    }


    const onSearch = (e) => {
        e.preventDefault();
        setFilters({
            ...filters,
            title,
        })
    }

    const onSort = (e) => {
        const sortOptions = ['title.asc', 'title.desc', 'price.asc', 'price.desc']
        setFilters({
            ...filters,
            sortBy:sortOptions[e.target.selectedIndex],
        })
    }

    useEffect(()=> {
        dispatch(getAllProducts(filters))
    },[filters.country, filters.price, filters.title, filters.sortBy])

     
  
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
                            <div className="search__input">
                                <input type="text" className="search__input" value={title} onChange = {onTitleChange}/>
                                <a href="" onClick={onSearch} className = "search__icon"><img  src={searchIcon} alt="" /></a>
                            </div>
                        </div>
                        <div className="navigation__filters filter">
                            <div className="filter__lable lable">Country</div>
                            <div className="filter__items" onClick={(e)=>onCountryFilter(e)}>
                                <div className="filter__item">All</div>
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
                                <select name="" id="" onChange={onSort}>
                                    <option value="">Title (Inc)</option>
                                    <option value="">Title (Dec)</option>
                                    <option value="">Price (Inc)</option>
                                    <option value="">Price (Dec)</option>
                                </select>
                        </div>
                    </div>
                    <div className="shop__list">
                        <CoffeeList products = {products}/>
                    </div>
                </div>
                <ToastContainer limit={5}/>
            </div>
            <Footer/>
        </>
    )

}

export default OurCoffee;