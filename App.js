import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="heading" tabIndex="5">Namaste React 🚀</h1>;
const Heading = () => <div className="container"> <Title /> <h2>by Shijith</h2></div>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading />);