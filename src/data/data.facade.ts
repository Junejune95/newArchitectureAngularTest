import {DataRequirements} from '@business-logic/data-requirements';
import {NgModule} from '@angular/core';
import {EmployeeApi} from '@data/apis/employee.api';
import {HttpClientModule} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        EmployeeApi
    ]
})
export class DataFacade implements DataRequirements {
    constructor(
        private employeeApi: EmployeeApi
    ) {}

    getAllEmployees(): Observable<any> {
        return this.employeeApi.getEmployees();
    }

    getEmployeeImage(id): Observable<any> {
        return this.employeeApi.getEmployeeImage(id);
    }

    searchEmployees(name): Observable<any> {
        return this.employeeApi.searchEmployees(name);
    }

    getEmployeesFromLS(): Observable<any>  {
        return this.employeeApi.getEmployeesLS();
    }

    saveEmployee(user): Observable<boolean> {
        console.log('in there ')
        return this.employeeApi.saveEmployeeLS(user);
    }
}
