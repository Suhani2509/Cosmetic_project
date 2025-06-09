import { createBrowserRouter } from "react-router-dom";
import Loginform from "../component/Loginform";
import Slidingbar from "../component/Slidingbar";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import Home from "../component/Home";
import About from "../component/About";
import Lipstick from "../Product/Lipstick";
import Blush from "../component/Blush";
import Eyeshadow from "../component/Eyeshadow";
import Foundation from "../component/Foundation";


const Rounting = createBrowserRouter([
       {path:"/" , element:<Loginform/>},
       {path:"home", element:<Home/>},
       {path:"about",element:<About/>},

//      Product Component
{path:"lipstick",element:<Lipstick/>},
{path:"blush",element:<Blush/>},
{path:"foundation",element:<Foundation/>},
{path:"eyeshadow",element:<Eyeshadow/>}

       
       
])

export default Rounting