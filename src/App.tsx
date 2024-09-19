import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Foods from "./components/Foods";
import HelloWorld from "./components/HelloWorld";

function App() {
    return (
        <div>
            <HelloWorld />
            <Foods />
        </div>
    );
}

export default App;
