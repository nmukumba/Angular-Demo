import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'true'
    })
  };

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(user: any): Observable<any> {
    return this.http.post<any>(this.url + '/login', user, this.httpOptions)
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
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);

  }

  isAuthenticated(): boolean {
    return JSON.parse(localStorage.getItem('currentUser') as string) ? true : false;
  }

  getUsers(): Observable<any> {
    return this.http.get<any>('assets/data.json');
  }
}
