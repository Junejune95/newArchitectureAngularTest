import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';

export interface DataRequirements {
    getAllEmployees(): Observable<any>;

    getEmployeeImage(id): Observable<any>;

    searchEmployees(name): Observable<any>;

    saveEmployee(employee): Observable<boolean>;

    getEmployeesFromLS(): Observable<any>;
}

export const DataRequirementsInjectionToken = new InjectionToken<DataRequirements>('Data Requirements')
