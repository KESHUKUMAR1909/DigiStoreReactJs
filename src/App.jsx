import { BrowserRouter } from 'react-router-dom'
import './App.css'
import SearchBar from './Components/SearchBar/SearchBar'
import Navbar from './Components/Navbar/Navbar'
import ProductCard from './Components/ProductCard/ProductCard'
import logo from "./assets/logo.png";
import HomePage from './Pages/HomePage/HomePage'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>  
      <HomePage />
    </BrowserRouter>
  )
}

export default App
