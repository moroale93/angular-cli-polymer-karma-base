import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

class Config {
  public urls;
  public portal;
}

@Injectable()
export class ConfigProvider {
  private configUrl: string = 'app/configs/config.json';
  // private configJSON: Config;

  constructor(private http: Http) {
    /* this.configJSON={
        "urls":{
            "listOfPeople":"http://private-20f531-ed2016.apiary-mock.com/vts-ed-rest-api/profiles"
        },
        "portal":{
            "home":"http://localhost:3000/html/index.html",
            "secondPage":"http://localhost:3000/html/secondPage.html"
        }
    };*/
  }

  getConfig(): Observable<Config> {
    return this.http.get(this.configUrl).map(res => res.json());
  };

  getUrls(): Observable<any> {
    return this.http.get(this.configUrl).map(res => res.json().urls);
  };

  getPages() { return { secondPage: '' }; }// TODO
}
