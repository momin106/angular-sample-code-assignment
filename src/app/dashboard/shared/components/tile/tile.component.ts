import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  @Input() color = '#ffff';
  constructor() {}

  ngOnInit(): void {}
}
