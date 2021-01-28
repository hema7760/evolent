import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  contactList: any = [{
    'id': 1,
    'fname': 'Hema',
    'lname': 'Sharma',
    'email': 'hema@gmail.com',
    'phone': 7083776077,
    'status': 'Active',
  }];
  public updateList = new BehaviorSubject(this.contactList);
  constructor() {

  }

  updateContactList(list) {
    this.contactList = list;
    this.updateList.next(list);
  }
}
