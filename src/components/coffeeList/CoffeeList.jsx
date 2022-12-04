import './coffeList.scss';
import Card from '../card/Card';
import { useSelector } from 'react-redux';


function CoffeeList() {
    
    const {coffeeList,country,search, price} = useSelector(state=>state);
    let filteredCoffeeList = country && country !== 'all' ? coffeeList.filter((coffee)=>coffee.country == country) : coffeeList;
    filteredCoffeeList = search ? filteredCoffeeList.filter((coffee)=>coffee.name.toLowerCase().startsWith(search.toLowerCase())) : filteredCoffeeList;
    filteredCoffeeList = price ? filteredCoffeeList.filter((coffee)=>Math.floor(parseFloat(coffee.price)) < price) : filteredCoffeeList;

    if (filteredCoffeeList.length == 0) return <div className='notFound'>Oops nothing was found</div>

    return(
        <div className="coffeeList">
            {filteredCoffeeList.map(({id,name,price,country})=>{
                return <Card name = {name} price = {price} country={country} id = {id} key={id}/>
            })}
        </div>
    )
    
}

export default CoffeeList;