import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";

function App() {
  useEffect(() => {
    document.title = "CPS530 - Term Project"
  });

  return (
    <React.Fragment>
      <Navbar />
      <Route path = '/page1'>
        <Page1/>
      </Route>
      <Route path = '/page2'>
        <Page2/>
      </Route>
      <Route path = '/page3'>
        <Page3/>
      </Route>
      <Route path = '/page4'>
        <Page4/>
      </Route>
      <Route path = '/page5'>
        <Page5/>
      </Route>
      <Route path = '/page6'>
        <Page6/>
      </Route>
    </React.Fragment>
  );
}

export default App;
