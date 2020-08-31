import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap,map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlayerInfoService {
  getPlayers:string = "https://tnt9ytplnf.execute-api.us-east-1.amazonaws.com/test1/"
  constructor(private route:ActivatedRoute,private http:HttpClient) { }
  getUrl(){
    return this.route.url.pipe(
      map(url=>{
        return url[0]
      })
    )
  }
  getAllPlayers(){
    return this.http.get(this.getPlayers).pipe(
      map(data=>data['body']['Items'])
    )
  }
}
