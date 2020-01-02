import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';

@Component({
    selector: 'app-text-data',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.css']
})
export class TextComponent {
    @Input() hint = ''
    @Input() label = ''
    @Input() data = ''
    @Input() control: AbstractControl | FormControl
    @Input() multiline = false;
}
