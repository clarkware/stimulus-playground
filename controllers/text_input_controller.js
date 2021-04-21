import { Controller } from "stimulus"

export default class extends Controller {
  static get targets() {
    return ["input", "output"]
  }

  changed() {
    this.outputTarget.textContent = this.inputTarget.value
  }
}
