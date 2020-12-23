import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/login/services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  editForm: FormGroup;
  id: string;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    // tslint:disable-next-line:align
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private authenticationService: AuthenticationService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log('ineditprofilecomponet resolver')

    this.id = this.route.snapshot.params.id;
    // this.userDetails = this.route.snapshot.data['userDetails'];
  // tslint:disable-next-line:align
  this.editForm = this.formBuilder.group({
    username: ['', Validators.required],
    firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    lastName: [''],
    email: [''],
   bio: [''],

  });
    // this.userService.getUserById(this.id)
    this.route.data
  .subscribe(x => {
    console.log('cvalues of x', x);
    const userdata = x.userDetails;
    this.formValue.firstName.setValue(userdata.firstName);
    this.formValue.lastName.setValue(userdata.lastName);
    this.formValue.username.setValue(userdata.username);
    this.formValue.email.setValue(userdata.email);
    this.formValue.bio.setValue(userdata.bio);

});
  }

  // tslint:disable-next-line:typedef
  get formValue() { return this.editForm.controls; }
  // tslint:disable-next-line: typedef
  onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
  }
    this.updateUser();
  }

  // tslint:disable-next-line:typedef
  private updateUser() {
    this.userService.update(this.id,this.editForm.value)
        .subscribe(
            data => {
              this.snackBar.open('User details Updated Sucessful', '', {
                duration: 1000,
              });
            },
            error => {
              this.snackBar.open('Fields are missing', '', {
                duration: 1000,
              });
            });
}

}





