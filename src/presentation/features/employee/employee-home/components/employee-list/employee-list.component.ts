import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeModel} from '@models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

    @Input('items') items: EmployeeModel[] = []
    @Output() onItemClick = new EventEmitter<EmployeeModel>()

    public  tableColumns = ['Employee Name', 'Employee Age', 'Employee Salary', 'Action'];
    itemClick(item) {
        this.onItemClick.emit(item);
    }

}
