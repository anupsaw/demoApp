import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';


// import 'rxjx/and/operator/delay';
// import 'rxjx/and/operator/of';
// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private basUrl: string;
  constructor(private http: HttpClient) {
    this.basUrl = 'https://jsonplaceholder.typicode.com';
  }

  fetchData(): Observable<any> {
    return this.http.get(this.basUrl + '/users');
  }

  getData(): Promise<any> {
    return this.http.get(this.basUrl + '/users').toPromise();
  }

  myPromise(): Promise<any> {

    const promise = new Promise<any>((resolve, reject) => {
      resolve('Anup Saw');
    });

    return promise;

  }


  fetchDataById(id) {
    let params = new HttpParams();
    params = params.set('id', id);
    return this.http.get(this.basUrl + '/users', { params: params });
  }

  postData(data) {
    const body = data;
    const headers = new HttpHeaders();
    headers.append('content-type', 'appplication/json');
    return this.http.post(this.basUrl + '/posts', body, { headers: headers });
  }

  putData(data) {
    return this.http.put(this.basUrl + '/posts', data);
  }

  deleteData(id) {

    let params = new HttpParams();
    params = params.set('userid', id);
    return this.http.delete(this.basUrl + '/posts', { params: params });
  }

  myObservable(): Observable<any> {

    return Observable.create((observer) => {
      observer.next(1);
    });

    // return Observable.of({ name: 'anup' }, { name: 'saw' });
  }

}
