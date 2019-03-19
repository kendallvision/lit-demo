import {html, css} from 'lit-element'
import BaseElement from './BaseElement'

export default class TestElement extends BaseElement {
    static get is() { return 'test-element' }

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

customElements.define(TestElement.is, TestElement);
