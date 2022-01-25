import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import "./App.css";

function App() {
  return (
    
    <div className="App">
    <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/About' element={<About/>}></Route>
   <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
    <a
        href="https://wa.me/2348024990457?text=I'm%20interested%20in%20building%20an%20application"
        class="whatsapp_float"
      
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
    
  );
}

export default App;
