import {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';


function App() {
  const [theme, setTheme] = useState('light'); // Agregar estado para el tema

  // Función para alternar el tema
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme; // Cambiar la clase del body
  };
  
  return (
    <div>
      <BrowserRouter>
      <Navbar theme={theme} toggleTheme={toggleTheme} /> {/* Pasamos el tema a Navbar */}
        
        
      <Routes>
         <Route path='/' element={<Shop theme={theme}/>}/>
         <Route path='/mens' element={<ShopCategory category="hombre"/>}/>
         <Route path='/womens' element={<ShopCategory category="mujer"/>}/>
         <Route path="/product" element={<Product/>}>
               <Route path=':productId' element={<Product/>}/>
         </Route>          
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
