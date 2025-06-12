import { createBrowserRouter } from "react-router-dom";
import Loginform from "../component/Loginform";
import Slidingbar from "../component/Slidingbar";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import Home from "../component/Home";
import About from "../component/About";
import Lipstick from "../Product/Lipstick";
import Blush from "../Product/Blush";
import Eyeshadow from "../Product/Eyeshadow";
import Foundation from "../Product/Foundation";
import PrivateComponent from "../component/PrivateComponent";
import Contact from "../component/Contact";


const Rounting = createBrowserRouter([
       {path:"/" , element:<Loginform/>},
       {path:"home", element:<PrivateComponent>
              <Home/>
       </PrivateComponent>},
       {path:"about",element:<About/>},

//      Product Component
{path:"lipstick",element:<PrivateComponent>
       <Lipstick/>
</PrivateComponent>},
{path:"blush",element:<PrivateComponent>
       <Blush/>
</PrivateComponent>},
{path:"foundation",element:<PrivateComponent>
       <Foundation/>
</PrivateComponent>},
{path:"eyeshadow",element:<PrivateComponent>
       <Eyeshadow/>
</PrivateComponent>},
{path:"contact",element:<PrivateComponent>
       <Contact/>
</PrivateComponent>}

       
       
])

export default Rounting