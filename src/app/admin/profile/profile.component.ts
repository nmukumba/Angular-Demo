import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {SidebarService} from '../../services/sidebar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public sidebarVisible = true;
  @ViewChild('f') registerForm!: NgForm;
  constructor(private activatedRoute: ActivatedRoute,
              private sidebarService: SidebarService,
              private cdr: ChangeDetectorRef, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.toastr.success('Looks Good', 'Success');
    this.router.navigate(['/auth/login']);
  }

  toggleFullWidth(): void {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }

}
