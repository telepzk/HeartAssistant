import {Component} from '@angular/core';

@Component({
    selector: 'ha-code-dialog-content-component',
    templateUrl: 'code-dialog-content.component.html',
    styleUrls: ['./code-dialog-content.component.css']
})
export class CodeDialogContentComponent {
    code: string = ''

    constructor() { }
}