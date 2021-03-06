import {BusinessLogicRequirements} from '@presentation/./businesss-logic-requirements';
import {Observable, of} from 'rxjs';
import {EmployeeModel} from '@models/employee.model';

export class BusinessLogicRequirementsFake implements BusinessLogicRequirements {
    searchEmployee(name): Observable<any> {
        const employees = []

        for (let i = 0; i < 3; i++) {
            employees.push(new EmployeeModel());
        }

        return of(employees);
    }

    getAllEmployees(): Observable<any> {
        const employees = []

        for (let i = 0; i < 10; i++) {
            employees.push(new EmployeeModel());
        }

        return of(employees);
    }

    saveEmployee(employee): Observable<object> {
        return employee;
    }
    editEmployee(employee): Observable<object> {
        return employee;
    }
    getEmployeeById(id): Observable<any> {
        return of(id);
    }
    deleteEmployee(id): Observable<any> {
        return of(id);
    }
}
