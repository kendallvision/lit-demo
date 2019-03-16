import {LitElement} from 'lit-element'

export default class BaseElement extends LitElement {
    firstUpdated(e:any) {
        super.firstUpdated(e);
        this.removeAttribute('unresolved');
    }
}
