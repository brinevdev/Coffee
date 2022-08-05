import { Component } from "react";
import Footer from "../components/footer/Footer";
import { Fragment } from "react";


class NotFound extends Component {

    render(){
        return (
           <>
            <div className="container">
            <img src="https://i.stack.imgur.com/6M513.png" alt="" style={{maxWidth:'100%'}} />
            </div>
            <Footer/>
           </>
            
        )
    }
}

export default NotFound;