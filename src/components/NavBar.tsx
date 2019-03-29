import React from "react";
import {NavLink} from "react-router-dom";
import {Switcher} from "./Switcher";

export const NavBar = ({ switchTheme, isInLightMode }: any) => (
    <div className="uk-position-top">
        <nav
            className="uk-navbar-container uk-navbar-transparent"
            data-uk-navbar
        >
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li><NavLink exact to="/grace">Grace</NavLink></li>
                    <li><NavLink to="/semantics">Semantics</NavLink></li>
                </ul>
            </div>
            <div className="uk-navbar-right">
                <i data-uk-icon="icon: bolt;"/>
                <Switcher checked={isInLightMode} toggleSwitcher={() => switchTheme()}/>
            </div>
        </nav>
    </div>
);
