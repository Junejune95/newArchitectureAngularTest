import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import {Observable, of} from 'rxjs';

export class EmployeeApi {
    constructor(@Inject(HttpClient) private http: HttpClient) {}

    getEmployees(): Observable<any> {
        return this.http.get('http://localhost:5000/users.json');
    }

    getEmployeeImage(id): Observable<any> {
        return this.http.get('http://localhost:5000/image.json');
    }

    searchEmployees(name): Observable<any> {
        return this.http.get('http://localhost:5000/search1.json');
    }

    getEmployeesLS(): Observable<any>  {
        // return JSON.parse(localStorage.getItem('employees') || '[]');
        return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
    }

    saveEmployeeLS(employee) {
        const employeersFromLocalStorage = this.getEmployeesLS();

        // employeersFromLocalStorage.push({...employee, imageURL: 'https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_github-512.png'})

        // localStorage.setItem('employees', JSON.stringify(employeersFromLocalStorage))

        return of(true);
    }
}
