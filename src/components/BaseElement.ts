import {LitElement} from 'lit-element'

export default class AdpBaseElement extends LitElement {
    firstUpdated(e:any) {
        super.firstUpdated(e);
        this.removeAttribute('unresolved');
    }
}
