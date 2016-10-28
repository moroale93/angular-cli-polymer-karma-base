import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ListResponse } from '../models/listResponse';
import { Person } from '../models/person';

@Injectable()
export class ApiRequesterStub {

  getPeople(page: number, pageSize: number, sortOrder: string, sort: string): Observable<ListResponse<Person>> {
    return (new Observable<ListResponse<Person>>((obs: any) => {
      obs.next({
        results: [{
          id: 1,
          firstName: 'firstName1',
          lastName: 'lastName1',
          email: 'email1@email.email'
      }, {
        id: 2,
        firstName: 'firstName2',
        lastName: 'lastName2',
        email: 'email2@email.email'
    }],
        paginationData: {
          count: 2,
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
          id: 1,
          firstName: 'firstName',
          lastName: 'lastName',
          email: 'email@email.email'
      }
      );
    }));
  }

}
