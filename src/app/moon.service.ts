import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { masterMoonAuth } from '../api-keys';

@Injectable()
export class MoonService {

  constructor(
    private http: Http
  ) { }

getByPhaseAndPercentage() {
  return this.http.get(`http://api.wunderground.com/api/${masterMoonAuth.key}/astronomy/q/Oregon/Portland.json`)
}

}
