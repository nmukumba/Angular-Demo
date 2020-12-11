import {Component, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {ThemeService} from '../../services/theme.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnDestroy {

  @Input() sidebarVisible = true;
  @Input() navTab = 'menu';
  @Input() currentActiveMenu: any;
  @Input() currentActiveSubMenu: any;
  @Output() changeNavTabEvent = new EventEmitter();
  @Output() activeInactiveMenuEvent = new EventEmitter();
  public themeClass = 'theme-cyan';
  public darkClass = '';
  private ngUnsubscribe = new Subject();

  constructor(private themeService: ThemeService) {
    this.themeService.themeClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(themeClass => {
      this.themeClass = themeClass;
    });
    this.themeService.darkClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(darkClass => {
      this.darkClass = darkClass;
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  changeNavTab(tab: string): void {
    this.navTab = tab;
  }

  activeInactiveMenu(menuItem: string): void {
    this.activeInactiveMenuEvent.emit({item: menuItem});
  }

  changeTheme(theme: string): void {
    this.themeService.themeChange(theme);
  }

  changeDarkMode(darkClass: string): void {
    this.themeService.changeDarkMode(darkClass);
  }
}
