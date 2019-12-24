import {DataRequirements, DataRequirementsInjectionToken} from '@business-logic/data-requirements';
import {Inject} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export class EmployeeLogic {
    constructor(
        @Inject(DataRequirementsInjectionToken) private data: DataRequirements
    ) {}

    private mapCustomerWithImageAndLS(employees: Observable<any>): Observable<any> {
        const employeesFromLocalStorage = this.data.getEmployeesFromLS();
        const mappedEmployees = new BehaviorSubject<any>(employeesFromLocalStorage)

        employees.subscribe(employees => {
            for (const employee of employees) {
                this.data.getEmployeeImage(employee.id).subscribe(data => {
                    const mergedEmployee = {
                        ...employee, imageURL : data.imageURL
                    }

                    mappedEmployees.next([...mappedEmployees.getValue(), mergedEmployee]);
                });
            }
        })

        return mappedEmployees.asObservable();
    }

    getAllCustomersWithImages(): Observable<any> {
        const users = this.data.getAllEmployees()

        return this.mapCustomerWithImageAndLS(users);
    }

    searchCustomer(name): Observable<any> {
        const employees = this.data.searchEmployees(name)

        return this.mapCustomerWithImageAndLS(employees);
    }

    save(employee)  {
        console.log(employee)
        return this.data.saveEmployee(employee);
    }
}
