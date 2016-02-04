export default class Hello {
  constructor(options) {
    this.name = options.name
  }

  sayHi() {
    return "hello, " + this.name + "!"
  }
}
