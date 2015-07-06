export class MySuperClass {
    constructor(private id: number, private name: string) {
    }
    createHello(): string {
        return 'Hello ' + this.name + ', your id is ' + this.id;
    }
}

export class MyClass extends MySuperClass {
    private hello: string;
    constructor(id: number, name: string) {
        super(id, name);
        this.hello = super.createHello();
    }
    static getInstance(): MySuperClass {
        return new MyClass(0, 'Mathew');
    }
}
