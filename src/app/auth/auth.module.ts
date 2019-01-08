import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule, MatDialogModule } from '@angular/material';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { appRoutes } from './lazyloader.routes';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

import { DashboardCrmModule } from '../dashboard-crm/dashboard-crm.module';

import { CoreModule } from '../core/core.module';
// import { ShipmentDialogComponent } from '../purchase-orders/shipment-dialog/shipment-dialog.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
        MatToolbarModule,
        DashboardCrmModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatTabsModule,
        CoreModule,
        MatSidenavModule,
        PerfectScrollbarModule,
    ],
    declarations: [AuthComponent],
    entryComponents: [
        // ShipmentDialogComponent
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class AuthModule { }
