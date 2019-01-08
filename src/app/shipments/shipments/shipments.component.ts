import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, Sort } from '@angular/material';
import { fromEvent as observableFromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../common.service';
import { ShipmentsService } from './shipments.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'shipments',
    templateUrl: './shipments.component.html',
    styleUrls: ['./shipments.component.scss']
})
export class ShipmentsComponent implements OnInit {

    displayedColumns = ['Invoice Number', 'Lorry Number', 'Order Number', 'Shipment Date'];
    rows: Array<any> = [];
    sortedRows: Array<any> = [];
    showResponsiveTableCode;

    @ViewChild(MatPaginator) paginator1: MatPaginator;
    pageLength = 0;
    pageSize = 10;
    headers = [
        {
            name: 'Invoice Number',
            key: 'InvoiceNumber',
            order: 'desc'
        },
        {
            name: 'Lorry Number',
            key: 'LorryNumber',
            order: 'desc'
        },
        {
            name: 'Order Number',
            key: 'OrderNumber',
            order: 'asc'
        },
        {
            name: 'Shipment Date',
            key: 'Date',
            order: 'desc'
        },
        {
            name: 'Action',
            key: 'action',
            order: 'desc'
        }
    ];
    records = [];
    // records = [{
    //     OrderNumber: 'PRO000001',
    //     Date: new Date(new Date().setDate(-1)),
    //     Quantity: 10,
    //     lines: [{
    //         OrderLineNumber: 10,
    //         Quantity: 10,
    //         Date: new Date(new Date().setDate(-1)),
    //         Item: 'ITM000001'
    //     }]
    // }, {
    //     OrderNumber: 'PRO000002',
    //     Date: new Date(new Date().setDate(-2)),
    //     Quantity: 20,
    //     lines: [{}]
    // }, {
    //     OrderNumber: 'PRO000003',
    //     Date: new Date(new Date().setDate(-3)),
    //     Quantity: 30,
    //     lines: [{}]
    // }, {
    //     OrderNumber: 'PRO000004',
    //     Date: new Date(new Date().setDate(-4)),
    //     Quantity: 40,
    //     lines: [{}]
    // }, {
    //     OrderNumber: 'PRO000005',
    //     Date: new Date(new Date().setDate(-5)),
    //     Quantity: 50,
    //     lines: [{}]
    // }, {
    //     OrderNumber: 'PRO000006',
    //     Date: new Date(new Date().setDate(-6)),
    //     Quantity: 60,
    //     lines: [{}]
    // }, {
    //     OrderNumber: 'PRO000007',
    //     Date: new Date(new Date().setDate(-7)),
    //     Quantity: 70,
    //     lines: [{}]
    // }, {
    //     OrderNumber: 'PRO000008',
    //     Date: new Date(new Date().setDate(-8)),
    //     Quantity: 80,
    //     lines: [{}]
    // }, {
    //     OrderNumber: 'PRO000009',
    //     Date: new Date(new Date().setDate(-9)),
    //     Quantity: 90,
    //     lines: [{}]
    // }, {
    //     OrderNumber: 'PRO000010',
    //     Date: new Date(new Date().setDate(-10)),
    //     Quantity: 100,
    //     lines: [{}]
    // }, {
    //     OrderNumber: 'PRO000011',
    //     Date: new Date(new Date().setDate(-11)),
    //     Quantity: 110,
    //     lines: [{}]
    // }, {
    //     OrderNumber: 'PRO000012',
    //     Date: new Date(new Date().setDate(-12)),
    //     Quantity: 120,
    //     lines: [{}]
    // }, {
    //     OrderNumber: 'PRO000013',
    //     Date: new Date(new Date().setDate(-13)),
    //     Quantity: 130,
    //     lines: [{}]
    // }, {
    //     OrderNumber: 'PRO000014',
    //     Date: new Date(new Date().setDate(-14)),
    //     Quantity: 140,
    //     lines: [{}]
    // }, {
    //     OrderNumber: 'PRO000015',
    //     Date: new Date(new Date().setDate(-15)),
    //     Quantity: 150,
    //     lines: [{}]
    // }, {
    //     OrderNumber: 'PRO000016',
    //     Date: new Date(new Date().setDate(-16)),
    //     Quantity: 160,
    //     lines: [{}]
    // }];
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
    constructor(private router: Router,
        private service: ShipmentsService,
        private commonService: CommonService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.commonService.spinner.show();
        this.service.getAllShipments().subscribe((res: any) => {
            this.records = res;
            // if (res.length === 0) {
            //     this.commonService.toaster.show('No records found');
            // } else {
                this.getRows();
            // }
            this.commonService.spinner.hide();
        });
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
        return this.records.filter(e => e.InvoiceNumber.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1);
    }
    getSortedFilteredRows() {
        return this.sortedRows.filter(e => e.InvoiceNumber.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1);
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
                this.rows = this.records.slice(startIndex, length);
                this.pageLength = this.records.length;
            }
        }
    }
    sortData(sort: Sort) {
        const data = this.filterText ? this.getFilteredRows() : this.records.slice();
        if (!sort.active || sort.direction === '') {
            this.getRows();
            return;
        }
        this.sortedRows = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'InvoiceNumber': return this.compare(a.InvoiceNumber, b.InvoiceNumber, isAsc);
                case 'LorryNumber': return this.compare(a.OrderNumber, b.OrderNumber, isAsc);
                case 'OrderNumber': return this.compare(a.OrderNumber, b.OrderNumber, isAsc);
                case 'Date': return this.compare(a.Date, b.Date, isAsc);
                default: return 0;
            }
        });
        this.getRows();
    }
    compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    openLines(row) {
        this.router.navigate(['lines', { Shipment: JSON.stringify(row) }], { relativeTo: this.route, skipLocationChange: true });
    }
}
