import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ListResponse } from '../models/listResponse';
import { Person } from '../models/person';

@Injectable()
export class ApiRequesterStub {

  getPeople(page: number, pageSize: number, sortOrder: string, sort: string): Observable<ListResponse<Person>> {
    return (new Observable<ListResponse<Person>>((obs: any) => {
      obs.next({
        results: [],
        paginationData: {
          count: 0,
          pageNum: 1,
          pageSize: 25
        }
      });
    }));
  }

  getPerson(personId: number): Observable<Person> {
    return (new Observable<Person>((obs: any) => {
      obs.next(
        {
          id: '',
          firstName: '',
          lastName: '',
          email: ''
        }
      );
    }));
  }

}
