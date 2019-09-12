import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-request-tb',
  templateUrl: './request-tb.component.html',
  styleUrls: ['./request-tb.component.scss']
})
export class RequestTBComponent implements OnInit {

  reqs: object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.requestTb().subscribe(data => {
      this.reqs = data
      console.log(this.reqs);
    }
    );
  }

}
