import {BusinessLogicRequirements} from '@presentation/businesss-logic-requirements';
import {Observable, of} from 'rxjs';
import {EmployeeLogic} from '@business-logic/logics/employee.logic';
import {NgModule} from '@angular/core';
import {DataRequirementsInjectionToken} from '@business-logic/data-requirements';
import {EmployeeModel} from '@models/employee.model';
import {DataRequirementsFake} from '@business-logic/data-requirements.fake';
import {DataFacade} from '@data/data.facade';

@NgModule({
    imports: [DataFacade],

    providers: [
        EmployeeLogic,

        {
            provide: DataRequirementsInjectionToken,
            useClass: DataFacade
        }
    ]
})
export class BusinessLogicFacade implements BusinessLogicRequirements {
    constructor(
        private employee: EmployeeLogic
    ) {}
    getAllEmployees(): Observable<any> {
        return this.employee.getAllCustomersWithImages();
    }

    searchEmployee(name): Observable<any> {
        return this.employee.searchCustomer(name);
    }

    saveEmployee(employee: EmployeeModel): Observable<boolean> {
        const employeeMutated = {
            id: employee.id,
            name: employee.employeeName,
            age: employee.employeeAge,
            salary: employee.employeeSalary
        }

        return this.employee.save(employeeMutated);
    }
}