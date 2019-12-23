import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
    @Input() disabled = false;
    @Output() onClick = new EventEmitter<any>();

    onButtonClick($event) {
        this.onClick.emit($event);
    }

}
