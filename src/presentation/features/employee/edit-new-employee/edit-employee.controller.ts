import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EmployeeModel} from '@models/employee.model';
import {Observable, of} from 'rxjs';
import {BusinessLogicRequirements, BusinessRequirementsInjectionToken} from '@presentation/businesss-logic-requirements';
import {Router , ActivatedRoute} from '@angular/router';

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
    });
    private employee = null

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private  activeRoute: ActivatedRoute ,
        @Inject(BusinessRequirementsInjectionToken) private business: BusinessLogicRequirements
    ) {
        this.form.valueChanges.subscribe(value => {
            this.employee = value;
        });
    }

    ngOnInit() {
        const id =  this.activeRoute.snapshot.paramMap.get('id');
        console.warn(id, '<<id>>' );
        this.getempById(id);
    }

    private getempById(id) {
        this.business.getEmployeeById(id).subscribe(res => {
            console.log(res);
            const employee = res;
            this.form.controls['employeeName'].setValue(res.employee_name);
            this.form.controls['employeeAge'].setValue(res.employee_age);
            this.form.controls['employeeSalary'].setValue(res.employee_salary);

            console.warn(id)
            console.warn(employee);
        });
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
