import {html, css, customElement} from 'lit-element'
import {AdpBaseLitElement} from './AdpBaseLitElement'

@customElement('test-element')
export default class TestElement extends AdpBaseLitElement {

    static styles = css `
        #testElement {
            padding: 20px;
            margin: 10px;
            background-color: yellow;
            border-radius: 16px;
            font-weight: bold;
            font-size: 18pt;
            height: 150px;
            width: 500px;
            user-select: none;
            -ms-user-select: none;
        }

        #testElement h2 {
            font-size: 24pt;
            margin-top: 10px;
            margin-bottom: 15px;
        }

        #testElement h3 {
            margin-top: 5px;
            font-size: 12pt;
            font-style: italic;
        }
    `

    render() {
        return html `
            <div id="testElement">
                <div>
                    <h2>Test Application</h2>
                    <h3>This element demonstrates controlling where the innerHtml displays</h3>
                </div>
                <div>
                    InnerHTML: <slot></slot>
                </div>
            </div>
        `
    }
}
