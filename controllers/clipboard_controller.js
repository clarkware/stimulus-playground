import { Controller } from "stimulus"

export default class extends Controller {
  static get targets() {
    return ["pin"]
  }

  copy() {
    this.pinTarget.select()
    document.execCommand("copy")
  }
}
