import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import ProductList from "./Components/ProductList/ProductList";
import Menu from "./Components/Menu/Menu";


class App extends Component {
  render() {
    return (
      <div className="app">
        
        <Header />
        <div className="app-body">
          <Menu />
          <div className="content">
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
