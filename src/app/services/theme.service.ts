import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public themeClass = 'theme-cyan';
  public darkClass = '';
  public smallScreenMenu = '';

  themeClassChange: Subject<string> = new Subject<string>();
  smallScreenMenuShow: Subject<string> = new Subject<string>();
  darkClassChange: Subject<string> = new Subject<string>();

  constructor() {
    this.themeClassChange.subscribe((value) => {
      this.themeClass = value;
    });
    this.smallScreenMenuShow.subscribe((value) => {
      this.smallScreenMenu = value;
    });
    this.darkClassChange.subscribe((value) => {
      this.darkClass = value;
    });
  }

  themeChange(theme: string): void {
    this.themeClassChange.next(theme);
  }

  showHideMenu(): void {
    if (!this.smallScreenMenu) {
      this.smallScreenMenuShow.next('offcanvas-active');
    } else {
      this.smallScreenMenuShow.next('');
    }

  }

  hideMenu(): void {
    this.smallScreenMenuShow.next('');
  }

  changeDarkMode(darkClass: any): void {
    this.darkClassChange.next(darkClass);
  }
}
