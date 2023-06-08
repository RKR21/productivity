import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { user } from '../user';

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
  constructor(private registrationService: RegistrationService){}

  onSubmit() {
    this.registrationService.registerUser(this.formData)
      .subscribe({
        next: (response: user) => {
          // Handle successful response
          console.log(response);
        },
        error: (error: any) => {
          // Handle error
          console.error(error);
        }
      });
  }
}
