import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app.config';

@Injectable()
export class PurchaseOrderLinesService {
    // display = false;
    constructor(private http: HttpClient,
        private appConfig: AppConfig) { }
    postShipment(data) {
        return this.http.post(`${this.appConfig.getUrl('PostShipment')}`, data);
    }
}
