import {html, css, customElement, property} from 'lit-element'
import BaseElement from './BaseElement'

@customElement('main-element')
export default class MainElement extends BaseElement {

    @property()
    message:string = 'This is the default message.'

    static styles = css `
        #mainElement {
            padding: 20px;
            margin: 10px;
            border-radius: 10px;
            background-color: rosybrown;
            height: 150px;
            width: 500px;
            user-select: none;
            -ms-user-select: none;
        }

        #mainElement h2 {
            margin-top: 10px;
            margin-bottom: 15px;
        }
    `

    render() {
        return html `
            <div id="mainElement">
                <h2>Main Element</h2>
                Message: ${this.message}
            </div>
        `
    }
}
