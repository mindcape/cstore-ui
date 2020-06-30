import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environment';
import { User } from '../store/models/user';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private router: Router,
        private http: HttpClient,private authService: AuthenticationService
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username, password) {
        return this.http.post<User>(`${environment.apiUrl}//api/customers/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                this.loggedIn.next(true);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.authService.logout();
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/api/customers`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/api/customers`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/api/customers${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/api/customers${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id) {
        return this.http.delete(`${environment.apiUrl}/api/customers${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.id) {
                    this.logout();
                }
                return x;
            }));
    }

    get isUserLoggedIn(){
        return this.loggedIn.asObservable();
    } 
}