import React from "react";
import ReactDOM from "react-dom/client"
import Header  from "./component/Header";
import Body  from "./component/Body";





   // const heading = React.createElement("div",{id:parent},React.createElement("div",{id:child},React.createElement("h1",{},"hello react"),));

// const jsxHeading = <h1>Hello JSX</h1>

// const FunctionalComp = () =>{
//     return <h1>Hello React function com</h1>
// }




const AppLayout =()=>{
    return (
        <div>
       <Header/>
       <Body/>
        </div>
    )
}

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout />);
