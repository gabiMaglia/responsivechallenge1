import React from "react";
import Button from "../Button/Button";
import "./button-chart.css";

const ButtonChart = () => {
  return (
    
    <div className="app">
      <div className="app-title  text-lg-start">
        <h1 className="title">Buttons </h1>
        <p>Bootstrap 5.2 Buttons variant</p>
      </div>

      <div className="app-chart">
        <div id="colorRow" className="row text-lg-start">
          <h3 className="my-4">Color Variant</h3>
          <div className="col-12 d-flex gap-5">
            <p>
              <label htmlFor="primary">{"< Button 'btn-primary' />"}</label>
              <Button theme="btn-primary">Primary</Button>
            </p>
            <p>
              <label htmlFor="secondary">{"<Button 'btn-secondary' />"}</label>
              <Button theme="btn-secondary">Secondary</Button>
            </p>
            <p>
              <label htmlFor="success">{"<Button 'btn-success' />"}</label>
              <Button theme="btn-success">Success</Button>
            </p>
            <p>
              <label htmlFor="danger">{"<Button 'btn-danger' />"}</label>
              <Button theme="btn-danger">Danger</Button>
            </p>
            <p>
              <label htmlFor="warning">{"<Button 'btn-warning' />"}</label>
              <Button theme="btn-warning">Warning</Button>
            </p>
            <p>
              <label htmlFor="info">{"<Button color Info />"}</label>
              <Button theme="btn-info">Info</Button>
            </p>
            <p>
              <label htmlFor="light">{"<Button color Light />"}</label>
              <Button theme="btn-light">Light</Button>
            </p>
            <p>
              <label htmlFor="dark">{"<Button color Dark />"}</label>
              <Button theme="btn-dark">Dark</Button>
            </p>
            <p>
              <label htmlFor="link">{"<Button color Link />"}</label>
              <Button theme="btn-link">Link</Button>
            </p>
          </div>
        </div>
        <div id="sizeRow" className="row text-lg-start">
          <h3 className="my-4">Size Variant</h3>
          <div className="col-12 d-flex gap-5">
            <p>
              <label htmlFor="small">{'<Small Button "btn-sm" />'}</label>
              <Button theme="btn-primary" size="btn-sm">
                {" "}
                Small button{" "}
              </Button>
            </p>

            <p>
              <label htmlFor="medium">{'<Medium Button "btn-md" />'}</label>
              <Button theme="btn-primary" size="btn-md">
                {" "}
                Medium button{" "}
              </Button>
            </p>

            <p>
              <label htmlFor="large">{'<Large Button "btn-lg" />'}</label>
              <Button theme="btn-primary" size=" btn-lg">
                {" "}
                Large button{" "}
              </Button>
            </p>
          </div>
        </div>
        <div id="outlineRow" className="row text-lg-start">
          <h3 className="my-4">Outline Variant</h3>
          <div className="col-12 d-flex gap-5">
            <p>
              <label htmlFor="primary">
                {"<Button 'btn-outline-primary' />"}
              </label>
              <Button theme="btn-outline-primary">Primary</Button>
            </p>
            <p>
              <label htmlFor="secondary">
                {"<Button 'btn-outline-secondary' />"}
              </label>
              <Button theme="btn-outline-secondary">Secondary</Button>
            </p>
            <p>
              <label htmlFor="success">
                {"<Button 'btn-outline-success' />"}
              </label>
              <Button theme="btn-outline-success">Success</Button>
            </p>
            <p>
              <label htmlFor="danger">
                {"<Button 'btn-outline-danger' />"}
              </label>
              <Button theme="btn-outline-danger">Danger</Button>
            </p>
            <p>
              <label htmlFor="warning">
                {"<Button 'btn-outline-warning' />"}
              </label>
              <Button theme="btn-outline-warning">Warning</Button>
            </p>
            <p>
              <label htmlFor="info">{"<Button 'btn-outline-info' />"}</label>
              <Button theme="btn-outline-info">Info</Button>
            </p>
            <p>
              <label htmlFor="dark">{"<Button  'btn-outline-dark' />"}</label>
              <Button theme="btn-outline-dark">Dark</Button>
            </p>
          </div>
        </div>
        <div id="disableRow" className="row text-lg-start">
          <h3 className="my-4">Disable Variant</h3>
          <div className="col-12 d-flex gap-5">
            <p>
              <label htmlFor="disableBtn">
                <Button theme='btn btn-primary' des='1'>
                      Disable Button
                </Button>
              </label>
            </p>
            <p>
              <label htmlFor="disableBtn2">
                <Button theme='btn btn-link' des='1'  >
                  Disable Link button
                </Button>
              </label>
            </p>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ButtonChart;
