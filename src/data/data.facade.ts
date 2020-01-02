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
        // let  resData: Observable<any>;
        // this.employeeApi.getEmployees().subscribe((res) => {
        //     console.warn(res);
        //     resData = res;
        //  });
        // console.warn(resData)
        // return  resData;
         // return new Promise((resolve, reject) => {
         //     this.employeeApi.getEmployees().subscribe(data => {
         //         console.warn(data)
         //         resolve(data);
         //     });
         // });
        // let resData;
        // const promise = this.employeeApi.getEmployees().toPromise();
        // promise.then((data) => {
        //     resData = data;
        //     console.warn(resData);
        // });
        // console.warn(resData);
        // return resData;
    }

    getEmployeeImage(id): Observable<any> {
        return this.employeeApi.getEmployeeImage(id);
    }

    searchEmployees(name): Observable<any> {
        return this.employeeApi.searchEmployees(name);
    }

    getEmployeesFromLS(): any[] {
        return this.employeeApi.getEmployeesLS();
    }

    saveEmployee(user): Observable<object> {
        console.log('in there ')
        // return this.employeeApi.saveEmployeeLS(user);
        return this.employeeApi.saveEmployee(user);
    }
    editEmployee(employee): Observable<object> {
        console.log('in there ')
        // return this.employeeApi.saveEmployeeLS(user);
        return this.employeeApi.editEmployee(employee);
    }
    getEmployeeById(id): Observable<any> {
        console.warn(id);
        return this.employeeApi.getEmployeeById(id);
    }
}
