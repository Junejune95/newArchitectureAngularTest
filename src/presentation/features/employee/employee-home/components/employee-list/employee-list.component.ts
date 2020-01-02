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
    @Output() onEmployeeDelete= new EventEmitter<any>();
    public  tableColumns = ['Employee Name', 'Employee Age', 'Employee Salary', 'Action'];
    itemClick(item) {
        this.onItemClick.emit(item);
    }

    onDelete(e) {
        console.warn(e);
        this.onEmployeeDelete.emit(e);
    }
}
