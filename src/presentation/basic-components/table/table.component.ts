import {Component, OnInit, Input, ViewChild, ViewChildren, ElementRef, QueryList, Output, EventEmitter} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent {

    @Input() tableColumns: any = [];
    @Input() items: any [];
    @Output() onEdit  = new EventEmitter<any>();
    @Output() onDelete= new EventEmitter<any>();
    @Input() disabled = false;
    constructor(private router: Router) {
    }
    editBtn() {
        this.onEdit.emit();
    }

    callEdit(id) {
        this.router.navigateByUrl('/edit/' + id);
    }

    callDetail(id) {
        this.router.navigateByUrl('/detail/' + id);
    }

    callDelete(emp) {
       const isOk = confirm('Are u sure to delete employee name >>' + emp.employee_name);
       console.warn(isOk);
       if (isOk) {
           this.onDelete.emit(emp.id);
       }
    }
}
