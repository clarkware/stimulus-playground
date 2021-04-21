import { Controller } from "stimulus"

export default class extends Controller {
  static get targets() {
    return ["name", "greeting"]
  }

  greet() {
    let greeting = `Hello, ${this.name}!`
    this.greetingTarget.textContent = greeting
  }

  get name() {
    return this.nameTarget.value
  }
}
