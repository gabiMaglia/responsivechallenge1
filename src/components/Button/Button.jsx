import React from "react";
import "./button.css";

const Button = (props) => {
  return <button className={`btn ${props.theme} ${props.size}`}>{props.children}</button>;
};

export default Button;
