import React from "react";
import {Socials} from "./Socials";
import './Footer.css';

export const Footer = () => (
  <footer>
    <div className="uk-text-center uk-padding">
      &copy; {new Date().getFullYear()} Priestine. Made with{" "}
      <a href="https://getuikit.com" target="_blank">
        <i data-uk-icon="icon: uikit;" />
      </a>
        <Socials/>
    </div>
  </footer>
);
