import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;
  defaultsubscription="Basic"
  user = {
    email: '',
    subscriptions: '',
    password: ''
  }
  submitted = false;

  onSubmit() {
    this.user.email = this.signupForm.value.email;
    this.user.subscriptions = this.signupForm.value.subscriptions;
    this.user.password = this.signupForm.value.password;
    this.submitted = true;
  }
//   onSubmit(form: NgForm) {
//     console.log(form)
//   }
}
