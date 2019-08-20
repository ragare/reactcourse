// arguments object - mo longer bound

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'North Carolina'],
    printPlaceslived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
};

console.log(user.printPlaceslived());

const multiplier = {
    numbers: [2, 3, 4],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map(n => n * this.multiplyBy);
    }
};

console.log(multiplier.multiply());