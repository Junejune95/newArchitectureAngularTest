import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Inject} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

export class EmployeeApi {
    constructor(@Inject(HttpClient) private http: HttpClient) {}

    getEmployees(): Observable<any> {
        console.warn('call api');
        return this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees')
            .pipe(map(obj => obj || []));
    }

    getEmployeeImage(id): Observable<any> {
        return this.http.get('http://localhost:5000/image.json');
    }

    searchEmployees(name): Observable<any> {
        return this.http.get('http://localhost:5000/search1.json');
    }

    getEmployeesLS() {
        return JSON.parse(localStorage.getItem('employees') || '[]');
        // return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
    }

    saveEmployeeLS(employee) {
        const employeersFromLocalStorage = this.getEmployeesLS();

        employeersFromLocalStorage.push({...employee, imageURL: 'https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_github-512.png'})

        localStorage.setItem('employees', JSON.stringify(employeersFromLocalStorage))

        return of(true);
    }
    saveEmployee(employee) {
        console.warn(employee)
        const url = 'http://dummy.restapiexample.com/api/v1/create';
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        console.log(this.http.post(url, employee , httpOptions))
        return this.http.post(url, employee , httpOptions);
    }
    editEmployee(employee) {
        console.warn(employee)
        const url = 'http://dummy.restapiexample.com/api/v1/update/' + employee.id;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        console.log(this.http.post(url, employee , httpOptions))
        return this.http.put(url, employee , httpOptions);
    }
    getEmployeeById(id): Observable<any> {
        console.warn(id);
        return this.http.get<any>('http://dummy.restapiexample.com/api/v1/employee/' + id)
            .pipe(map(obj => obj || {}));
    }
}
