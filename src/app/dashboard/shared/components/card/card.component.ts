import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title = '';
  constructor() {}

  ngOnInit(): void {}
}
