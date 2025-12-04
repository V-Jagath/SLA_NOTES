// READONLY - this keyword is used for dont change this id it's constant 

type User1 = {
    readonly id: number
    name: string,
    mobile: number,
    isActive: boolean
}

const student: User1 = {
    id: 1234,
    name: "jagath",
    mobile: 93602,
    isActive: true
}

const student1 = {

}

// Optional Perameter 

type User2 = {
    id: number,
    name: string,
    mobile: number,
    isActive: boolean,
    DebitCard?: number
}


