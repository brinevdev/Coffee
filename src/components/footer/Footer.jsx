import { NavLink } from "react-router-dom";
import './footer.scss';
import logo from './../../resources/img/footer_logo.svg';
import coffeeLogo from '../../resources/img/beans.svg'
import BeansDecoration from "../beansDecoration/BeansDecoration";

function Footer() {
    
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__body">
                    <div className="footer__logo">
                        <a href="#"><img src={logo} alt="coffee beans" /></a>  
                    </div>
                    <nav className="footer__menu menu">
                        <ul className="menu__list">
                        <li><NavLink to="/" className="menu__link">Coffee house</NavLink></li>
                        <li><NavLink to="/ourCoffee" className="menu__link">Our coffee</NavLink></li>
                        <li><NavLink to="/basket" className="menu__link">Your purchases</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__beans"><BeansDecoration/></div>
            </div>
        </footer>
    )

}

export default Footer;