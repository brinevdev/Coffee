import './App.css';
import {Routes,Route} from 'react-router-dom';
import OurCoffee from './pages/OurCoffee/OurCoffee';
import CoffeeHouse from './pages/CoffeeHouse/CoffeeHouse';
import AboutCoffee from './pages/AboutCoffee/AboutCoffee';
import NotFound from './pages/NotFound/NotFound';
import Basket from './pages/Basket/Basket';
import 'react-toastify/dist/ReactToastify.css';


function App(){
    return (
        <Routes>
            <Route path='/' element={<CoffeeHouse/>}/>
            <Route path='/ourCoffee' element={<OurCoffee/>}/>
            <Route path='/ourCoffee/:id' element={<AboutCoffee/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
  );
}
 


export default App;
