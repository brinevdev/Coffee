import './coffeList.scss';
import Card from '../card/Card';

function CoffeeList(props) {

    const {coffeeList,addToBasket} = props;
    if (coffeeList.length == 0) return <div style={{padding:'30px',textAlign:'center',fontSize:'20px'}}>Oops nothing was found</div>
    return(
        <div className="coffeeList">
            {coffeeList.map(({id,name,price,country})=>{
                return <Card addToBasket={addToBasket} name = {name} price = {price} country={country} id = {id} key={id}/>
            })}
        </div>
    )
    
}

export default CoffeeList;