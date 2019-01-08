import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface DialogData {
    InvoiceNumber: any;
    LorryNumber: any;
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'shipment-dialog',
    styleUrls: ['shipment-dialog.component.scss'],
    templateUrl: 'shipment-dialog.component.html',
})
export class ShipmentDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<ShipmentDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    onNoClick(): void {
        this.dialogRef.close();
    }
    // onSubmitClick(): void {
    //     const data = {};
    //     this.dialogRef.close(data);
    // }
}
