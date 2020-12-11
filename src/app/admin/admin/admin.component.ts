import {Component, AfterViewInit, OnInit, OnDestroy} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {ThemeService} from '../../services/theme.service';
import {Title} from '@angular/platform-browser';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit, OnInit, OnDestroy {

  public title = 'Angular Demo';
  public isStopLoading = false;
  public showNotificationMenu = false;
  public showToggleMenu = false;
  public navTab = 'menu';
  public currentActiveMenu = 'light';
  public currentActiveSubMenu: any;
  public themeClass = 'theme-cyan';
  public smallScreenMenu = '';
  public darkClass = '';
  private ngUnsubscribe = new Subject();

  constructor(public sidebarService: SidebarService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private themeService: ThemeService,
              private titleService: Title) {
    this.activatedRoute.url.pipe(takeUntil(this.ngUnsubscribe)).subscribe(url => {
      this.isStopLoading = false;
      this.getActiveRoutes();
    });

    this.themeService.themeClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(themeClass => {
      this.themeClass = themeClass;
    });

    this.themeService.smallScreenMenuShow.pipe(takeUntil(this.ngUnsubscribe)).subscribe(showMenuClass => {
      this.smallScreenMenu = showMenuClass;
    });

    this.themeService.darkClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(darkClass => {
      this.darkClass = darkClass;
    });
  }

  ngOnInit(): void {
    const that = this;
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        that.themeService.hideMenu();
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((event) => this.titleService.setTitle(event.title));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggleNotificationDropMenu(): void {
    this.showNotificationMenu = !this.showNotificationMenu;
  }

  toggleSettingDropMenu(): void {
    this.showToggleMenu = !this.showToggleMenu;
  }

  ngAfterViewInit(): void {
    const that = this;
    setTimeout(() => {
      that.isStopLoading = true;
    }, 1000);

  }

  getActiveRoutes(): void {
    const segments: Array<string> = this.router.url.split('/');
    this.currentActiveMenu = segments[2];
    this.currentActiveSubMenu = segments[3];
  }

  activeInactiveMenu($event: any): void {
    if ($event.item && $event.item === this.currentActiveMenu) {
      this.currentActiveMenu = '';
    } else {
      this.currentActiveMenu = $event.item;
    }
  }


}
