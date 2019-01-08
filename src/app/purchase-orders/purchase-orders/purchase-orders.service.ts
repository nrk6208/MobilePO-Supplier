import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app.config';

@Injectable()
export class PurchaseOrdersService {
    // display = false;
    constructor(private http: HttpClient,
        private appConfig: AppConfig) { }
    getAllPurchaseOrders() {
        return this.http.get(`${this.appConfig.getUrl('GetAllPurchaseOrders')}`);
    }
}
