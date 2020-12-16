import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";

/**
 *  DESCRIPTION: 
 *  FLOW: App => Home
 *  PARENT: App
 *  CHILDREN: none
 */

function Routes() {

  return (

    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Redirect to="/"/>
      </Switch>
    </div>

  );

}


export default Routes;