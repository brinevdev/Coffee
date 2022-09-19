import './orderForm.scss'
import { useState } from "react";
import { toast } from "react-toastify";


const OrderForm = (props) => {
    const {setOrder,order} = props;
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [tel,setTel] = useState('');
    const [address,setAddress] = useState('');
    const [errName,setErrName] = useState(false);
    const [errEmail,setErrEmail] = useState(false);
    const [errTel,setErrTel] = useState(false);
    const [errAddress,setErrAddress] = useState(false);

    function handleValue(e) {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;
            case 'tel':
                setTel(e.target.value)
                break;
            case 'address':
                setAddress(e.target.value)
                break;
        }    
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      };

    function validation(e) {
        switch (e.target.name) {
            case 'name':
                if(!e.target.value || typeof e.target.value != 'string' || e.target.value.length < 4) {
                    setErrName(true);
                } else {
                    setErrName(false);
                }
                break;
            case 'email':
                if ( !e.target.value || !validateEmail(e.target.value)) {
                    setErrEmail(true);
                }
                else {
                    setErrEmail(false);
                }
                break;
            case 'tel':
                if (!e.target.value) {
                    setErrTel(true);
                }
                else {
                    setErrTel(false);
                }
                break;
            case 'address':
                if (!e.target.value) {
                    setErrAddress(true);
                }
                else {
                    setErrAddress(false);
                }
                break;
        }
    }

    function onSubmit(e) {
        e.preventDefault();
        toast.success("Thank you for your order", {
            position: toast.POSITION.TOP_CENTER
          });
        setOrder(false);
    }
    function onReturn() {
        setOrder(false)
    }


    return (
        <div className="container">
            <form action="" className="form">
                <div className="form__title">Checkout</div>
                <div className="form__name">
                    <div className="lable">Full Name </div>
                        {errName ? <div className='error-message'>Full name shoud be a string with more than 4 symbol</div> : null}
                        <input type="text" name="name" value = {name}  onChange={handleValue} onBlur = {validation}/>
                    </div>
                <div className="form__email">
                    <div className="lable">E-mail </div>
                    {errEmail ? <div className='error-message'>Incorrect email</div> : null}
                    <input type="email" name="email" value = {email}  onChange={handleValue} onBlur = {validation}/>
                </div>
                <div className="form__phone">
                    <div className="lable">Contact Number </div>
                    {errTel ? <div className='error-message'>Field cannot be  empty</div> : null}
                    <input type="tel" name="tel" value = {tel}  onChange={handleValue} onBlur = {validation}/>
                </div>
                <div className="form__adress">
                    <div className="lable">Address </div>
                    {errAddress ? <div className='error-message'>Field cannot be  empty</div> : null}
                    <input type="text" name="address" value = {address}  onChange={handleValue} onBlur = {validation}/>
                </div>
                <div className="form__return">
                    <button 
                    className="button" 
                    type="submit"
                    disabled = {errAddress || errEmail || errName || errTel || !(name && email && tel && address)}
                    onClick = {onSubmit}>Submit</button>
                    <button href="#" className="button" onClick={onReturn}>Return</button>
            </div>
            </form>
        </div>
        
    )
}

export default OrderForm;