// 1.String 

let greeting: string = "Hello Jagath"
// greeting is always string don't accept other datatypes
// greeting=24 //its throw a error  Type 'number' is not assignable to type 'string'
console.log(greeting)
greeting.toLowerCase() // greeting. all methods are showing

// 2. Number
// Number is for numbers like 42. javascript does not have a special runtime value for integers
// so there no equivvalent to int or float- everything is simply 

let userId: number = 32789;
let price: number = 489.99;
price.toFixed()

// 3. Boolean 
let isLoggedin: boolean = true;

isLoggedin.valueOf()


// 4. Any its a keyword but its used to some times because its a javascript behaviour
// TypeScript also has a special type, any, that
// you can use whenever you don’t want a particular value to cause typechecking errors.
// inferance - automatically typescript find a datatype and assign

let hero;

function getHero() {
    return "Thor"
}

hero = getHero; // now hero type is a Any 
hero = 10;  // now i changed a value to number dont error show because its type is any.

export { } // its used to error dont show for our satisfaction ithu chuma


