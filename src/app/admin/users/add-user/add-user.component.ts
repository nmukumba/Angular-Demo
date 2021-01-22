import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SidebarService} from '../../../services/sidebar.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

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
