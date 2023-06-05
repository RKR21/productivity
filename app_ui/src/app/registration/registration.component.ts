import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  formData = {
    username: '',
    email: '',
    password: ''
  };

  onSubmit(){
    
    console.log(this.formData);
  }
}
