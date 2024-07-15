
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
   <>
   <Router>
   <Navbar />
      <Routes>
         <Route path='/' element={<Home/>}/> 
        <Route path='/about' element={<About/>}/>
      </Routes>
   </Router>
    
   
    <Footer />
   </>
  );
}

export default App;
