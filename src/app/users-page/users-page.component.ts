import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../user.reducer';
import * as fromActions from '../user.actions';
import { User } from '../user.model';


@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  constructor(private store: Store<fromStore.State>) { }
  count: number = 1 ;
  ngOnInit(): void {
    this.store.select(fromStore.getAllTodos).subscribe((data:any) => {console.log(data.users) });
  }
  onAdd(){
    this.count = this.count + 1;
    let testuser: User = {id: this.count + ''};
    this.store.dispatch(fromActions.addUser({ user: testuser}));
    this.store.select(fromStore.getAllTodos).subscribe((data) => {console.log(data) });
  }

}
