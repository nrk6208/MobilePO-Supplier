import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';

@Injectable()
export class DashboardWidgetService {
    // public DashboardData: Array<any> = [];
    constructor(private http: HttpClient,
        private appConfig: AppConfig) {
        // this.http.get(`${this.appConfig.getUrl('GetDashboardData')}`).subscribe((res: any) => {
        //     this.DashboardData = res;
        // });
    }
    getDashboardData() {
        return this.http.get(`${this.appConfig.getUrl('GetDashboardData')}`);
    }
}
