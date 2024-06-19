import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() headers: string[] = [];
  @Input() data: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
