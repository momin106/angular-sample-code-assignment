import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  tilesData = [
    {
      icon: '../../../../assets/link-building.png',
      text: 'Tasks',
      value: 120,
      color: '#87b2e4',
    },
    {
      icon: '../../../../assets/link-building-icon-2.png',
      text: 'Stores',
      value: 90,
      color: '#6fc6a6',
    },
    {
      icon: '../../../../assets/web.png',
      text: 'Users',
      value: 600,
      color: '#eb8daf',
    },
    {
      icon: '../../../../assets/linked.png',
      text: 'Services',
      value: 15,
      color: '#F1B33A',
    },
  ];
  tableHeaders = ['Task Id', 'Task Name', 'Cost'];
  tableData = [
    {
      'Task Id': 'TSK001',
      'Task Name': 'Sample Task Name',
      Cost: 'EUR 1200.00',
    },
    {
      'Task Id': 'TSK001',
      'Task Name': 'Sample Task Name',
      Cost: 'EUR 1200.00',
    },
    {
      'Task Id': 'TSK001',
      'Task Name': 'Sample Task Name',
      Cost: 'EUR 1200.00',
    },
    {
      'Task Id': 'TSK001',
      'Task Name': 'Sample Task Name',
      Cost: 'EUR 1200.00',
    },
    {
      'Task Id': 'TSK001',
      'Task Name': 'Sample Task Name',
      Cost: 'EUR 1200.00',
    },
    {
      'Task Id': 'TSK001',
      'Task Name': 'Sample Task Name',
      Cost: 'EUR 1200.00',
    },
  ];
  chartLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  datasets = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
      fill: false,
      tension: 0.5,
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    {
      data: [10, 20, 30, 15, 25, 85, 100],
      label: 'Series B',
      fill: false,
      tension: 0.5,
      borderColor: 'green',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
