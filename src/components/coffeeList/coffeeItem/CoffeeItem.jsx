import './coffeItem.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import coffeeImage from './../../../resources/img/coffee_placeholder.png';
import { addItemToShoppingCart } from '../../coffeeSlice/coffeeSlice';
import { toast } from 'react-toastify';

function Card(props){
    const dispatch = useDispatch();
    const {title,country,price,id} = props;
    

    const onAdd = (e,id) => {
        e.preventDefault();
        dispatch(addItemToShoppingCart(id))
        toast.success(`${title} has been added`, {
            position: toast.POSITION.TOP_RIGHT
          });
        }

    return (
        <div className="card">
            <Link to={`/ourCoffee/${id}`} >
                <div className="card__image"> <img src={coffeeImage} alt=""/></div>
            </Link>
            <h3 className="card__title"><Link to={`/ourCoffee/${id}`}>{title}</Link></h3>
            <div className="card__country">{country}</div>
            <div className="card__price">{price}$</div>
            <a href="#" className = "button" onClick={(e)=>onAdd(e,id)}>add to shopping cart</a>
        </div>
    )
    
}

export default Card