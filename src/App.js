import './App.css';
import { Component } from 'react';
import {Routes,Route} from 'react-router-dom';
import OurCoffee from './pages/OurCoffee';
import CoffeeHouse from './pages/CofeeHouse';
import coffeeImage from './resources/img/coffee_placeholder.png';
import AboutCoffee from './pages/AboutCoffee';
import NotFound from './pages/NotFound';
import Basket from './pages/Basket';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      coffeeList:[
          {id:1,name:"AROMISTICO Coffee 1 kg",img:coffeeImage,price:'6.99$',country:'Brazil'},
          {id:2,name:"AROMISTICO Coffee 2 kg",img:coffeeImage,price:'12$', country:'Brazil'},
          {id:3,name:"ARABICA Coffee 1 kg",img:coffeeImage,price:'5.99$', country:'Kenya' },
          {id:4,name:"ARABICA Coffee 2 kg",img:coffeeImage,price:'10$', country:'Kenya'},
          {id:5,name:"BLUE MAUNTIN Coffee 1 kg",img:coffeeImage,price:'6.99$',country:'Brazil'},
          {id:6,name:"ROBUSTA Coffee 1 kg",img:coffeeImage,price:'7.99$',country:'Columbia'},
          {id:7,name:"TIMIKO Coffee 1 kg",img:coffeeImage,price:'8.30$',country:'Columbia'},
          ],
      temp:'',
      country:'',
      basket:[],
  }
  }
    
  addToBasket = (e,id) => {
    e.preventDefault();
    const basket = this.state.basket;
    let productIndex = basket.findIndex((item) => item.id == id);
    if (productIndex != -1){
      basket[productIndex].count++;
    } else {
      basket.push({
        id,
        count:1,
      })
    }
    this.setState({
      basket
    })
  }
  
  changeProductCounter = (id,i) => {
    const basket = this.state.basket
    this.setState((state) => {
      return {
        basket: basket.map((item)=>{
          if (item.id == id) {
            return {...item, count:item.count + i}
          }
          return item
        })
      }
    });
  }
  getBasket = (basket) => {
    const coffeeList = this.state.coffeeList;
    const basketItems = basket.map(({id,count})=>{
      const coffeeIndex = coffeeList.findIndex((item) => item.id == id)
      return {
        count,
        ...coffeeList[coffeeIndex],
        }
    });
    const totalSum = basketItems.reduce((acc,next) => acc + parseFloat(next.price) * next.count, 0);
    return {
      basketItems,
      totalSum:totalSum.toFixed(2),
    }
  }


  filterCoffee = (coffeList,temp,country) => {
    if (country && country != 'all') coffeList = coffeList.filter(item=>item.country == country);
    if (temp) return coffeList.filter(item=>item.name.toUpperCase().startsWith(temp.toUpperCase()));
    return coffeList
  }

  onFilter = (country) => {
    this.setState({
      country,
    })
  }
  onSearch = (value) =>{
        this.setState({
          temp:value,
        })
  this.filterCoffee();
  }

  render() {
    const {coffeeList,temp, country,basket} = this.state;
    const filteredList = this.filterCoffee(coffeeList,temp, country);
    const basketList = this.getBasket(basket);
    return (
      <Routes>
          <Route path='/' element={<CoffeeHouse/>}/>
          <Route path='/ourCoffee' element={<OurCoffee coffeeList={filteredList} onSearch = {this.onSearch} onFilter = {this.onFilter} addToBasket = {this.addToBasket}/>}/>
          <Route path='/ourCoffee/:id' element={<AboutCoffee coffeeList = {this.state.coffeeList}/>}/>
          <Route path='/basket' element={<Basket  basketList = {basketList} changeProductCounter = {this.changeProductCounter}/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
  );
  }
 
}

export default App;
