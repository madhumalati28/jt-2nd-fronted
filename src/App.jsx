import React from 'react'
import User from './components/User.jsx'
import Counter from './Components/Counter.jsx'
import Todo from './components/Todo.jsx'
import Products from './components/Products.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import ProductDetailsPage from './pages/ProductDetailsPage.jsx'
import  './App.css';
import LoginPage from './Components/Login.jsx'


const App = () => {
  return (
    <>
    {/* <div>App</div>
    <div>User</div>
    <User name="john Deo" course="BCA"  email="john12@gmail.com"/>
    <User name="madhumalati"  course="BCA" email="madhumalati.daddur28@gmail.com"/>

   
    <User>
      <h1>Child</h1>
      <p>child</p>
    </User>
    <Counter />
    <Todo /> */}

  
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