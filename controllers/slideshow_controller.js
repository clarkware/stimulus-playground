import { Controller } from "stimulus"

export default class extends Controller {
  static get targets() {
    return ["slide"]
  }

  static get values() {
    return { index: Number }
  }

  next() {
    this.indexValue++
  }

  previous() {
    this.indexValue--
  }

  indexValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.indexValue
    })
  }
}
