import React from "react";
import Productcontextprovider from "./context/Productcontextprovider";
import Store from "./components/Store";
import {Route , Routes ,Navigate} from "react-router-dom";
import Productdetail from "./components/Productdetail";
import Cardcontextprovider from "./context/Cardcontextprovider";
import Navbar from "./components/shared/Navbar";
import Basket from "./components/Basket";
function App() {

  return (
    <div>
      <Productcontextprovider>
        <Cardcontextprovider>
          <Navbar/>
          <Routes>
            <Route path="/products/:id" element={<Productdetail/>}/>
            <Route path="/products" element={<Store/>}/>
            <Route path="/basket" element={<Basket/>}/>
            <Route path="/*" element={<Navigate to="/products"/>}/>
          </Routes>
        </Cardcontextprovider>
      </Productcontextprovider>
    </div>
  );
}

export default App;
