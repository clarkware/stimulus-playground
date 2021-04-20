import { Controller } from 'stimulus'

export default class extends Controller {
  static get targets() {
    return ["toggleable", "keyword"]
  }

  toggle(event) {
    event.preventDefault()
    let isHidden = this.toggleableTarget.classList.toggle('hidden')
    this.keywordTarget.textContent = (isHidden ? 'Show' : 'Hide');
  }
}
