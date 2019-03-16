import {html, customElement, property} from 'lit-element'
import BaseElement from './BaseElement'

@customElement('main-element')
export default class MainElement extends BaseElement {

    @property()
    message:string = 'This is the default message.'

    render() {
        return html `
            <style>
                #mainElement {
                    padding: 20px;
                    margin: 10px;
                    border-radius: 10px;
                    background-color: rosybrown;
                    height: 250px;
                }
            </style>            
            <div id="mainElement">
                <div>
                    <h2>Main Element</h2>
                    Message: ${this.message}
                </div>
            </div>
        `
    }
}
