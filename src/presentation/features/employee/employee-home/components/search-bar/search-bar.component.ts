import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {InputComponent} from '@basic-components/input/input.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

    @Input() control: AbstractControl
    @ViewChildren('search') search: QueryList<InputComponent>

    focusInput() {
        this.search.first.focus();
    }

}
