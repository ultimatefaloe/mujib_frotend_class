// two typemof export 
// 1. Named Export: You can export multiple variables, functions, or classes from a single file using named exports. Each exported element must be imported using its exact name in the importing file. Named exports are useful when you want to export multiple items from a module.
// 2. Default Export: You can export a single variable, function, or class as the default export from a file. When importing a default export, you can choose any name for the imported element in the importing file. Default exports are useful when you want to export a single primary item from a module.


// ways to import
// 1. Named Import: When importing named exports, you need to use the exact names of the exported elements enclosed in curly braces. For example, if you have a named export called `myFunction`, you would import it like this: `import { myFunction } from './myModule';`
// 2. Default Import: When importing a default export, you can choose any name for the imported element. For example, if you have a default export called `myDefaultFunction`, you would import it like this: `import myDefaultFunction from './myModule';`


// import { data, student, greet, Person, additionalData } from './data.js'; // Named imports

// import canBeRename from './data.js'; // Default import

// canBeRename() // Output: "Hello, World!"