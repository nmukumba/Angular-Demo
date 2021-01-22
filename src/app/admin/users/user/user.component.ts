import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SidebarService} from '../../../services/sidebar.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public sidebarVisible = true;
  public isResizing = false;

  constructor(private activatedRoute: ActivatedRoute,
              private sidebarService: SidebarService,
              private cdr: ChangeDetectorRef,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  toggleFullWidth(): void {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }
}
