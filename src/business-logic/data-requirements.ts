import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';

export interface DataRequirements {
    getAllEmployees(): Observable<any>;

    getEmployeeById(id): Observable<any>;

    getEmployeeImage(id): Observable<any>;

    searchEmployees(name): Observable<any>;

    saveEmployee(employee): Observable<object>;

    getEmployeesFromLS(): any[];

}

export const DataRequirementsInjectionToken = new InjectionToken<DataRequirements>('Data Requirements')
