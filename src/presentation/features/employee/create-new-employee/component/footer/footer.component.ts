import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    @Output() onSave  = new EventEmitter<any>()
    @Input() disabled = false

    constructor() {
    }

    ngOnInit() {
    }

    saveButtonClicked() {
        this.onSave.emit()
    }
}
