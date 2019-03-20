import {html, css, customElement} from 'lit-element'
import AdpBaseLitElement from './BaseElement'

@customElement('test-element')
export default class TestElement extends AdpBaseLitElement {

    static styles = css `
        #testApplication {
            padding: 10px;
            margin: 10px;
            background-color: yellow;
            border-radius: 16px;
            font-weight: bold;
            font-size: 26pt;
            height: 250px;
            user-select: none;
            -ms-user-select: none;
        }

        h2 {
            margin-top: 10px;
            margin-bottom: 15px;
        }
    `

    render() {
        return html `
            <div id="testApplication">
                <div>
                    <h2>Test Application</h2>
                </div>
                <div>
                    InnerHTML: <slot></slot>
                </div>
            </div>
        `
    }
}
