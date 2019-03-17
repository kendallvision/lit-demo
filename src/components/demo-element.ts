import BaseElement from './BaseElement'
import {html, property, customElement} from 'lit-element'

@customElement('demo-element')
export default class DemoElement extends BaseElement {

    @property({type: Boolean})
    checked:boolean = true;

    render() {
        return html `
            <style>
                #demoElement {
                    margin: 10px;
                    padding: 25px;
                    background-color: royalblue;
                    border-radius: 15px;
                    height: 300px;
                    color: white;
                    user-select: none;
                    cursor: pointer;
                }

            </style>

            <div id="demoElement" @click=${this.clickHandler}>
                <b>Demo Element</b>
                <div>
                    Is Checked: ${this.checked}
                </div>
            </div>
        `
    }

    clickHandler(event:MouseEvent) {
        console.log(event);
    }
}
