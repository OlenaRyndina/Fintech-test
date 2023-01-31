import { Component, Input } from '@angular/core';

import { User } from '../../../store/users-store/store/users.reducer';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.css']
})
export class FilterUsersComponent {

    @Input() usersList: User[] = [];

    changeOrderList(e) {
        this.sortList(e.value, this.usersList); 
    }

    sortList(value, list) {        
        return list.sort((a, b) => {
            return a.value > b.value ? 1 : -1;
        });        
    }

}
