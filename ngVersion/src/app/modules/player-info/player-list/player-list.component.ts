import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {PlayerInfoService} from '../player-info.service'

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
  providers:[PlayerInfoService]
})
export class PlayerListComponent implements OnInit {

  constructor(private ps:PlayerInfoService) { }
  showSpinner:boolean = true
  players:[]
  ngOnInit(): void {
    this.ps.getAllPlayers().subscribe(data=>{
      console.log(data)
      this.players = data
      this.showSpinner = false
    })
  }

}
