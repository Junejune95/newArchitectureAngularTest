import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';
import {EmployeeModel} from '@models/employee.model';

export interface BusinessLogicRequirements {
    searchEmployee(name): Observable<any>;

    getAllEmployees(): Observable<any>;

    saveEmployee(employee: EmployeeModel): Observable<boolean>;
}

export const BusinessRequirementsInjectionToken = new InjectionToken<BusinessLogicRequirements>('Business Requirements')
