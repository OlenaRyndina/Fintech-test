import {
    Component, 
    OnInit, 
    Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { 
    initUserData
} from '../../../../store/user-store/store/user.actions';
import { UserDitails } from '../../../../store/user-store/store/user.reducer';
import * as userSelect from '../../../../store/user-store/store/user.selectors';


@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.css']
})
export class UserBlockComponent implements OnInit {
    userData$: Observable<UserDitails> = this.store$.pipe(select(userSelect.getUserData));
    
    @Input() user;
    @Input() isChecked: boolean;

    constructor(
        private store$: Store,
    ) { }

    ngOnInit(): void {
        this.store$.dispatch(initUserData(this.user));
    }

}
