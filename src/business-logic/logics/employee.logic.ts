import {DataRequirements, DataRequirementsInjectionToken} from '@business-logic/data-requirements';
import {Inject} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export class EmployeeLogic {
    constructor(
        @Inject(DataRequirementsInjectionToken) private data: DataRequirements
    ) {}

    private mapCustomerWithImageAndLS(employees: Observable<any>): Observable<any> {
        const employeesFromLocalStorage = this.data.getEmployeesFromLS();
        const employeesFromAPI = this.data.getAllEmployees();
        console.log(employeesFromAPI)
        const mappedEmployees = new BehaviorSubject<any>(employeesFromAPI)
        console.log(employees)
        // employees.subscribe(employees => {
        //     for (const employee of employees.items) {
        //         this.data.getEmployeeImage(employee.id).subscribe(data => {
        //             const mergedEmployee = {
        //                 ...employee, imageURL : data.imageURL
        //             }
        //
        //             mappedEmployees.next([...mappedEmployees.getValue(), mergedEmployee]);
        //         });
        //     }
        // })

        return mappedEmployees.asObservable();
    }

   getAllCustomersWithImages() {
       //  const users = this.data.getAllEmployees();
       //  console.log(users);
       // return users;
        // return this.mapCustomerWithImageAndLS(users);
       console.log('hello');

       const books = this.data.getAllEmployees()

       return books;
    }

    searchCustomer(name): Observable<any> {
        const employees = this.data.searchEmployees(name)

        return this.mapCustomerWithImageAndLS(employees);
    }

    save(employee)  {
        console.warn(employee)
        return this.data.saveEmployee(employee);
    }
    getEmployeeById(id) {
        console.warn(id);
        const employee = this.data.getEmployeeById(id);
        return employee;
    }
}
