import { 
    Component,  
    OnChanges, 
    Input, 
    SimpleChanges,
    Output,
    EventEmitter } from '@angular/core';

import { User } from '../../../../store/users-store/store/users.reducer';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnChanges {

    @Input() users: User[] = [];
    @Output() checkUser = new EventEmitter<User>();

    currentUser;
    isShowDetails: boolean = false;

    ngOnChanges(changes: SimpleChanges): void {

        if (this.users) {
            this.users = this.users.map(user => { 
              let newUser = {...user};
              if (!newUser.isChecked) {
                  newUser.isChecked = false;
              } 
              return newUser; 
            })
        }
    }

    checkedUser(user) {
      let checkedUser = {...user};

      checkedUser.isChecked 
      ? checkedUser.isChecked = true
      : checkedUser.isChecked = false

      this.checkUser.emit(checkedUser);
    }

    showUserInfo(user) {
      this.isShowDetails = true;

      if (!this.currentUser) {
          this.isShowDetails = true;
      }

      if (this.currentUser && user.login === this.currentUser.login) {
          this.isShowDetails = !this.isShowDetails;
      } 
      this.currentUser = user;
    }

}
 