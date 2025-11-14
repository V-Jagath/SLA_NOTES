function practice() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const adult = true;

            adult ? resolve("Adult") : reject("Child")

        }, 2000);
    })

};

function practice1() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const adult1 = false;

            adult1 ? resolve("man") : reject("children")
        }, 4000);
    })

};

practice().then((value) => { console.log(value); return practice1() })

    .then((value) => console.log(value))

    .catch(err => console.error(err))