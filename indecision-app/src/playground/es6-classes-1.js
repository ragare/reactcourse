class Person {
    constructor(name = 'Anonymous') {
        this.name = name;
    }
    getGretting() {
        return 'Hi ' + this.name + ' !';
    }
}

const me = new Person('Sam Gandal');
console.log(me.getGretting());

const other = new Person();
console.log(other.getGretting());