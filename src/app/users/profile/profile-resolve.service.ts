import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../services/data.service';
import 'rxjs/add/observable/of';

@Injectable()
export class ProfileResolver implements Resolve<any> {

  constructor(private dataService: DataService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const id = route.params['id'] || 1;
    return this.dataService.fetchDataById(id);

    // console.log(route);
    // console.log(state);
    // return Observable.of({name: state.url});
  }
}
