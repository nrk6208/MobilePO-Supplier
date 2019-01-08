import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app.config';

@Injectable()
export class ShipmentsService {
    // display = false;
    constructor(private http: HttpClient,
        private appConfig: AppConfig) { }
    getAllShipments() {
        return this.http.get(`${this.appConfig.getUrl('GetAllShipments')}`);
    }
}
