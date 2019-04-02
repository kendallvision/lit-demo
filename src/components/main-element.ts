import {html, css, customElement, property} from 'lit-element'
import {AdpBaseLitElement} from './AdpBaseLitElement'

@customElement('main-element')
export default class MainElement extends AdpBaseLitElement {

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
            font-size: 16pt;
        }

        #mainElement h2 {
            margin-top: 10px;
            margin-bottom: 15px;
            font-size: 24pt;
        }

        #mainElement h3 {
            margin-top: 5px;
            font-size: 12pt;
            font-style: italic;
        }
    `

    render() {
        return html `
            <div id="mainElement">
                <h2>Main Element</h2>
                <h3>This component demonstrates utilizing internal properties</h3>
                Message: ${this.message}
            </div>
        `
    }
}
