import { Component, OnInit } from '@angular/core';
import { DashboardWidgetService } from '../dashboard-widget/dashboard-widget.service';

@Component({
    selector: 'app-dashboard-crm',
    templateUrl: './dashboard-crm.component.html',
    styleUrls: ['./dashboard-crm.component.scss']
})

export class DashboardCrmComponent implements OnInit {
    public dashCard = [
        // { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 1221, title: 'SALES', icon: 'local_grocery_store' },
        // { colorDark: '#42A5F5', colorLight: '#64B5F6', number: 1221, title: 'LEADS', icon: 'new_releases' },
        // { colorDark: '#26A69A', colorLight: '#4DB6AC', number: 1221, title: 'ASSETS', icon: 'assignments' },
        // { colorDark: '#66BB6A', colorLight: '#81C784', number: 1221, title: 'BANKING', icon: 'account_balance' }
        { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 0, title: 'ORDERED', icon: 'local_grocery_store' },
        { colorDark: '#42A5F5', colorLight: '#64B5F6', number: 0, title: 'SHIPPED', icon: 'new_releases' },
        { colorDark: '#26A69A', colorLight: '#4DB6AC', number: 0, title: 'DELIVERED', icon: 'assignments' },
        { colorDark: '#66BB6A', colorLight: '#81C784', number: 0, title: 'DEFECTED', icon: 'account_balance' }
    ];

    // tableData = [
    //     { country: 'India', sales: 5400, percentage: '40%' },
    //     { country: 'Us', sales: 3200, percentage: '30.33%' },
    //     { country: 'Australia', sales: 2233, percentage: '18.056%' },
    //     { country: 'Spaim', sales: 600, percentage: '6%' },
    //     { country: 'China', sales: 200, percentage: '4.50%' },
    //     { country: 'Brazil', sales: 100, percentage: '2.50%' },
    // ];

    constructor(private dashboardWidgetService: DashboardWidgetService) {
        dashboardWidgetService.getDashboardData().subscribe((res: Array<any>) => {
            // this.DashboardData = res;
            const OrderedQuantity = [];
            const ShippedQuantity = [];
            const DeliveredQuantity = [];
            const DefectedQuantity = [];
            res.filter(function (e) {
                if (e.Records.length > 0) {
                    OrderedQuantity.push(e.Records.map(m => m.OrderedQuantity).reduce((a, b) => a + b));
                    ShippedQuantity.push(e.Records.map(m => m.ShippedQuantity).reduce((a, b) => a + b));
                    DeliveredQuantity.push(e.Records.map(m => m.DeliveredQuantity).reduce((a, b) => a + b));
                    DefectedQuantity.push(e.Records.map(m => m.DefectedQuantity).reduce((a, b) => a + b));
                } else {
                    OrderedQuantity.push(0);
                    ShippedQuantity.push(0);
                    DeliveredQuantity.push(0);
                    DefectedQuantity.push(0);
                }
            });
            this.dashCard[0].number = OrderedQuantity.reduce((a, b) => a + b);
            this.dashCard[1].number = ShippedQuantity.reduce((a, b) => a + b);
            this.dashCard[2].number = DeliveredQuantity.reduce((a, b) => a + b);
            this.dashCard[3].number = DefectedQuantity.reduce((a, b) => a + b);
        });

        // tslint:disable-next-line:max-line-length
        // this.dashCard[0].number = dashboardWidgetService.DashboardData.map(e => e.Records.map(m => m.OrderedQuantity).reduce((a, b) => a + b)).reduce((a, b) => a + b);
        // tslint:disable-next-line:max-line-length
        // this.dashCard[1].number = dashboardWidgetService.DashboardData.map(e => e.Records.map(m => m.ShippedQuantity).reduce((a, b) => a + b)).reduce((a, b) => a + b);
        // tslint:disable-next-line:max-line-length
        // this.dashCard[2].number = dashboardWidgetService.DashboardData.map(e => e.Records.map(m => m.DeliveredQuantity).reduce((a, b) => a + b)).reduce((a, b) => a + b);
        // tslint:disable-next-line:max-line-length
        // this.dashCard[3].number = dashboardWidgetService.DashboardData.map(e => e.Records.map(m => m.DefectedQuantity).reduce((a, b) => a + b)).reduce((a, b) => a + b);

    }

    ngOnInit() {
    }

}
