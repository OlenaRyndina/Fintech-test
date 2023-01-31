import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store, select,  } from '@ngrx/store';

import { User } from '../store/users.reducer';
import { getSelectedUsersData } from '../store/users.selectors';
 
@Injectable({
  providedIn: 'root'
})

export class UsersService {

    constructor(
        private httpClient: HttpClient,
        private store$: Store
    ) { }

    getUsers() {
        return this.httpClient.get<User[]>(' https://api.github.com/users');
    }
}
