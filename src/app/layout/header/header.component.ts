import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbDropdownConfig]
})
export class HeaderComponent implements OnInit {

  // Properties

  @Input() showNotificationMenu = false;
  @Input() showToggleMenu = false;
  @Input() darkClass = '';
  @Output() toggleSettingDropMenuEvent = new EventEmitter();
  @Output() toggleNotificationDropMenuEvent = new EventEmitter();

  constructor(private config: NgbDropdownConfig, private themeService: ThemeService) {
    config.placement = 'bottom-right';
  }

  ngOnInit(): void {
  }

  toggleSettingDropMenu(): void {
    this.toggleSettingDropMenuEvent.emit();
  }

  toggleNotificationDropMenu(): void {
    this.toggleNotificationDropMenuEvent.emit();
  }

  toggleSideMenu(): void {
    this.themeService.showHideMenu();
  }

}
