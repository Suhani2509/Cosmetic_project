import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Slidingbar from './component/Slidingbar';
import Card from './component/Card';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slidingbar/><br/><br/>
      <h4 >HAND PICKED FOR YOU</h4><br/>
      <Card/>
      <Footer/>
  
    </div>
  );
}

export default App;
