import * as React from "react";
import Highlight from "react-highlight";
import "./SyntaxBox.css";
import { Switcher } from "./Switcher";

export interface SyntaxBoxProps {
  children?: Element[] | string;
  language: string;
  switchLanguage?: () => any;
}

export const SyntaxBox = ({
  children,
  language,
  switchLanguage
}: SyntaxBoxProps) => (
  <div className="uk-width-1-1">
    <div className="syntax-box">
      <div className="syntax-box-header">
          {language.toUpperCase()}
          {switchLanguage ? (
            <Switcher
              checked={language === "typescript"}
              toggleSwitcher={() => switchLanguage()}
            />
          ) : (
            undefined
          )}
      </div>

      <Highlight className={language}>{children}</Highlight>
    </div>
  </div>
);
