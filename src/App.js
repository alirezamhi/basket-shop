import React from "react";
import Productcontextprovider from "./context/Productcontextprovider";
import Store from "./components/Store";
import {Route,Redirect,Switch } from "react-router-dom";
import Productdetail from "./components/Productdetail";
import Cardcontextprovider from "./context/Cardcontextprovider";
import Navigate from "./components/shared/Navigate";
import Basket from "./components/Basket";
function App() {

  return (
    <div>
      <Productcontextprovider>
        <Cardcontextprovider>
          <Navigate/>
          <Switch>
            <Route path="/products/:id" component={Productdetail}/>
            <Route path="/products" component={Store}/>
            <Route path="/basket" component={Basket}/>
            <Redirect to="/products"/>
          </Switch>
        </Cardcontextprovider>
      </Productcontextprovider>
    </div>
  );
}

export default App;
