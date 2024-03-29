import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://unsplash.com/photos/burger-with-lettuce-and-tomato-E94j3rMcxlw.png"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return(
  <div className="app">
    <Header/>
  </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);