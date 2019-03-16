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
                }

            </style>

            <div id="demoElement">
                <b>Demo Element</b>
                <div>
                    Is Checked: ${this.checked}
                </div>
            </div>
        `
    }
}
