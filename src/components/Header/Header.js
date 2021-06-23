import React, { createContext, useState } from 'react';
import { Navbar ,Nav} from 'react-bootstrap';
import './Header.css'
import Blog from '../Blog/Blog'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import RiderData from '../RiderData/RiderData';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
export const userContext = createContext();




const Header = () => {

  const [logInUser, setLogInUser] = useState({});
  const {email,displayName}=logInUser
   return (
      <userContext.Provider value={[logInUser, setLogInUser]}>
        <Router >
         
          <div className='container'>
            <Navbar  expand="sm">
  <Navbar.Brand as={Link} to="/Home"> City Riders</Navbar.Brand>

  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto LiManage">
      <li> <Link to='/Home'>Home</Link></li>
      <li><Link to='/Destination'>Destination</Link></li>
      <li><Link to='/Blog'>Blog</Link></li>
      <li><Link to='/Contact'>Contact</Link></li>
      <li><Link to='/Login'>Login</Link></li>
      <li><Link to='/'>{displayName || email}</Link></li>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>

<Switch>
<Route exact path='/'>
   <Home></Home>
  </Route>
  <Route exact path='/Home'>
   <Home></Home>
  </Route>
  <Route path='/Blog'>
    <Blog></Blog>
  </Route>
  <Route path='/Login'>
    <Login></Login>
  </Route>


  <PrivateRoute path="/Vehical/:id">
          <RiderData></RiderData>
        
        </PrivateRoute>
        <Route path="*">
         <NotFound></NotFound>
        </Route>


</Switch>
        </Router>
        </userContext.Provider>
    );
};

export default Header;