import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../../../store/users-store/store/users.reducer';
import * as usersSelect from '../../../../store/users-store/store/users.selectors';
import { 
    searchedUsersData
} from '../../../../store/users-store/store/users.actions';

@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.css']
})
export class HeaderBlockComponent {
    
    @Input() paramsOfSearch;

    usersList$: Observable<User[]> = this.store$.pipe(select(usersSelect.getUsersData));
    selectedUsersList$: Observable<User[]> = this.store$.pipe(select(usersSelect.getSelectedUsersData));
    keySearch = "login";

    constructor(
        private store$: Store) {}

    searchValue(value) {
        let searchedData = [];
        value.forEach(item => searchedData.push(item.id));
        this.store$.dispatch(searchedUsersData({searchedData}));
    }
}
