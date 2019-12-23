import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {EmployeeModel} from '@models/employee.model';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.css']
})
export class EmployeeListItemComponent {

    @Input('item') item: EmployeeModel = new EmployeeModel();

}
