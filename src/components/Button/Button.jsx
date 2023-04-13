import React from "react";
import "./button.css";

const Button = (props) => {

  var isDisabled = props.des === '1' ? true : false;

  return <button disabled={isDisabled}  className={`btn ${props.theme} ${props.size}` }>{props.children}</button>;
};

export default Button;
