import { Component, OnInit } from '@angular/core';
import { CommonService } from './../common.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personList: any = [];
  constructor(private service: CommonService, private route: Router) {
    this.service.updateList.subscribe(list => {
      this.personList = list;
    })
  }
  edit(id) {
    this.route.navigateByUrl(`/contact/${id + 1}`);
  }
  remove(id) {
    this.personList.splice(id, 1);
    this.service.updateContactList(this.personList);
  }
  ngOnInit(): void {
  }

}
