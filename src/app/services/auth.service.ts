import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'true',
      'Content-Type' : 'application/json'
    })
  };

  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(user: any): Observable<any> {
    return this.http.post<any>(this.url + '/auth/login', user, this.httpOptions)
      .pipe(map(response => {
        console.log(response.status);
        // login successful if there's a jwt token in the response
        if (response.status === 200) {
          this.cookieService.set('token', response.token, {expires: 4});
          this.cookieService.set('userId', response.token, {expires: 4});

          return {status: true, message: 'You have successfully logged in.'};
        } else {
          return {status: false, message: response.message};
        }

      }));
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(this.url + '/auth/register', user, this.httpOptions)
      .pipe(map(response => {
        console.log(response);
        // login successful if there's a jwt token in the response
        if (response.status && response.data.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(response.data));
          this.currentUserSubject.next(response.data);

          return {status: true, message: 'You have successfully logged in.'};
        } else {
          return {status: false, message: response.message};
        }

      }));
  }

  // tslint:disable-next-line:typedef
  logout() {
    // remove user from local storage to log user out
    this.cookieService.delete('token');
    this.currentUserSubject.next(null);

  }

  isAuthenticated(): boolean {
    return JSON.parse(localStorage.getItem('currentUser') as string) ? true : false;
  }

  getUsers(): Observable<any> {
    return this.http.get<any>('assets/data.json');
  }
}
