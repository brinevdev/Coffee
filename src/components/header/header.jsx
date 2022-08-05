import { Component } from "react";
import { NavLink } from 'react-router-dom';
import './header.scss';
import logo from '../../resources/img/logo.svg';

class Header extends Component {

    render() {
       return (
        <header className="header">
            <div className="header__logo">
              <a href="#"><img src={logo} alt="coffee beans" /></a>  
            </div>
            <nav className="header__menu menu">
                <ul className="menu__list">
                    <li><NavLink to="/" className="menu__link">Coffee house</NavLink></li>
                    <li><NavLink to="/ourCoffee" className="menu__link">Our coffee</NavLink></li>
                </ul>
            </nav>
        </header>
       )
    }
}

export default Header;