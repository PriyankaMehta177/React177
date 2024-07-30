
<div id="parent">
    <div id="child">
        <h1>
            Hello React
        </h1>
    </div>
</div>


    const heading = React.createElement("div",{id:parent},React.createElement("div",{id:child},React.createElement("h1",{},"hello react")));

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading)
