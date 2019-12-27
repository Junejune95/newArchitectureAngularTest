import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EmployeeModel} from '@models/employee.model';
import {Observable, of} from 'rxjs';
import {BusinessLogicRequirements, BusinessRequirementsInjectionToken} from '@presentation/businesss-logic-requirements';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-new-employee',
    templateUrl: './edit-employee.controller.html',
    styleUrls: ['./edit-employee.controller.css'],
})
export class EditEmployeeController implements OnInit {
    private form = this.fb.group({
        'employeeName': this.fb.control('', [Validators.required]),
        'employeeAge': this.fb.control('', [Validators.required]),
        'employeeSalary': this.fb.control('', [Validators.required])
    })

    private employee = null

    constructor(
        private router: Router,
        private fb: FormBuilder,
        @Inject(BusinessRequirementsInjectionToken) private business: BusinessLogicRequirements
    ) {}

    ngOnInit() {
        this.form.valueChanges.subscribe(value => {
            this.employee = value;
        });
        this.employee = this.getempById('1');
    }

    private getempById(id) {
        console.warn(id)
        const  employee = this.business.getEmployeeById(id);
        console.warn(employee)
        return employee;
    }
    editEmployee() {
        console.log(this.employee);
        console.warn(' in save');
        this.business.saveEmployee({
            ...this.employee
        }).subscribe(status => {
            console.warn(status);

            this.router.navigateByUrl('/').then(console.log);
        });
    }
}
