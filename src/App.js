
import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";

class App extends Component {
  render() {
    return (

      <div className="App">
        <Navbar />
        <Section
          title="SOCIAL"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="MENTAL"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="HORMONAL"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="INDUSTRIA"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="SOBRE"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
  );
 }
}

export default App;
