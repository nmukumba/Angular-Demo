import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  @ViewChild('f') forgotPasswordForm!: NgForm;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.router.navigate(['/auth/login']);
  }

}
