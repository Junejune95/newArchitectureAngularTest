import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';
import {EmployeeModel} from '@models/employee.model';

export interface BusinessLogicRequirements {
    searchEmployee(name): Observable<any>;

    getAllEmployees(): Observable<any>;

    saveEmployee(employee: EmployeeModel): Observable<object>;
    getEmployeeById(id): Observable<object>;
}

export const BusinessRequirementsInjectionToken = new InjectionToken<BusinessLogicRequirements>('Business Requirements')
