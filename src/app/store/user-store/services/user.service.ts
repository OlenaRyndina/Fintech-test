import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserDitails } from '../store/user.reducer';

@Injectable({
  providedIn: 'root'
})

export class UserService {

    constructor(private httpClient: HttpClient) { }

    getUser(user) {
        return this.httpClient.get<UserDitails>(`https://api.github.com/users/${user.login}`);
    }
}
