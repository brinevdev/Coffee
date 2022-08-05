import './coffeList.scss';
import { Component } from 'react';
import Card from '../card/Card';

class CoffeeList extends Component {

    render(){
        const {coffeeList} = this.props;
        if (coffeeList.length == 0) return <div style={{padding:'30px',textAlign:'center',fontSize:'20px'}}>Oops nothing was found</div>
        return(
            <div className="coffeeList">
                {coffeeList.map(({id,name,price,country})=>{
                   return <Card name = {name} price = {price} country={country} id = {id} key={id}/>
                })}
            </div>
        )
    }
}

export default CoffeeList;