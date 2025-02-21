import {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/img/men_banner.png'
import women_banner from './Components/Assets/img/women_banner.png'


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
         <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
         <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
         <Route path="/product" element={<Product/>}>
               <Route path=':productId' element={<Product/>}/>
         </Route>          
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/login' element={<LoginSignup theme={theme}/>}/>
      </Routes>
      <Footer theme={theme}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
