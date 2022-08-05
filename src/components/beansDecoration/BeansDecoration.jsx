import { Component } from "react";
import './beans.scss';
import { ReactComponent as Beans} from './../../resources/img/beans.svg'


class BeansDecoration extends Component {
    
    render() {
        const {fill='#000',stroke} = this.props;
        return (
                <div className="beans">
                    <Beans fill = {fill} stroke = {stroke}/>
                </div>
        )
    }
}

export default BeansDecoration;