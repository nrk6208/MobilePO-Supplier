import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';
import { PurchaseOrderLinesComponent } from './purchase-order-lines/purchase-order-lines.component';

const materialWidgetRoutes: Routes = [
  { path: '', component: PurchaseOrdersComponent},
  { path: 'lines', component: PurchaseOrderLinesComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PurchaseOrdersRouterModule {}
