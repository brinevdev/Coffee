import './App.css';
import { useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import OurCoffee from './pages/OurCoffee';
import CoffeeHouse from './pages/CofeeHouse';
import coffeeImage from './resources/img/coffee_placeholder.png';
import AboutCoffee from './pages/AboutCoffee';
import NotFound from './pages/NotFound';
import Basket from './pages/Basket';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){

    const [coffeeList, setCoffeeList] = useState(
      [
        {id:1,name:"AROMISTICO Coffee 1 kg",img:coffeeImage,price:'6.99$',country:'Brazil',count:0},
        {id:2,name:"AROMISTICO Coffee 2 kg",img:coffeeImage,price:'12$', country:'Brazil',count:0},
        {id:3,name:"ARABICA Coffee 1 kg",img:coffeeImage,price:'5.99$', country:'Kenya',count:0 },
        {id:4,name:"ARABICA Coffee 2 kg",img:coffeeImage,price:'10$', country:'Kenya',count:0},
        {id:5,name:"BLUE MAUNTIN Coffee 1 kg",img:coffeeImage,price:'6.99$',country:'Brazil',count:0},
        {id:6,name:"ROBUSTA Coffee 1 kg",img:coffeeImage,price:'7.99$',country:'Columbia',count:0},
        {id:7,name:"TIMIKO Coffee 1 kg",img:coffeeImage,price:'8.30$',country:'Columbia',count:0},
        ]
    )
    const [temp,setTemp] = useState('');
    const [country,setCountry] = useState('');


    
    
  const addToBasket = (e,id) => {
    e.preventDefault();
    setCoffeeList((state) => {
      return coffeeList.map((item)=>{
          if (item.id == id) {
            return {...item, count:item.count + 1}
          }
          return item
        })
    });
    toast.success("The coffee has been added", {
      position: toast.POSITION.TOP_RIGHT
    });
  }
  
 const changeProductCounter = (id,i) => {
    setCoffeeList((state) => {
      return coffeeList.map((item)=>{
          if (item.id == id) {
            return {...item, count:item.count + i}
          }
          return item
        })

    });
  }

const  getBasket = () => {
    return {
      basketItems: coffeeList.filter(({count})=>count > 0),
      totalSum: coffeeList.reduce((acc,next) => acc + parseFloat(next.price) * next.count, 0).toFixed(2),
      itemsCount: coffeeList.filter(({count})=>count > 0).length,
    }
  }


const filterCoffee = (coffeList,temp,country) => {
    if (country && country != 'all') coffeList = coffeList.filter(item=>item.country == country);
    if (temp) return coffeList.filter(item=>item.name.toUpperCase().startsWith(temp.toUpperCase()));
    return coffeList
  }

 const onFilter = (country) => {
    setCountry(country)
  }
 const onSearch = (value) =>{
    setTemp(value)
  filterCoffee();
  }

 
    const filteredList = filterCoffee(coffeeList,temp, country);
    const basketList = getBasket();
    return (
      <Routes>
          <Route path='/' element={<CoffeeHouse/>}/>
          <Route path='/ourCoffee' element={<OurCoffee coffeeList={filteredList} onSearch = {onSearch} onFilter = {onFilter} addToBasket = {addToBasket}/>}/>
          <Route path='/ourCoffee/:id' element={<AboutCoffee coffeeList = {coffeeList}/>}/>
          <Route path='/basket' element={<Basket  basketList = {basketList} changeProductCounter = {changeProductCounter}/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
  );
}
 


export default App;
