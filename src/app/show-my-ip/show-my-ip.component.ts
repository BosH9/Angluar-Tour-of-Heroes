import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-show-my-ip',
  templateUrl: './show-my-ip.component.html',
  styleUrls: ['./show-my-ip.component.css']
})
export class ShowMyIpComponent implements OnInit {

  Ip:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMyIp();
  }

  getMyIp(){
    this.http.get('http://ip.jsontest.com/').subscribe(myip=>this.Ip=myip);

  }

}
