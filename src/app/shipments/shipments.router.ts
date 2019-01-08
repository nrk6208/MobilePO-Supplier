import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentLinesComponent } from './shipment-lines/shipment-lines.component';
import { ShipmentsComponent } from './shipments/shipments.component';

const shipmentRoutes: Routes = [
  { path: '', component: ShipmentsComponent},
  { path: 'lines', component: ShipmentLinesComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(shipmentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShipmentsRouterModule {}
