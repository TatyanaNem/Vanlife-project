import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./server";
import Vans from "./pages/Vans/Vans";
import Footer from "./components/Footer/Footer";
import VanDetails from "./pages/Vans/VanDetails/VanDetails";
import Layout from "./components/Layout/Layout";
import HostLayout from "./pages/Host/HostLayout";
import Income from "./pages/Host/Income/Income";
import Dashboard from "./pages/Host/Dashboard/Dashboard";
import Reviews from "./pages/Host/Reviews/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='host' element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='income' element={<Income/>}/>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
          <Route path='about' element={<About/>}/>
          <Route path='vans' element={<Vans/>}/>
          <Route path='vans/:id' element={<VanDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App/>);
