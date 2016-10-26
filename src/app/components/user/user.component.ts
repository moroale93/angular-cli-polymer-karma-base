import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiRequester } from '../../services/apiRequester.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class User implements OnInit {
  private user;
  constructor(private route: ActivatedRoute, private backend: ApiRequester) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.backend.getPerson(+params['id'])
        .subscribe(res => this.user = res);
    });
  }
}
