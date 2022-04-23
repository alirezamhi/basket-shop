import React from "react";
import Productcontextprovider from "./context/Productcontextprovider";
import Store from "./components/Store";
import {Route,Redirect,Switch } from "react-router-dom";
import Productdetail from "./components/Productdetail";
import Cardcontextprovider from "./context/Cardcontextprovider";
function App() {

  return (
    <div>
      <Productcontextprovider>
        <Cardcontextprovider>
          <Switch>
            <Route path="/products/:id" component={Productdetail}/>
            <Route path="/products" component={Store}/>
            <Redirect to="/products"/>
          </Switch>
        </Cardcontextprovider>
      </Productcontextprovider>
    </div>
  );
}

export default App;
