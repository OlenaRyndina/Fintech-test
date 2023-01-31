import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { User } from '../../../../store/users-store/store/users.reducer';
import * as usersSelect from '../../../../store/users-store/store/users.selectors';
import { 
    extractSelectedUsers,
    selectUserDataSuccess
} from '../../../../store/users-store/store/users.actions';

@Component({
  selector: 'app-selected-users',
  templateUrl: './selected-users-block.component.html',
  styleUrls: ['./selected-users-block.component.css']
})
export class SelectedUsersBlockComponent implements OnInit {
    selectedUsers: User[];

    constructor(private store$: Store) { }

    ngOnInit(): void {
        this.store$.dispatch(extractSelectedUsers());
        
        this.getDataFromStore();
        this.store$.pipe(
            select(usersSelect.getSearchedUsersData)
        ).subscribe(data => {
            let searchedUsers = data.searchedData;
            if (searchedUsers) {
                let searchedList = [];
                this.getDataFromStore();
                this.selectedUsers.forEach(user => {
                    searchedUsers.forEach(idx => {
                        if (idx === user.id) {
                            searchedList.push(user);
                        };
                    })
                })
                this.selectedUsers = searchedList;
            }
        });
    }

    getDataFromStore() {
        this.store$.pipe(
            select(usersSelect.getSelectedUsersData)
        ).subscribe(data => {            
            this.selectedUsers = data;
        });
    }

    changeSelectedUsersList(user) {
        let refreshSelectedList;       
        refreshSelectedList = [...this.selectedUsers].filter(item => item.id !== user.id);

        this.store$.dispatch(selectUserDataSuccess({data: refreshSelectedList}));
    }

    cleanUpUsersList() {
        this.store$.dispatch(selectUserDataSuccess({data: []}));
    }
}
