import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { add, sub, mult, div} from "./Calc";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ul className="ul">
      <center>
      <li  className="add">  sum two numbers :{
        add( 10,10)}    </li>
        <li className="sub"> sub two number:{
          sub(10,10)}    </li>
           <li className="mult"> mult two number:{
          mult(10,10)}    </li>
           <li className="div"> div two number:{
          div(10,10)} 
         </li>
         </center>
      </ul>
    <App />
  </StrictMode>
);
