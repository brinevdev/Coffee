import './coffeList.scss';
import Card from '../card/Card';
import { useSelector } from 'react-redux';


function CoffeeList(props) {

    const {coffeeList,filter,search} = useSelector(state=>state);
    let filteredCoffeeList = filter ? coffeeList.filter((coffee)=>coffee.country == filter || filter == 'all') : coffeeList;
    filteredCoffeeList = search ? filteredCoffeeList.filter((coffee)=>coffee.name.toLowerCase().startsWith(search.toLowerCase())) : filteredCoffeeList;
    const {addToBasket} = props;
    if (filteredCoffeeList.length == 0) return <div className='notFound'>Oops nothing was found</div>
    return(
        <div className="coffeeList">
            {filteredCoffeeList.map(({id,name,price,country})=>{
                return <Card addToBasket={addToBasket} name = {name} price = {price} country={country} id = {id} key={id}/>
            })}
        </div>
    )
    
}

export default CoffeeList;