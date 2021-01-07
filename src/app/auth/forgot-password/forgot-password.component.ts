import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  @ViewChild('f') forgotPasswordForm!: NgForm;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.router.navigate(['/auth/login']);
  }
}
