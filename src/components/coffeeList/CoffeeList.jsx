import './coffeList.scss';
import Card from './coffeeItem/CoffeeItem';
import { useSelector } from 'react-redux';


function CoffeeList(props) {
    
    const {products,country,search, price} = props;
  

    if (products.length == 0) return <div className='notFound'>Oops nothing was found</div>

    return(
        <div className="coffeeList">
            {products.map(({_id,title,price,country})=>{
                return <Card title = {title} price = {price} country={country} id = {_id} key={_id}/>
            })}
        </div>
    )
    
}

export default CoffeeList;