import {html} from 'lit-element'
import BaseElement from './BaseElement'

export default class TestElement extends BaseElement {
    static get is() { return 'test-element' }

    render() {
        return html `
            <style>
                #testApplication {
                    padding: 10px;
                    margin: 10px;
                    background-color: yellow;
                    border-radius: 16px;
                    font-weight: bold;
                    font-size: 26pt;
                    height: 250px;
                }
            </style>
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
