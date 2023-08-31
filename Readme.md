//parent is a react element which at the end is a javascript object
//If we have to give siblings to children we have to convert the children fields into array of children
# //[React.createElement("h1",{},"-----"),React.createElement("h2",{},"-----")]--->Here there are two siblings
# [const parent = React.createElement(
#   "div",
#  {id:"parent"},
#   React.createElement(
#       "div",
#       {id:"child"},
#       React.createElement("h1",{id:"tag"},"Nested H1 Tag")
#  )
);]

//An element is a plain object describing a component instance or DOM node and its desired properties. 
//It contains only information about the component type (for example, a Button), 
//its properties (for example, its color), and any child elements inside it.
//heading is nothing but a javascript object and react element


# const heading = React.createElement("h1",{id:"heading"},"Heading of Page");
# const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
//react can be used in existing project
//this render method converts that heading object into H1 tag

//npm doesnt stands for node package manager but at backend it manages package---It manages package
//npm is a reository for all the package.All the package,libarary,utilities are managed by npm

//weback is bundler--it basically bundles our app for production

// there are two types of dependencies we can install one is normal dependencies and one is dev dependencies

# //read about caret(^) and tilde(~)
# //if we put caret behind version if there is minor chanage in version it can automatically change minor 
# version and tilde do same thing for major version change its always good to use caret.

//package.json--->approx version of dependencies
//package-lock.json-->it keeps track of exact version of every dependencies

//npx means executing a package.npx command is used to execute a package

# Parcel
 ->Dev Build
 ->HMR- Hot Module Replacement