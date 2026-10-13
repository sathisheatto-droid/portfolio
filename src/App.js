import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import images from './asset/pres.webp'

import Header from './Header'
import ArrowFunction from './ArrowFunction';
import ObjectExample from './ObjectExample'
import Project from './Project'
import Accordion from './Accordion';
import ModalBox from './ModalBox';
import ObjectDemo from './ObjectDemo';
import ErrorHandling from './ErrorHandling';
import Product from './Product';
import Home from './Home';
import { Routes, Route, Link } from 'react-router-dom';
import Counter from './Counter';
import GetData from './GetData';
function App() {
  useEffect(() => {
    axios.get("https://www.yahoo.com{/")
      .then((r) => { console.log(r) })
  })

  const productObj = [{
    name: "Adidas",
    price: "3000",
    strikePrice: "5000",

  },
  {
    name: "Puma",
    price: "2500",
    strikePrice: "3500",

  },
  {
    name: "Nike",
    price: "4000",
    strikePrice: "6000",

  }]
  const productSOCK = [{
    name: "Cotton SOCKS",
    price: "3000",
    strikePrice: "5000",

  },
  {
    name: "LINEN",
    price: "2500",
    strikePrice: "3500",

  },
  {
    name: "VELVET",
    price: "4000",
    strikePrice: "6000",

  }]
  return (
    <div className="App">

      {/* <Header />x */}
      {/* <ArrowFunction /> */}
      {/* <ObjectExample /> */}
      {/* <Project />  */}
      {/* <Accordion /> */}
      {/* <ModalBox/> */}
      {/* <ObjectDemo /> */}
      {/* <ErrorHandling data={obj} /> */}
      {/* <Product productObj={productObj} />
      <Product productObj={productSOCK} /> */}
      {/* <Routes>
        <Route path="/product" element={<Home />} >
          <Route path='accordion' element={<Accordion />} />
          <Route path='project' element={<Project />} />
        </Route>
        <Route path='/' element={<Product productObj={productObj} />} />

      </Routes>
      <Link to='/'>Home</Link>
      <Link to="/product">Product</Link> */}

      {/* import { Routes, Route, Link } from 'react-router-dom'; */}

      {/* <Counter /> */}
      <GetData />






    </div>
  );
}

export default App;
