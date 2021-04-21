import { Controller } from "stimulus"

export default class extends Controller {
  static get classes() {
    return ["loading"]
  }

  loadResults() {
    this.element.classList.add(this.loadingClass)

    // simulate a fetch()

    setTimeout(() => {
      this.element.classList.remove(this.loadingClass)
    }, 1000);
  }
}
