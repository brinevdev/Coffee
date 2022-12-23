import './App.css';
import {Routes,Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import OurCoffee from './pages/OurCoffee/OurCoffee';
import CoffeeHouse from './pages/CoffeeHouse/CoffeeHouse';
import AboutCoffee from './pages/AboutCoffee/AboutCoffee';
import NotFound from './pages/NotFound/NotFound';
import ShoppingCartContainer from './pages/ShoppingCart/ShoppingCartContainer';


function App(){
    return (
        <Routes>
            <Route path='/' element={<CoffeeHouse/>}/>
            <Route path='/ourCoffee' element={<OurCoffee/>}/>
            <Route path='/ourCoffee/:id' element={<AboutCoffee/>}/>
            <Route path='/cart' element={<ShoppingCartContainer/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
  );
}
 


export default App;
