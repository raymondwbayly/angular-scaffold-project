import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { CompanyModel } from '../models/company.model';

@Injectable()
export class CompanyService {
  private companyURL = 'assets/data/company.json';  // URL to web API

  constructor(private http: Http) { }

  public getCompanyInfo(): Observable<any> {
    return this.http.get(this.companyURL)
                    .map(this.extractData)
                    .catch(this.handleErrorObservable);
  }

  private extractData(res: Response): any {
    const data = res.json();
    return data || { };
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
