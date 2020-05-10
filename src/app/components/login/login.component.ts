import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup; 
  loading = false;
  success = false;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required,
                  Validators.email
      ]],
      password: ['', [
                  Validators.required
      ]],
      agree: [false, [
                Validators.requiredTrue
      ]]
    })
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  get agree() {
    return this.myForm.get('agree');
  }

  async submitHandler() {
    this.success = true;
    const formVal = this.myForm.value;
    console.log(formVal);
  }

}
