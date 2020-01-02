import {DataRequirements} from '@business-logic/data-requirements';
import {Observable, of} from 'rxjs';

export class DataRequirementsFake implements DataRequirements {
    getAllEmployees(): Observable<any> {
        const fake = {
            id: 1,
            employee_name: 'Zun Zun',
            employee_salary: '20',
            employee_age: '12',
            profile_image: ''
            };

        const fakes = []
        for (let i = 0; i < 10; i++) {
            fakes.push(fake);
        }

        return of(fakes);
    }

    getEmployeeImage(_): Observable<any> {
        return of({
            imageURL: 'https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_github-512.png'
        });
    }

    searchEmployees(): Observable<any> {
        const fake =  {
                id: 1,
                name: 'Chan',
                email: 'chan@nyein.thaw',
                description: 'Chan Nyein Thaw',
                gender: 'male'
            };

        const fakes = []
        for (let i = 0; i < 3; i++) {
            fakes.push(fake);
        }

        return of(fakes);
    }

    getEmployeesFromLS(): any[] {
        return [{
            id: 1,
            employee_name: 'Zun Zun',
            employee_salary: '20',
            employee_age: '12',
            profile_image: 'https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_github-512.png'
        }];
    }

    saveEmployee(employee): Observable<object> {
        return employee;
    }
    getEmployeeById(employee): Observable<object> {
        return employee;
    }
}
