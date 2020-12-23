import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar,
  ){ }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      lastName: [null, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: [null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      username: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
  get formValue() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.authenticationService.register(this.registerForm.value)
    .subscribe(
      data => {
        this.snackBar.open('Registration Succesfull', '', {
          duration: 1000,
        });
        this.router.navigate(['/login']);
      },
      error => {
        this.loading = false;
        this.snackBar.open('Username is already exists', '', {
          duration: 1000,
        });
      });
  
  console.log('userservice', this.authenticationService);
}


  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
