import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Skills from "../components/pages/Skills/Skills";
import Portfolio from "../components/pages/Portfolio/Portfolio";
import ContactMe from "../components/pages/ContactMe/ContactMe";
import useData from "../Context/Context";

const Routing = () => {
let theme = useData().themeReducer.themeState
console.log(theme.theme);
  return (
    <div style={{background:`${theme.theme?'black':'#F4F9F4'}`}}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Skills">
          <Skills />
        </Route>
        <Route path="/Portfolio">
          <Portfolio />
        </Route>
        <Route path="/ContactMe">
          <ContactMe />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Routing;
