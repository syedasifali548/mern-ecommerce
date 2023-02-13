import React from 'react'
import Slider from '../components/Slider'
import Categories from "../components/Categories";
import Products from "../components/Products";
import Anouncement from "../components/Anouncement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Navbarr from '../components/Navbar/Navbarr';
const Home = () => {
  return (
    <div>
         <Anouncement/>
         <Navbarr/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home