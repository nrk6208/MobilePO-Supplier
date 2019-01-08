import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatDialogModule } from '@angular/material';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule,
         MatSortModule,
         MatCheckboxModule,
         MatTooltipModule,
         MatChipsModule,
         MatButtonToggleModule } from '@angular/material';


import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';
import { PurchaseOrderLinesComponent } from './purchase-order-lines/purchase-order-lines.component';
import { PurchaseOrdersRouterModule } from './purchase-orders.router';
import { PurchaseOrdersService } from './purchase-orders/purchase-orders.service';
import { PurchaseOrderLinesService } from './purchase-order-lines/purchase-order-lines.service';
import { ShipmentDialogComponent } from './shipment-dialog/shipment-dialog.component';


export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    }),
    PurchaseOrdersRouterModule
  ],
  declarations: [
   PurchaseOrdersComponent,
   PurchaseOrderLinesComponent,
   ShipmentDialogComponent
  ],
  entryComponents: [
    ShipmentDialogComponent
  ],
  exports: [
    // ShipmentDialogComponent
    ],
    providers: [
      PurchaseOrdersService,
      PurchaseOrderLinesService
    ]
})
export class PurchaseOrdersModule { }


