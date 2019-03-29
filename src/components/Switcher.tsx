import React from "react";
import "./Switcher.css";

export interface SwitcherProps {
  checked: boolean;
  toggleSwitcher: () => any;
}

export const Switcher = ({ checked, toggleSwitcher }: SwitcherProps) => (
  <label className="switch">
    <input
      type="checkbox"
      onChange={() => toggleSwitcher()}
      checked={checked}
    />
    <span className="slider round" />
  </label>
);
