import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EmployeeModel} from '@models/employee.model';
import {Observable, of} from 'rxjs';
import {BusinessLogicRequirements, BusinessRequirementsInjectionToken} from '@presentation/businesss-logic-requirements';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-new-employee',
    templateUrl: './create-new-employee.controller.html',
    styleUrls: ['./create-new-employee.controller.css'],
})
export class CreateNewEmployeeController implements OnInit {
    private form = this.fb.group({
        'fullName': this.fb.control('', [Validators.required]),
        'email': this.fb.control('', [Validators.required]),
        'description': this.fb.control('', [Validators.required])
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
    }

    saveEmployee() {
        console.log(' in save');
        this.business.saveEmployee({
            ...this.employee,
            id: null,
            imageURL: ''
        }).subscribe(status => {
            console.log(status);

            this.router.navigateByUrl('/').then(console.log);
        });
    }
}
