import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { ConfigProvider } from '../services/config.service';
import { ListResponse } from '../models/listResponse';
import { Person } from '../models/person';

@Injectable()
export class ApiRequester {
  constructor(private http: Http, private config: ConfigProvider) { }

  prepareRequest(request): Observable<any> {
    return this.config.getUrls().flatMap(request);
  };

  getPeople(page: number, pageSize: number, sortOrder: string, sort: string): Observable<ListResponse<Person>> {
    return this.prepareRequest((urls) => {
      return this.http.get(urls.listOfPeople +
        '?searchQuery={\'lname\':\'\',\'revisionstrict\':true,\'revision\':1443,\'wewfwefwf\':true}' +
        '&page=' + page + '&pageSize=' + pageSize + (sort != null ? '&sort=' + sort : '') + (sortOrder != null ? '&sortOrder=' + sortOrder : ''))
        .map((res: Response) => { return res.json(); });
    });
  }

  getPerson(personId: number): Observable<Person> {
    return this.prepareRequest((urls) => {
      return this.http.get(urls.person.replace('$PERSONID', personId)).map((res: Response) => { return res.json(); });
    });
  }
}
