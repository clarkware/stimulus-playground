import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    console.log("here");
    this.element.textContent = "It works!"
  }
}
