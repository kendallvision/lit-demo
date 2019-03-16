import {LitElement, html} from 'lit-element'

export default class TestElement extends LitElement {
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
                }
            </style>
            <div id="testApplication">
                Test Application
            </div>
        `
    }
}

customElements.define(TestElement.is, TestElement);
