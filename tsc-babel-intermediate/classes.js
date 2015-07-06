export class MySuperClass {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    createHello() {
        return 'Hello ' + this.name + ', your id is ' + this.id;
    }
}
export class MyClass extends MySuperClass {
    constructor(id, name) {
        super(id, name);
        this.hello = super.createHello();
    }
    static getInstance() {
        return new MyClass(0, 'Mathew');
    }
}
