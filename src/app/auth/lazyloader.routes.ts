import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        { path: 'dashboard', component: DashboardCrmComponent },
        { path: 'pages', loadChildren: '../pages/pages.module#PagesModule' },
        { path: 'forms', loadChildren: '../forms/forms.module#FormModule' }, // fix this
        // { path: 'material-widgets', loadChildren: '../material-widgets/material-widgets.module#MaterialWidgetsModule' },
        { path: 'purchaseOrders', loadChildren: '../purchase-orders/purchase-orders.module#PurchaseOrdersModule' },
        { path: 'shipments', loadChildren: '../shipments/shipments.module#ShipmentsModule' },
        // { path: 'maps', loadChildren: '../maps/maps.module#MapsModule' },
        // { path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' },
        // { path: 'chats', loadChildren: '../chats/chat.module#ChatsModule' }, // fix this
        // { path: 'mail', loadChildren: '../mail/mail.module#MailModule' }, // fix this
        // { path: 'guarded-routes', loadChildren: '../guarded-routes/guarded-routes.module#GuardedRoutesModule' },
        // { path: 'editor', loadChildren: '../editor/editor.module#EditorModule' },
        // { path: 'scrumboard', loadChildren: '../scrumboard/scrumboard.module#ScrumboardModule' },
    ]
}];
