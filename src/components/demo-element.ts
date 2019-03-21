import {AdpBaseLitElement} from './BaseElement'
import {html, css, property, customElement} from 'lit-element'

@customElement('demo-element')
export default class DemoElement extends AdpBaseLitElement {

    @property({type: Boolean})
    checked:boolean = true;

    static styles = css `
        #demoElement {
            margin: 10px;
            padding: 20px;
            background-color: royalblue;
            border-radius: 15px;
            height: 150px;
            width: 500px;
            color: white;
            user-select: none;
            -ms-user-select: none;
            cursor: pointer;
        }

        #demoElement h3 {
            margin-top: 5px;
            font-size: 14pt;
            font-style: italic;
        }
    `

    render() {
        return html `
            <div id="demoElement" @click=${this.clickHandler}>
                <b>Clickable Demo Element</b>
                <div>
                    <h3>Click this component to toggle the boolean</h3>
                </div>
                <div>
                    Is Checked: ${this.checked}
                </div>
            </div>
        `
    }

    clickHandler(event:MouseEvent) {
        this.checked = !this.checked;
        console.info(event);
    }
}
