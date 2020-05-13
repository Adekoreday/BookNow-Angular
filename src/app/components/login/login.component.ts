import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService, AlertService } from '../../services'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup; 
  loading = false;
  success = false;
  returnUrl: string;
  
  constructor(
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private AuthService: AuthService,
              private AlertService: AlertService,
              private toastr: ToastrService
              ) { }

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

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
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
    this.loading = true;
    const formVal = this.myForm.value;
    this.AlertService.loading(true, false);
    this.AuthService.login({email: formVal.email, password: formVal.password})
    .subscribe(
      data => {
          this.success = true;
          this.toastr.success('login successful', 'success!' );
          this.AlertService.loading(false, false);
          this.router.navigate([this.returnUrl]);
      },
      error => {
        this.loading = false;
        this.AlertService.loading(false, false);
        this.toastr.error('Incorrect username or password', 'login failed!' );
      }
    )
  }
}
