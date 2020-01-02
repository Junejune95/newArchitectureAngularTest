import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EmployeeModel} from '@models/employee.model';
import {Observable, of} from 'rxjs';
import {BusinessLogicRequirements, BusinessRequirementsInjectionToken} from '@presentation/businesss-logic-requirements';
import {Router , ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-detail-employee',
    templateUrl: './employee-detail.controller.html',
    styleUrls: ['./employee-detail.controller.css'],
})
export class EmployeeDetailController implements OnInit {
    private form = this.fb.group({
        'employeeName': this.fb.control('', [Validators.required]),
        'employeeAge': this.fb.control('', [Validators.required]),
        'employeeSalary': this.fb.control('', [Validators.required])
    });
    private employee = null
    private id: any;
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
        this.id =  this.activeRoute.snapshot.paramMap.get('id');
        console.warn(this.id, '<<id>>' );
        this.getempById(this.id);
    }

    private getempById(id) {
        this.business.getEmployeeById(id).subscribe(res => {
            console.log(res);
            this.employee = res;

            console.warn(id)
            console.warn(this.employee);
        });
    }

}
