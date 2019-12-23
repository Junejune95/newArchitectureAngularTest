import { Component, OnInit , Input, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

    @Input() type : 'text' | 'number' | 'password' | 'email' = 'text'
    @Input() multiline = false
    @Input() rows = 5
    @Input() hint

    @Input() control: FormControl | AbstractControl

    @ViewChildren('single') single: QueryList<ElementRef>
    @ViewChildren('multi') multi: QueryList<ElementRef>

    public focus() {
        if (this.single.first) this.single.first.nativeElement.focus();
        if (this.multi.first) this.multi.first.nativeElement.focus();
    }

}
