import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm!: NgForm;
  constructor(private router: Router, private toastr: ToastrService, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.toastr.success('Looks Good', 'Success');
    this.router.navigate(['/auth/login']);
  }
}
