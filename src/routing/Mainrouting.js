import { createBrowserRouter } from "react-router-dom";
import Loginform from "../component/Loginform";
import Slidingbar from "../component/Slidingbar";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Card from "../component/Card";

const Rounting = createBrowserRouter([
       {path:"/" , element:<Loginform/>},
       {path:"nav",element:<Navbar/>},
       {path:"sliding",element:<Slidingbar/>},
       {path:"card",element:<Card/>},
       {path:"footer",element:<Footer/>},
       
])

export default Rounting