import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-btn-link',
    templateUrl: './btnlink.component.html',
    styleUrls: ['./btnlink.component.css']
})
export class BtnlinkComponent {
    @Input() disabled = false;
    @Input() routed:any;
    @Output() onClick = new EventEmitter<any>();

    onbtnLinkClick($event) {
        console.warn('reach')
        this.onClick.emit($event);
    }

}
