import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-management';
  editField: string;
  personList: Array<any> = [{id:1,fname:'',lname:'',email:'',phoneNo:'',status:'active'}];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.personList.splice(id, 1);
  }

  add() {
      this.personList.push({id:this.personList.length,fname:'',lname:'',email:'',phoneNo:'',status:'active'});
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
