module MyModule {

  // module scoped symbol
  var key = Symbol("key");

  export class MyClass {
      constructor(privateData: string) {
          this[key] = privateData;
      }
      doStuff() {
          this[key];
      }
  }

}

var c = new MyModule.MyClass("hello");
c["key"] === undefined
