import { Component, OnInit, Input } from '@angular/core';
import {Player} from '../player'
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor() { }
  @Input() playerInfo:Player
  ngOnInit(): void {
  }

}
