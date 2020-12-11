import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public sidebarVisible = true;

  constructor() {
  }

  toggle(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }

  getStatus(): boolean {
    return this.sidebarVisible;
  }
}
