import { Component, OnInit } from '@angular/core';
import { CommonService } from './../common.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: object = {
    id: 0,
    fname: '',
    lname: '',
    email: '',
    phone: 0,
    status: 'Active'
  };
  profileForm: FormGroup;
  fname: string = '';
  lname: string = '';
  email: string = '';
  phone: number = 0;
  status: string = '';

  action: string = 'Add';
  id: any = '';
  list: any = [];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private service: CommonService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.profileForm = fb.group({
      'fname': [null, Validators.required],
      'lname': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'phone': [null, Validators.required],
      'status': [null, Validators.required],
    });
    this.id = this.route.params['value'].id;
    this.list = this.service.contactList;
    if (this.id) {
      this.id ? this.action = 'Edit' : this.action = 'Add';
      this.list.forEach(element => {
        if (element.id == this.id) {
          this.contact = element;
        }
      });
      this.profileForm.controls['fname'].setValue(this.contact['fname']);
      this.profileForm.controls['lname'].setValue(this.contact['lname']);
      this.profileForm.controls['email'].setValue(this.contact['email']);
      this.profileForm.controls['phone'].setValue(this.contact['phone']);
      this.profileForm.controls['status'].setValue(this.contact['status']);
    }
  }

  submitChanges(form: NgForm) {
    let contact = form;
    if (this.action == 'Add') {
      contact['id'] = this.list.length + 1;
      this.list.push(contact);
    } else {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].id == this.id) {
          this.list[i] = contact;
        }
      }
    }
    this.service.updateContactList(this.list);
    this.router.navigateByUrl('/list');
  }
  ngOnInit(): void {
  }

}
