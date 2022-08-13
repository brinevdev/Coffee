import './beans.scss';
import { ReactComponent as Beans} from './../../resources/img/beans.svg'


function BeansDecoration() {

    const {fill='#000',stroke} = this.props;
    return (
            <div className="beans">
                <Beans fill = {fill} stroke = {stroke}/>
            </div>
    )
    
}

export default BeansDecoration;