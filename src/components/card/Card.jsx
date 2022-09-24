import './card.scss';
import coffeeImage from './../../resources/img/coffee_placeholder.png';
import { addCoffee } from './../coffeeSlice/coffeeSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Card(props){
    const dispatch = useDispatch();
    const {img,name,country,price,id} = props;
    const link = `/ourCoffee/${id}`;

    const onAdd = (e,id) => {
        e.preventDefault();
        dispatch(addCoffee(id))
        toast.success("The coffee has been added", {
            position: toast.POSITION.TOP_RIGHT
          });
    }

    return (
        <div className="card">
            <a href={link} >
                <div className="card__image"> <img src={coffeeImage} alt=""/></div>
            </a>
            <h3 className="card__title"><a href={link}>{name}</a></h3>
            <div className="card__country">{country}</div>
            <div className="card__price">{price}</div>
            <a href="#" 
            style={{padding:'15px 20px',textAlign:'center',outline:"2px solid"}} 
            onClick={(e)=>onAdd(e,id)}>add to basket</a>
        </div>
    )
    
}

export default Card