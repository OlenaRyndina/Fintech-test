import { Component, OnInit } from '@angular/core';
import { Observable, map, pipe } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { User } from '../../../../store/users-store/store/users.reducer';

import { 
    initUsersData,
    selectUserDataSuccess,
    extractSelectedUsers
} from '../../../../store/users-store/store/users.actions';

import * as usersSelect from '../../../../store/users-store/store/users.selectors';


@Component({
    selector: 'app-users-block',
    templateUrl: './users-block.component.html',
    styleUrls: ['./users-block.component.css']
})
export class UsersBlockComponent implements OnInit {
    selectedUsersFromLS: User[];
    localUsersList;
      

    constructor(private store$: Store) { }

    ngOnInit(): void {
        this.store$.dispatch(initUsersData());
        this.store$.dispatch(extractSelectedUsers());

        this.getDataFromStore();

        this.store$.pipe(
            select(usersSelect.getSearchedUsersData)
        ).subscribe(data => {
            let searchedUsers = data.searchedData;
            if (searchedUsers) {
                let searchedList = [];
                this.getDataFromStore();
                this.localUsersList.forEach(user => {
                    searchedUsers.forEach(idx => {
                        if (idx === user.id) {
                            searchedList.push(user);
                        };
                    })
                })
                this.localUsersList = searchedList;
            }
        });
           
    }

    getDataFromStore() {
        this.store$.pipe(
            select(usersSelect.getSelectedUsersData)
        ).subscribe(data => {            
            this.selectedUsersFromLS = Object.values(data);
        });

        this.store$.pipe(
            select(usersSelect.getUsersData)
        ).subscribe(value => {
            this.localUsersList = [...value];

            if (this.selectedUsersFromLS) {       
                this.localUsersList.map((userData, i, arr) => {
                    this.selectedUsersFromLS.map(user => {
                        if(user.id === userData.id) {
                            arr.splice(i, 1, user);
                        }
                    })
                })
            }
        });
    }

    changeSelectedUsersList(user) {
        let selectedUsers: User[] = [];
        let refreshSelectedList;

        this.store$.pipe(
            select(usersSelect.getSelectedUsersData)
        ).subscribe(data => selectedUsers = Object.values(data));

        refreshSelectedList = [...selectedUsers];
        
        user.isChecked 
        ? refreshSelectedList.push(user)
        : refreshSelectedList = refreshSelectedList.filter(item => item.id !== user.id);

        this.store$.dispatch(selectUserDataSuccess({data: refreshSelectedList}));
    }
} 
