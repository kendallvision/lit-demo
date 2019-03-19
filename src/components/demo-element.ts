import BaseElement from './BaseElement'
import {html, css, property, customElement} from 'lit-element'

@customElement('demo-element')
export default class DemoElement extends BaseElement {

    @property({type: Boolean})
    checked:boolean = true;

    static styles = css `
        #demoElement {
            margin: 10px;
            padding: 25px;
            background-color: royalblue;
            border-radius: 15px;
            height: 300px;
            color: white;
            user-select: none;
            -ms-user-select: none;
            cursor: pointer;
        }
    `

    render() {
        return html `
            <div id="demoElement" @click=${this.clickHandler}>
                <b>Demo Element</b>
                <div>
                    Is Checked: ${this.checked}
                </div>
            </div>
        `
    }

    clickHandler(event:MouseEvent) {
        this.checked = !this.checked;
        console.log(event);
    }
}
