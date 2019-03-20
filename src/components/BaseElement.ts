import {LitElement} from 'lit-element'

export class AdpBaseLitElement extends LitElement {
    firstUpdated(e:any) {
        super.firstUpdated(e);
        this.removeAttribute('unresolved');
    }
}
