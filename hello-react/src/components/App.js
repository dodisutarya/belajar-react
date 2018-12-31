import React, { Component } from 'react';
import Header from "./Header";
import Top from "./Top";
import Footer from "./Footer";
import List from "./List";





class App extends Component {
  render() {
    return (
      <div>
        <Header list="3 terbaik"/>
          <Top />
          <List />
        <Footer name="makanan nusantara" tahun="2018" />
      </div>
    );

  }
}

export default App;
