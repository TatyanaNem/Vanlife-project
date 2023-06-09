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
//import "./server";
import Vans, {loader as vansLoader} from "./pages/Vans/Vans";
import VanDetails, {loader as vanDetailsLoader} from "./pages/Vans/VanDetails/VanDetails";
import Layout from "./components/Layout/Layout";
import HostLayout from "./pages/Host/HostLayout";
import Income from "./pages/Host/Income/Income";
import Dashboard, {loader as dashboardLoader} from "./pages/Host/Dashboard/Dashboard";
import Reviews from "./pages/Host/Reviews/Reviews";
import HostVans, {loader as hostVansLoader} from "./pages/Host/HostVans/HostVans";
import HostVanDetails, {loader as hostVanDetailsLoader} from "./pages/Host/HostVans/HostVanDetails/HostVanDetails";
import Details from "./pages/Host/HostVans/HostVanDetails/Details/Details";
import Photos from "./pages/Host/HostVans/HostVanDetails/Photos/Photos";
import Pricing from "./pages/Host/HostVans/HostVanDetails/Pricing/Pricing";
import NotFound from "./pages/NotFound/NotFound";
import Error from "./components/Error/Error";
import Login, {loader as loginLoader, action as loginAction} from "./pages/Login/Login";
import {requireAuth} from "./common/utils/requireAuth";
import Registration, {loader as registrationLoader, action as registrationAction}
  from "./pages/Registration/Registration";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route
      path='host'
      element={<HostLayout/>}
      loader={async ({request}) => await requireAuth(request)}
    >
      <Route
        index
        element={<Navigate to='dashboard'/>}
        loader={dashboardLoader}
      />
      <Route
        path='dashboard'
        element={<Dashboard/>}
        loader={dashboardLoader}
      />
      <Route
        path='income'
        element={<Income/>}
        loader={async ({request}) => await requireAuth(request)}
      />
      <Route
        path='vans'
        element={<HostVans/>}
        errorElement={<Error />}
        loader={hostVansLoader}
      />
      <Route
        path='vans/:id'
        element={<HostVanDetails/>}
        errorElement={<Error />}
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
      path='vans'
      element={<Vans/>}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route
      path='vans/:id'
      element={<VanDetails/>}
      errorElement={<Error />}
      loader={vanDetailsLoader}
    />
    <Route
      path='login'
      element={<Login/>}
      loader={loginLoader}
      action={loginAction}
      errorElement={<Error />}
    />
    <Route
      path='registration'
      element={<Registration/>}
      loader={registrationLoader}
      action={registrationAction}
      errorElement={<Error />}
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
