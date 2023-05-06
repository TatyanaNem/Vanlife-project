import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  Routes
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./server";
import Vans, {loader as vansLoader} from "./pages/Vans/Vans";
import VanDetails, {loader as vanDetailsLoader} from "./pages/Vans/VanDetails/VanDetails";
import Layout from "./components/Layout/Layout";
import HostLayout from "./pages/Host/HostLayout";
import Income from "./pages/Host/Income/Income";
import Dashboard from "./pages/Host/Dashboard/Dashboard";
import Reviews from "./pages/Host/Reviews/Reviews";
import HostVans, {loader as hostVansLoader} from "./pages/Host/HostVans/HostVans";
import HostVanDetails, {loader as hostVanDetailsLoader} from "./pages/Host/HostVans/HostVanDetails/HostVanDetails";
import Details from "./pages/Host/HostVans/HostVanDetails/Details/Details";
import Photos from "./pages/Host/HostVans/HostVanDetails/Photos/Photos";
import Pricing from "./pages/Host/HostVans/HostVanDetails/Pricing/Pricing";
import NotFound from "./pages/NotFound/NotFound";
import Error from "./components/Error/Error";
import Login, {loader as loginLoader} from "./pages/Login/Login";
import {requireAuth} from "./common/utils/requireAuth";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>} errorElement={<Error />}>
    <Route index element={<Home/>}/>
    <Route
      path='host'
      element={<HostLayout/>}
      loader={async () => await requireAuth()}
    >
      <Route
        index
        element={<Navigate to='dashboard'/>}
        loader={async () => await requireAuth()}
      />
      <Route
        path='dashboard'
        element={<Dashboard/>}
        loader={async () => await requireAuth()}
      />
      <Route
        path='income'
        element={<Income/>}
        loader={async () => await requireAuth()}
      />
      <Route
        path='vans'
        element={<HostVans/>}
        loader={hostVansLoader}
      />
      <Route
        path='vans/:id'
        element={<HostVanDetails/>}
        loader={hostVanDetailsLoader}
      >
        <Route index element={<Details/>}/>
        <Route path='details' element={<Details/>}/>
        <Route path='pricing' element={<Pricing/>}/>
        <Route path='photos' element={<Photos/>}/>
      </Route>
      <Route path='reviews' element={<Reviews/>}/>
    </Route>
    <Route path='about' element={<About/>}/>
    <Route
      path='login'
      element={<Login/>}
      loader={loginLoader}
    />
    <Route
      path='vans'
      element={<Vans/>}
      loader={vansLoader}
    />
    <Route
      path='vans/:id'
      element={<VanDetails/>}
      loader={vanDetailsLoader}
    />
    <Route path='*' element={<NotFound />}/>
  </Route>
))

function App() {
  return <RouterProvider router={router} />
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App/>);
