import './App.css';
import {Routes,Route} from 'react-router-dom';
import OurCoffee from './pages/OurCoffee/OurCoffee';
import CoffeeHouse from './pages/CoffeeHouse/CoffeeHouse';
import AboutCoffee from './pages/AboutCoffee/AboutCoffee';
import NotFound from './pages/NotFound/NotFound';
import BasketContainer from './pages/Basket/BasketContainer';
import 'react-toastify/dist/ReactToastify.css';


function App(){
    return (
        <Routes>
            <Route path='/' element={<CoffeeHouse/>}/>
            <Route path='/ourCoffee' element={<OurCoffee/>}/>
            <Route path='/ourCoffee/:id' element={<AboutCoffee/>}/>
            <Route path='/basket' element={<BasketContainer/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
  );
}
 


export default App;
