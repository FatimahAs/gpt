import React from "react";
import "./whatGPT3.css";

const Feature = ({ title, text }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__whatgpt-container__whatgpt-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__whatgpt-container_whatgpt-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
