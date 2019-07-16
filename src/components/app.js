import { LitElement, html, css } from 'lit-element'

class App extends LitElement {
  static get styles () {
    return css`
      :host {
        display: block;
        font-size: 1.4rem;
      }

      .container {
        display: flex;
      }
    `
  }

  render() {
    return html`
      <div class="container">
        Hello world
      </div>
    `
  }
}

window.customElements.define('x-app', App)
