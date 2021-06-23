import React, { useContext } from 'react';
import { Redirect, Route } from "react-router";
import { userContext } from '../Header/Header';


const PrivateRoute = ({ children, ...rest }) => {
    const [logInUser, setLogInUser] = useContext(userContext);
    const {email,displayName}=logInUser
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/Login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };
  
  export default PrivateRoute;