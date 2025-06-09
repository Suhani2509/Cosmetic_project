import { createBrowserRouter } from "react-router-dom";
import Loginform from "../component/Loginform";
import Slidingbar from "../component/Slidingbar";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import Home from "../component/Home";
import Products from "../component/Products";
import About from "../component/About";

const Rounting = createBrowserRouter([
       {path:"/" , element:<Loginform/>},
       {path:"home", element:<Home/>},
       // {path:"nav",element:<Navbar/>},
       // {path:"sliding",element:<Slidingbar/>},
       // {path:"card",element:<Card/>},
       // {path:"footer",element:<Footer/>},
       // {path:"product",element:<Products/>}
       {path:"about",element:<About/>}
       
])

export default Rounting