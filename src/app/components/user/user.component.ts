import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiRequester } from '../../services/apiRequester.service';
import { HighlightDirective } from '../../directives/attribute/myHighlight.directive';
import { HideContentDirective } from '../../directives/structural/myHideContent.directive';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class User implements OnInit {
  private user;
  color:string="blue";
  color2:string="yellow";
  color3:string="red";

  constructor(private route: ActivatedRoute, private backend: ApiRequester) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.backend.getPerson(+params['id'])
        .subscribe(res => this.user = res);
    });
  }
}
