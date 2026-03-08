1️. Difference between `var`, `let`, and `const`

i.var
- var is the old way of declaring variables in JavaScript.
- It is function scoped, meaning it is available throughout the function where it is declared.
- It can be e-declared and updated.
Example:
  javascript
var x = 10;
var x = 20; // allowed

now,
ii.let
- Introduced in ES6 (2015).
- It is block scoped (only accessible inside the block {}).
- It can be updated but not re-declared in the same scope.
Example:
let x = 10;
x = 20; // allowed

iii.const
- Also introduced in ES6.
- It is block scoped like let.
- It cannot be updated or re-declared after assignment.
Example:
const x = 10;



2️. What is the Spread Operator (...)?
The spread operator is used to expand elements of an array or object.
Example with Array:
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1,2,3,4,5]

Example with Object:
const user = {name: "John"};
const updatedUser = {...user, age: 25};

It is commonly used for:
i.Copying arrays/objects
ii.Merging arrays/objects
iii.Passing multiple arguments


3️.Difference between map(), filter(), and forEach()
i.map()
Creates a new array by applying a function to each element.
const numbers = [1,2,3];
const doubled = numbers.map(n => n * 2);

ii.filter()
Creates a new array containing elements that pass a condition.
const numbers = [1,2,3,4];
const even = numbers.filter(n => n % 2 === 0);

iii.forEach()
Executes a function for each element but does not return a new array.
const numbers = [1,2,3];
numbers.forEach(n => console.log(n));


4️.What is an Arrow Function?
Arrow functions are a shorter syntax for writing functions, introduced in ES6.
Example:
const add = (a, b) => {
  return a + b;
};
Short version:
const add = (a, b) => a + b;
Benefits:
i.Shorter syntax
ii.Does not bind its own 'this'


5️.What are Template Literals?
Template literals are used for string interpolation and multi-line strings.
They use backticks ( ) instead of quotes.
Example:
const name = "John";
const message = `Hello ${name}`;
console.log(message);
Output:
Hello John

Benefits:
i.Embed variables easily
ii.Multi-line strings
iii.More readable string formatting