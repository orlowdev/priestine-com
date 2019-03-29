import React, { Component } from "react";
import "./App.css";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { GraceIndex } from "./pages/grace/GraceIndex";
import { SemanticsIndex } from "./pages/semantics/SemanticsIndex";
import { Me } from "./pages/Me";
import { Footer } from "./components/Footer";

export class App extends Component {
  public state = {
    isInLightMode: false,
    language: "javascript"
  };

  public handleLanguageSwitch = (): void =>
    this.setState((prevState: Readonly<any>) => ({
      ...prevState,
      language:
        prevState.language === "javascript" ? "typescript" : "javascript"
    }));

  public handleSwitchTheme = (): void =>
    this.setState(
      (prevState: Readonly<any>) => ({
        ...prevState,
        isInLightMode: !prevState.isInLightMode
      }),
      this.applyTheme
    );

  public applyTheme = (): void => {
    const bodyElement = document.getElementsByTagName("body")[0];

    this.state.isInLightMode
      ? bodyElement.classList.add("light")
      : bodyElement.classList.remove("light");

    bodyElement.style.setProperty(
      "--main-color",
      this.state.isInLightMode ? "#303030" : "#fcfcfc"
    );

    bodyElement.style.setProperty(
      "--box-shadow-color",
      this.state.isInLightMode ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.3)"
    );
  };

  public render() {
    UIkit.use(Icons);

    return (
      <div>
        <BrowserRouter>
          <NavBar
            switchTheme={this.handleSwitchTheme}
            isInLightMode={this.state.isInLightMode}
          />
          <Switch>
            <Redirect exact from="/" to="/grace" />
            <Route
              exact
              path="/grace"
              render={() =>
                GraceIndex({
                  language: this.state.language,
                  handleLanguageSwitch: this.handleLanguageSwitch
                })
              }
            />
            <Route path="/semantics" component={SemanticsIndex} />
            <Route path="/me" component={Me} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
