import React from 'react';
// import './App.css';

 import Hbody from './Hbody';
import Hlayout from './Hlayout';
 import Hheader from './Hheader';
 import Hfooter from './Hfooter';
 
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import Layout from './components/Layout/Layout';
//  import Topheader from './components/Topheader/Topheader';

function Happ() {
    return (
        
  <Hlayout>
     <Hheader />  
     <Hbody /> 
    <Hfooter />  


  </Hlayout>
    );
}

export default Happ;
