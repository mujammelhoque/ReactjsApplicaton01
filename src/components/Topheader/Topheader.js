import React from "react";
import { NavLink } from 'react-router-dom';
// import ReactDOM from "react-dom";
// import Body from '../Body/Body';
import Icecreamfull from '../Icecreamfull/Icecreamfull';
import App from '../../CrudComponent/App';
import Apphp from '../../game/App';
import Happ from '../../home/Happ';
// import Icecreamfull from "./components/IceCreamFull/Icecreamfull";
// import Login from  "./formvalidation/login";
// import Signup from  "./formvalidation/signup";
// import Formvalidation from  "./formvalidation/formvalidation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Topheader() {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">    
    {/* <Link to="/" className="navbar-brand">Home</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
        <li className="nav-item">      
        <NavLink className="nav-link" exact to="/">
        Home
</NavLink>    
          {/* <Link  to="/" className="nav-link">Home</Link> */}
        </li>
        <li className="nav-item">          
          {/* <Link to="/Icream" className="nav-link">Icream</Link> */}
          <NavLink className="nav-link" exact to="/Icream">
          Icream</NavLink> 

        </li>
        <li className="nav-item">          
          {/* <Link to="/Icream-control" className="nav-link">Ice-Control</Link> */}
          <NavLink className="nav-link" exact to="/Icream-control">
          Ice-Control</NavLink> 
        </li>
  
        <li className="nav-item">          
          {/* <Link to="/game" className="nav-link " >Game</Link> */}
          <NavLink className="nav-link" exact to="/game">
          Game</NavLink>
        </li>
        <li className="nav-item">          
          {/* <Link to="/login" className="nav-link">Login</Link> */}
          <NavLink className="nav-link" exact to="/login">
          Login</NavLink>
        </li>
        <li className="nav-item">          
          {/* <Link to="/register" className="nav-link">Register</Link> */}
          <NavLink className="nav-link" exact to="/register">
          Register</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>        
          <Route path="/Icream" ><Icecreamfull /></Route>
          <Route path="/Icream-control" ><App /></Route>
          <Route path="/game"><Apphp /></Route>
          {/* <Route path="/login" component={Login} />
          <Route path="/register" component={Signup} /> */}
          {/* <Route path="/adduser"><Formvalidation /></Route> */}
          <Route path="/"><Happ /></Route>          
        </Switch>
      </div>
    </Router>
  );
}


