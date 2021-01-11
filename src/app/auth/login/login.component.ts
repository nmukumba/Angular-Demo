import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm!: NgForm;

  constructor(private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log(this.loginForm?.value.email);
    this.toastr.success('Looks Good: ' + this.loginForm.value.email, 'Success');
    this.router.navigate(['/admin/dashboard']);
  }
}
