import { Controller } from "stimulus"

export default class extends Controller {
  static get targets() {
    return ["name"]
  }

  greet() {
    console.log(`Hello, ${this.name}!`)
  }

  get name() {
    return this.nameTarget.value
  }
}
