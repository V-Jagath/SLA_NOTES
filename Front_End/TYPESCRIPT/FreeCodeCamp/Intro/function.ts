function add(num: number) {
    return num + 2
}

add(23)

function toUpperCase(val: string) {
    return val.toLocaleUpperCase()
}

toUpperCase("jagath")

function signIn(name: string, email: string, mobile: number, ispaid: boolean) {
    console.log(`Name:${name},email:${email},mobile:${mobile},isPaid:${ispaid}`)
};

signIn("jagath", "jagath9360@gmail.com", 24453, true);

let login = (name: string, email: string, age: number, ispaid: boolean = false) => {

}

login("suriya", "suriya@gmail.com", 23) // not error because default parameter is here.