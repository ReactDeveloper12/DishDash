//parent is a react element which at the end is a javascript object
//If we have to give siblings to children we have to convert the children fields into array of children
//[React.createElement("h1",{},"-----"),React.createElement("h2",{},"-----")]--->Here there are two siblings
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{id:"tag"},"Nested H1 Tag")
    )
);
//An element is a plain object describing a component instance or DOM node and its desired properties. 
//It contains only information about the component type (for example, a Button), 
//its properties (for example, its color), and any child elements inside it.
//heading is nothing but a javascript object and react element
const heading = React.createElement("h1",{id:"heading"},"Heading of Page");
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
//react can be used in existing project
//this render method converts that heading object into H1 tag
root.render(parent);