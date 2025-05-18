import React from 'react'
import Products from './Components/Products.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import ProductDetailsPage from './pages/ProductDetailsPage.jsx'
import  './App.css';
import LoginPage from './Components/Login.jsx'


const App = () => {
  return (
    <>
  
      <ThemeProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
    
    </>
  );
};

export default App