// Type Aliases
// Type Aliases is used to you defined a variable types in one time and its used for 
// many times use this name 

// same type more than once and refer to it by a single name 

type User = {
    name: string,
    email: string,
    mobile: number,
    isPaid: boolean
}

function createUser(user: User): User {
    return user
}

createUser({ name: "jagath", email: "sdf", mobile: 23234, isPaid: true })