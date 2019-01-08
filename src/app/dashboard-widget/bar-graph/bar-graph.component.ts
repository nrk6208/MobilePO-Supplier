import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { DashboardWidgetService } from '../dashboard-widget.service';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'cdk-bar-graph',
    templateUrl: './bar-graph.component.html',
    styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {
    // @Input() DashboardData: any;
    constructor(private dashboardWidgetService: DashboardWidgetService) { }
    ngOnInit() {
        setTimeout(() => {
            this.createBarGraph();
        }, 500);
    }

    createBarGraph() {
        this.dashboardWidgetService.getDashboardData().subscribe((res: any) => {
            const OrderedQuantityDataset = [];
            const ShippedQuantityDataset = [];
            const DeliveredQuantityDataset = [];
            const DefectedQuantityDataset = [];
            res.filter(function (e) {
                if (e.Records.length > 0) {
                    OrderedQuantityDataset.push(e.Records.map(m => m.OrderedQuantity).reduce((a, b) => a + b));
                    ShippedQuantityDataset.push(e.Records.map(m => m.ShippedQuantity).reduce((a, b) => a + b));
                    DeliveredQuantityDataset.push(e.Records.map(m => m.DeliveredQuantity).reduce((a, b) => a + b));
                    DefectedQuantityDataset.push(e.Records.map(m => m.DefectedQuantity).reduce((a, b) => a + b));
                } else {
                    OrderedQuantityDataset.push(0);
                    ShippedQuantityDataset.push(0);
                    DeliveredQuantityDataset.push(0);
                    DefectedQuantityDataset.push(0);
                }
            });
            // tslint:disable-next-line:no-unused-expression
            new Chart('dash-bar-graph', {
                type: 'bar',
                data: {
                    // labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                    labels: res.map(e => e.Month),
                    datasets: [
                        {
                            backgroundColor: 'rgba(92, 107, 192, .7)',
                            borderColor: 'rgba(92, 107, 192, .7)',
                            // data: [70, 88, 77, 93, 82, 100, 70, 67, 78, 99],
                            // data: res.Records.map(e => e.Records.map(m => m.OrderedQuantity).reduce((a, b) => a + b)),
                            data: OrderedQuantityDataset,
                            label: ' Ordered Quantity',
                            fill: 'false'
                        },
                        {
                            backgroundColor: 'rgba(66, 165, 245, .7)',
                            borderColor: 'rgba(69, 39, 160, .7)',
                            // data: [80, 88, 67, 95, 76, 60, 67, 95, 95, 66],
                            // data: res.Records.map(e => e.Records.map(m => m.ShippedQuantity).reduce((a, b) => a + b)),
                            data: ShippedQuantityDataset,
                            label: ' Shipped Quantity',
                            fill: 'false'
                        },
                        {
                            backgroundColor: 'rgba(38, 166, 154, .7)',
                            borderColor: 'rgba(69, 39, 160, .7)',
                            // data: [60, 88, 70, 67, 27, 83, 78, 88, 95, 60],
                            // data: res.Records.map(e => e.Records.map(m => m.DeliveredQuantity).reduce((a, b) => a + b)),
                            data: DeliveredQuantityDataset,
                            label: ' Delivered Quantity',
                            fill: 'false'
                        },
                        {
                            backgroundColor: 'rgba(102, 187, 106, .7)',
                            borderColor: 'rgba(255, 99, 132)',
                            // data: [75, 55, 55, 95, 66, 88, 70, 78, 77, 100],
                            // data: res.Records.map(e => e.Records.map(m => m.DefectedQuantity).reduce((a, b) => a + b)),
                            data: DefectedQuantityDataset,
                            label: ' Defected Quantity',
                            fill: 'false'
                        }
                    ]
                },
                options: {
                    legend: {
                        display: false
                    },
                    elements: {
                        line: {
                            tension: 0.000001
                        }
                    },
                    maintainAspectRatio: false,
                    plugins: {
                        filler: {
                            propagate: false
                        }
                    },
                    title: {
                        display: true,
                        text: 'ORDER - SHIPMENT GRAPH'
                    }
                }
            });
        });
    }
}
