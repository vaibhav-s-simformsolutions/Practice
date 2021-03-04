"use strict";
class Dept {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class ITDept extends Dept {
    constructor(id, admins) {
        super(id, 'IT');
        this.admin = admins;
    }
    describe() {
        return `IT Department : ${this.id}`;
    }
}
const it = new ITDept('2', ['a', 'b', 'c']);
console.log(it.describe());
const user1 = {
    name: 'abc',
    age: 20,
    details() {
        console.log(`${this.name} : ${this.age}`);
    }
};
user1.details();
