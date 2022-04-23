import React from "react";
import Productcontextprovider from "./context/Productcontextprovider";
import Store from "./components/Store";
import {Route,Redirect,Switch } from "react-router-dom";
import Productdetail from "./components/Productdetail";

function App() {

  return (
    <div>
      <Productcontextprovider>
        <Switch>
          <Route path="/products/:id" component={Productdetail}/>
          <Route path="/products" component={Store}/>
          <Redirect to="/products"/>
        </Switch>
      </Productcontextprovider>
    </div>
  );
}

export default App;
