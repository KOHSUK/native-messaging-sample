import React from 'react';
import ReactDOM from 'react-dom';

import './content.css';

const Main = () => {
  const handleClick = () => {
    alert("Hello, from Chrome Extension.");
  };
  return <button onClick={handleClick}>Click me</button>;
};

const app = document.createElement("div");
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);