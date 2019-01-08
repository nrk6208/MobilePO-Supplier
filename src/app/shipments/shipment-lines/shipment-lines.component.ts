import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, Sort } from '@angular/material';
import { fromEvent as observableFromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipmentLinesService } from './shipment-lines.service';
import { parseIntAutoRadix } from '@angular/common/src/i18n/format_number';
import { isNumber } from 'util';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'shipment-lines',
    templateUrl: './shipment-lines.component.html',
    styleUrls: ['./shipment-lines.component.scss']
})
export class ShipmentLinesComponent implements OnInit {

    displayedColumns = ['Line Number', 'Item', 'Shipment Date', 'Delivered Quantity', 'Shipped Quantity'];
    rows: Array<any> = [];
    sortedRows: Array<any> = [];
    selectedRows: Array<any> = [];
    showResponsiveTableCode;

    @ViewChild(MatPaginator) paginator1: MatPaginator;
    pageLength = 0;
    pageSize = 10;
    headers = [
        {
            name: 'Line Number',
            key: 'OrderLineNumber',
            order: 'desc'
        },
        {
            name: 'Item',
            key: 'Item',
            order: 'desc'
        },
        {
            name: 'Ordered Quantity',
            key: 'OrderedQuantity',
            order: 'desc'
        },
        {
            name: 'Shipped Quantity',
            key: 'Quantity',
            order: 'desc'
        },
        {
            name: 'Delivered Quantity',
            key: 'DeliveredQuantity',
            order: 'desc'
        }
    ];
    shipment = { Lines: [] };
    // purchaseOrder = {
    //     OrderNumber: 'PRO000001',
    //     Date: new Date(new Date().setDate(-1)),
    //     Quantity: 10,
    //     Lines: [{
    //         OrderLineNumber: 10,
    //         Quantity: 50,
    //         Date: new Date(new Date().setDate(-1)),
    //         Item: 'ITM000001'
    //     }, {
    //         OrderLineNumber: 20,
    //             Quantity: 10,
    //             Date: new Date(new Date().setDate(-2)),
    //             Item: 'ITM000002'
    //     }]
    // };
    filterText = '';
    @ViewChild('filter') filter: ElementRef;
    // @Input() status;
    // @Input() actionStatus;
    // @Output() edit = new EventEmitter();
    // @Output() delete = new EventEmitter();
    // @Output() view = new EventEmitter();
    // @Output() page = new EventEmitter();
    // @Output() sort = new EventEmitter();
    // @Output() dup = new EventEmitter();
    constructor(private route: ActivatedRoute,
        private router: Router,
        private service: ShipmentLinesService) {
        this.route.params.subscribe(params => {
            this.shipment = JSON.parse(params['Shipment']);
        });
    }

    ngOnInit() {
        this.getRows();
        observableFromEvent(this.filter.nativeElement, 'keyup').pipe(
            debounceTime(150),
            distinctUntilChanged())
            .subscribe(() => {
                if (!this.rows) { return; }
                // this.rows = this.filter.nativeElement.value;
                // tslint:disable-next-line:max-line-length
                this.sortedRows = [];
                this.filterText = this.filter.nativeElement.value;
                // const helperRows = this.helpers.rows.filter(e => e.name.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1);
                this.getRows();
            });
    }
    next(event) {
        this.rows = [];
        // for (let i = 1 * event.pageIndex * event.pageSize; i < event.pageSize + event.pageIndex * event.pageSize; i++) {
        //     this.rows = [...this.rows, this.helpers.rows[i]];
        // }
        const startIndex = 1 * event.pageIndex * event.pageSize;
        const length = event.pageSize + event.pageIndex * event.pageSize;
        this.getRows(startIndex, length);
    }
    getFilteredRows() {
        // if (this.filterText !== '') {
        //     let number = 0;
        //     try {
        //         number = isNumber(this.filterText) ? parseInt(this.filterText, 2) : 0;
        //     } catch { }
        //     return this.shipment.Lines.filter(e => e.OrderLineNumber === number);
        // } else {
        //     return this.shipment.Lines;
        // }
        // return this.shipment.Lines.filter(e => e.OrderLineNumber.toString().indexOf(this.filterText.toLowerCase()) > -1);
        return this.shipment.Lines.filter(e => e.Item.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1);
    }
    getSortedFilteredRows() {
        // if (this.filterText !== '') {
        //     let number = 0;
        //     try {
        //         number = isNumber(this.filterText) ? parseInt(this.filterText, 2) : 0;
        //     } catch { }
        //     return this.sortedRows.filter(e => e.OrderLineNumber === number);
        // } else {
        //     return this.sortedRows;
        // }
        // return this.sortedRows.filter(e => e.OrderLineNumber.toString().indexOf(this.filterText.toLowerCase()) > -1);
        return this.sortedRows.filter(e => e.Item.indexOf(this.filterText.toLowerCase()) > -1);
    }
    getRows(startIndex = 0, length = this.pageSize) {
        // for (let i = 0; i < this.pageSize; i++) {
        //     this.rows = [...this.rows, this.helpers.rows[i]];
        // }
        // this.pageLength = this.helpers.rows.length;
        if (this.filterText) {
            // tslint:disable-next-line:max-line-length
            const filteredRows = this.sortedRows.length > 0 ? this.getSortedFilteredRows() : this.getFilteredRows();
            this.rows = filteredRows.slice(startIndex, length);
            this.pageLength = filteredRows.length;
        } else {
            // tslint:disable-next-line:max-line-length
            if (this.sortedRows.length > 0) {
                this.rows = this.sortedRows.slice(startIndex, length);
                this.pageLength = this.sortedRows.length;
            } else {
                this.rows = this.shipment.Lines.slice(startIndex, length);
                this.pageLength = this.shipment.Lines.length;
            }
        }
    }
    sortData(sort: Sort) {
        const data = this.filterText ? this.getFilteredRows() : this.shipment.Lines.slice();
        if (!sort.active || sort.direction === '') {
            this.getRows();
            return;
        }
        this.sortedRows = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'OrderLineNumber': return this.compare(a.OrderLineNumber, b.OrderLineNumber, isAsc);
                case 'Item': return this.compare(a.Item, b.Item, isAsc);
                case 'OrderedQuantity': return this.compare(a.OrderedQuantity, b.OrderedQuantity, isAsc);
                case 'DeliveredQuantity': return this.compare(a.DeliveredQuantity, b.DeliveredQuantity, isAsc);
                case 'Quantity': return this.compare(a.Quantity, b.Quantity, isAsc);
                default: return 0;
            }
        });
        this.getRows();
    }
    compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}
