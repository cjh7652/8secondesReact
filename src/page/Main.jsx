import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import NavBar from '../components/NavBar.jsx';
import MainBanner from '../components/MainBanner.jsx';
import NewProduct from '../components/NewProduct.jsx';
import Bestseller from '../components/Bestseller.jsx';
import LookBook from '../components/LookBook.jsx';
import Footer from '../components/Footer.jsx'
import QuickMenu from '../components/QuickMenu.jsx';
import { useTabContext } from "../context/TabContext";


const Main = () => {
  const { activeTab } = useTabContext("WOMEN");

  const productTxt = [
    { title: "New Product", description: "8Seconds with your winter" },
    { title: "Best seller", description: "The most loved 8Seconds" },
  ];

  return (
    <div>
      <Header/>
      <NavBar/>
      <MainBanner/>
      <NewProduct
        buttonList={
          activeTab === "WOMEN"
            ? ['clothes', 'bag', 'shoes']
            : ['clothes', 'bag', 'gloves']
        }
        productTxt={productTxt}
      />
      <Bestseller
        buttonList={['clothes', 'bag', 'accessories']}
        productTxt={productTxt}
      />
      <LookBook></LookBook>
      <Footer></Footer>
      <QuickMenu></QuickMenu>
    </div>
  );
};

export default Main;
