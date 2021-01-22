import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../services/auth.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm!: NgForm;

  constructor(private router: Router, private toastr: ToastrService, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    // console.log(this.loginForm?.value.email);
    // this.toastr.success('Looks Good: ' + this.loginForm.value.email, 'Success');
    // this.router.navigate(['/admin/dashboard']);
    const user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.authService.login(user)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status) {
            this.toastr.success(data.message, 'Success');
            this.router.navigate(['/admin/dashboard']);
          } else {
            this.toastr.error(data.message, 'Error');
          }
        },
        error => {
          this.toastr.error(error.message, 'Error');
        });
  }
}
