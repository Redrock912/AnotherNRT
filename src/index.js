import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

const rootElement = document.getElementById("root");
ReactDom.render(<Counter />, rootElement);
