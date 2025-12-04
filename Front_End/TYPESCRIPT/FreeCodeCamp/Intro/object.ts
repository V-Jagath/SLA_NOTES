// const user: { name: string; email: string; isActive: boolean } = {
//     name: "Jagath",
//     email: "jagath@9360",
//     isActive: true
// }

// DESTRUCTARING 

function createUser({ name, isPaid }: { name: string, isPaid: boolean }) {

}

createUser({ name: "jagath", isPaid: true })

// RETURN TYPE - OBJECT 

function newUser(name: string, age: number): { name: string, age: number } {
    return { name: name, age: age }
}

newUser("Jagath", 23)

// pass an object to argument to a function 

function pastUser({ name, age }: { name: string, age: number }) {
    return name + age
}

const newpastUser = { name: "Jagath", age: 25, email: "dsfg@gmail.com" }

console.log(pastUser({ name: "Jagath", age: 24 }))
// console.log(pastUser({ name: "Jagath", age: 24,email:"fasdfas" }))
console.log(pastUser(newpastUser))