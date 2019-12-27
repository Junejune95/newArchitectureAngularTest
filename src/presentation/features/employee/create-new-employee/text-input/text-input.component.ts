import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';

@Component({
    selector: 'app-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
    @Input() hint = ''
    @Input() label = ''
    @Input() control: AbstractControl | FormControl
    @Input() multiline = false;
}
