import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TileComponent } from './shared/components/tile/tile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './shared/components/table/table.component';
import { CardComponent } from './shared/components/card/card.component';
import { LineChartComponent } from './shared/components/line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [
    DashboardComponent,
    TileComponent,
    TableComponent,
    CardComponent,
    LineChartComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), NgChartsModule],
})
export class DashboardModule {}
