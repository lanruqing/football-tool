import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false
  constructor() { }
  login():Observable<boolean>{
    return of(true).pipe(
      delay(1000),
      tap(val=>this.isLogin = true)
    )
  }
  logOut():Observable<boolean>{
    return of(true).pipe(
      delay(1000),
      tap(v=>this.isLogin == false)
    )
  }
}
