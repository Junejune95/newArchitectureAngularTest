import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {EmployeeModel} from '@models/employee.model';
import {debounceTime, distinctUntilChanged, map, mapTo, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {BusinessLogicRequirements, BusinessRequirementsInjectionToken} from '@presentation/businesss-logic-requirements';
import {EmployeeMapper} from '@models/employee.mapper';

@Component({
    selector: 'app-package1-controller',
    templateUrl: './employee-home.controller.html',
    styleUrls: ['./employee-home.controller.css'],
})
export class EmployeeHomeControllerComponent implements OnInit {
    private form = this.fb.group({
        'searchBox': this.fb.control('')
    })

    private $items: Observable<EmployeeModel[]>

    constructor(
        private mapper: EmployeeMapper,
        private fb: FormBuilder,
        @Inject(BusinessRequirementsInjectionToken) private business: BusinessLogicRequirements
    ) {}

    ngOnInit(): void {
        this.form.valueChanges.pipe(
            debounceTime(150),
            distinctUntilChanged(),
            tap(value => this.searchCustomerTap(value))
        ).subscribe();
        this.$items = this.getAllEmpoyees();
    }

    searchCustomerTap({searchBox}) {
        this.$items = searchBox === '' ? this.getAllEmpoyees() : this.searchCustomer(searchBox);
    }

    viewEmployeeDetails(customer) {}

    private getAllEmpoyees() {
        const  employee = this.business.getAllEmployees();
        console.warn(employee)
        return this.mapper.mapAll(employee);
    }

    private searchCustomer(value) {
        return this.mapper.mapAll(this.business.searchEmployee(value));
    }
}
