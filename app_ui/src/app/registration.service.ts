import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
private registerUrl = 'http://localhost:8000/api/register/'
  constructor(private http: HttpClient) { }
  
  registerUser(formData: any): Observable<any> {
    return this.http.post(this.registerUrl, formData);
  }

}
