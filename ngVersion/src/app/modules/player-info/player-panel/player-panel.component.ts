import { Component, OnInit } from '@angular/core';
import {PlayerInfoService} from '../player-info.service'
import { tap,map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.scss']
})
export class PlayerPanelComponent implements OnInit {

  constructor(private ps:PlayerInfoService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let url = location.href.split('/')
    let page = url[url.length-1]
    this.ps.getUrl().subscribe(u=>{console.log(u)})
  }

}
