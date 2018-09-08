// like C#, TypeScript has strongly typed variables, but it also has implicit typing
// Strongly Typed
var usernames;
// Impicitly Typed
var password = "BadPassword";
// Hover over password -- it shows as a string
// Other types is TypeScript
var isHotOutside = true;
var age = 24;
var price = 99.99; // no need for decimal, float, long, int, or short -- number works for all
var iCanBeAnything = { "Key": "Value", "Array": ["1", "2", "3"], "AnotherKey": 7 };
var noValue;
var instructors = ['Paul', 'Kenn', 'Tom', 'Carolyn'];
var nums = [25, 50, 75];
// now try setting a variable of one type to another type
var myName = "Alecx";
// var myName = 76;
// Notice we get the same comiple time errors as we did with C# -- now try to save
// ts/01-variablesAndTypes.ts(19,5): error TS2403: Subsequent variable declarations must have the same type.  Variable 'myName' must be of type 'string', but here has type // 'number'.
// notice the compile error we get
// Tuples 
// Tupels allow you to create an array of multiple different types
var movieAndRatings = ["The Grudge", 8.5];
// let movieAndRatings: [ string, number ] = [ 2 , "Ghost Rider" ];
// notice tuples are also typed, so the values in to be in the same order 
// Enums in Typescript
var MovieGenre;
(function (MovieGenre) {
    MovieGenre[MovieGenre["Horror"] = 1] = "Horror";
    MovieGenre[MovieGenre["Suspense"] = 2] = "Suspense";
    MovieGenre[MovieGenre["Drama"] = 3] = "Drama";
})(MovieGenre || (MovieGenre = {}));
;
var TheGrudge = MovieGenre[1];
console.log("This is a " + TheGrudge + " movie");
// play around with the Genre the movie is implementing, and see the number in the console change
// There are also Union types, which give more flexibility, but the goal is still to have a specific type for our variables
var optionalPrice;
optionalPrice = 12.50;
optionalPrice = "Free";
// but you still can't give them data of a type you didn't declare
// optionalPrice = true;
//# sourceMappingURL=01-variablesAndTypes.js.map