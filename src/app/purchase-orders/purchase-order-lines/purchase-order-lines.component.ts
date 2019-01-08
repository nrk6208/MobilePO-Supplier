import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, Sort } from '@angular/material';
import { fromEvent as observableFromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrderLinesService } from './purchase-order-lines.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ShipmentDialogComponent } from '../shipment-dialog/shipment-dialog.component';
import { CommonService } from '../../common.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'purchase-order-lines',
    templateUrl: './purchase-order-lines.component.html',
    styleUrls: ['./purchase-order-lines.component.scss']
})
export class PurchaseOrderLinesComponent implements OnInit {

    displayedColumns = ['Item', 'Line Number', 'Ordered Quantity', 'Delivered Quantity', 'Un-Delivered Quantity', 'Shipping Quantity'];
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
            order: 'asc'
        },
        {
            name: 'Item',
            key: 'Item',
            order: 'asc'
        },
        {
            name: 'Ordered Quantity',
            key: 'Quantity',
            order: 'asc'
        },
        {
            name: 'Delivered Quantity',
            key: 'DeliveredQuantity',
            order: 'asc'
        },
        {
            name: 'Un-Delivered Quantity',
            key: 'UnDeliveredQuantity',
            order: 'asc'
        },
        {
            name: 'Shipping Quantity',
            key: 'ShippingQuantity',
            order: 'asc'
        }
    ];
    purchaseOrder: any;
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
        private dialog: MatDialog,
        private commonService: CommonService,
        private router: Router,
        private service: PurchaseOrderLinesService) {
        this.route.params.subscribe(params => {
            this.purchaseOrder = JSON.parse(params['PurchaseOrder']);
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
        return this.purchaseOrder.Lines.filter(e => e.Item.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1);
    }
    getSortedFilteredRows() {
        return this.sortedRows.filter(e => e.Item.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1);
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
                this.rows = this.purchaseOrder.Lines.slice(startIndex, length);
                this.pageLength = this.purchaseOrder.Lines.length;
            }
        }
    }
    sortData(sort: Sort) {
        const data = this.filterText ? this.getFilteredRows() : this.purchaseOrder.Lines.slice();
        if (!sort.active || sort.direction === '') {
            this.getRows();
            return;
        }
        this.sortedRows = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'OrderLineNumber': return this.compare(a.OrderLineNumber, b.OrderLineNumber, isAsc);
                case 'ShippingQuantity': return this.compare(a.ShippingQuantity, b.ShippingQuantity, isAsc);
                case 'DeliveredQuantity': return this.compare(a.DeliveredQuantity, b.DeliveredQuantity, isAsc);
                case 'UnDeliveredQuantity': return this.compare(a.UnDeliveredQuantity, b.UnDeliveredQuantity, isAsc);
                case 'Quantity': return this.compare(a.Quantity, b.Quantity, isAsc);
                case 'Item': return this.compare(a.Item, b.Item, isAsc);
                default: return 0;
            }
        });
        this.getRows();
    }
    compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    isAllSelected() {
        let isAllSelected = true;
        const filteredRows = this.getFilteredRows();
        if (this.filterText) {
            if (filteredRows.length === 0) {
                isAllSelected = false;
            } else {
                filteredRows.forEach(row => {
                    if (this.selectedRows.filter(e => e.OrderLineId === row.OrderLineId && e.ShippingQuantity > 0).length === 0) {
                        isAllSelected = false;
                        return false;
                    }
                });
            }
        } else {
            if (this.purchaseOrder.Lines.filter(e => e.ShippingQuantity > 0).length === 0) {
                isAllSelected = false;
            } else {
                this.purchaseOrder.Lines.filter(e => e.ShippingQuantity > 0).forEach(row => {
                    if (this.selectedRows.filter(e => e.OrderLineId === row.OrderLineId).length === 0) {
                        isAllSelected = false;
                        return false;
                    }
                });
            }
        }
        return isAllSelected;
        // return this.selectedRows.length > 0 && this.rows.length === this.selectedRows.length;
    }
    masterToggle() {
        if (this.isAllSelected()) {
            this.selectedRows = [];
        } else if (this.filterText) {
            this.selectedRows = this.getFilteredRows().filter(e => e.ShippingQuantity > 0);
        } else {
            this.selectedRows = this.purchaseOrder.Lines.filter(e => e.ShippingQuantity > 0);
        }
    }
    toggle(row) {
        if (this.selectedRows.some(e => e.OrderLineId === row.OrderLineId)) {
            // selected row is existed
            this.selectedRows = this.selectedRows.filter(e => e.OrderLineId !== row.OrderLineId);
        } else {
            // selected row is not existed
            this.selectedRows.push(row);
        }
    }
    isChecked(row) {
        return this.selectedRows.some(e => e.OrderLineId === row.OrderLineId);
    }
    submit() {
        if (this.selectedRows.some(e => e.ShippingQuantity === 0)) {
            this.commonService.toaster.show('Shipping Quantity must be greater than 0.', false);
            return;
        }
        this.openDialog();
        // console.log(this.selectedRows);
        // this.router.navigate(['../'], { relativeTo: this.route, skipLocationChange: true });
        // this.service.postShipment(this.selectedRows).subscribe(res => {

        // });
    }
    openDialog(): void {
        const dialogRef = this.dialog.open(ShipmentDialogComponent, {
            width: '300px',
            data: { InvoiceNumber: '', LorryNumber: '' }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.commonService.spinner.show();
                const data = {
                    InvoiceNumber: result.InvoiceNumber,
                    LorryNumber: result.LorryNumber,
                    OrderId: this.purchaseOrder.OrderId,
                    Lines: this.selectedRows
                };
                // console.log('The dialog was closed', result);
                this.service.postShipment(data).subscribe(res => {
                    this.commonService.toaster.show('Shipment has created successfully.');
                    this.commonService.spinner.hide();
                    this.router.navigate(['../'], { relativeTo: this.route, skipLocationChange: true });
                });
                // this.animal = result;
            }
        });
    }
    onChange(event, row) {
        const allowedQuantity = (row.Quantity - row.DeliveredQuantity) - row.UnDeliveredQuantity;
        if (event.target.value === '' || parseInt(event.target.value, 10) < 1) {
            this.commonService.toaster.show('Value can\'t be less than 1.', false);
            row.ShippingQuantity = 1;
        } else if (parseInt(event.target.value, 10) > allowedQuantity) {
            this.commonService.toaster.show(`Value can\'t be greater than the Quantity.${allowedQuantity}`, false);
            row.ShippingQuantity = allowedQuantity;
        } else {
            row.ShippingQuantity = parseInt(event.target.value, 10);
        }
    }
}
