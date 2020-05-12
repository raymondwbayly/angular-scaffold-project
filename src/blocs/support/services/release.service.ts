import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

import { ReleaseModel } from '../models/release.model';

@Injectable()
export class ReleaseService {
  private releaseNotesUrl = 'assets/data/releases.json';  // URL to web API

  constructor(private http: Http) { }

  public getReleaseNotes(): Observable<ReleaseModel[]> {
    return this.http.get(this.releaseNotesUrl)
                    .map(this.extractData)
                    .catch(this.handleErrorObservable);
  }

  private extractData(res: Response): any {
    const data = res.json();
    return data.releaseList || { };
  }

  private handleErrorObservable(error: Response | any): Observable<any> {
    const errMsg = this.handleError(error);
    return Observable.throw(errMsg);
  }

  private handleError(error: Response | any): string {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
  }

}
