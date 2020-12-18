import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpEventType} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:3000';

  user = JSON.parse(localStorage.getItem('currentUser') as string);

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.user.token,
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) {
  }

  post(endPoint: string, params: any): Observable<any> {
    return this.http.post<any>(this.url + endPoint, params, this.httpOptions)
      .pipe(map(
        (response: Response) => {
          return response;
        }
      ));
  }

  get(endPoint: string): Observable<any> {
    return this.http.get<any>(this.url + endPoint, this.httpOptions)
      .pipe(map(
        (response: Response) => {
          return response;
        }
      ));
  }

  put(endPoint: string, params: any): Observable<any> {
    return this.http.put<any>(this.url + endPoint, params, this.httpOptions)
      .pipe(map(
        (response: Response) => {
          console.log(response);
          return response;
        }
      ));
  }

  delete(endPoint: string, params: any): Observable<any> {
    return this.http.put<any>(this.url + endPoint, params, this.httpOptions)
      .pipe(map(
        (response: Response) => {
          console.log(response);
          return response;
        }
      ));
  }

  // upload(data, userId) {
  //
  //   return this.http.post<any>(this.url, data, {
  //     reportProgress: true,
  //     observe: 'events'
  //   }).pipe(map((event) => {
  //
  //       switch (event.type) {
  //
  //         case HttpEventType.UploadProgress:
  //           const progress = Math.round(100 * event.loaded / event.total);
  //           return { status: 'progress', message: progress };
  //
  //         case HttpEventType.Response:
  //           return event.body;
  //         default:
  //           return `Unhandled event: ${event.type}`;
  //       }
  //     })
  //   );
  // }

}
