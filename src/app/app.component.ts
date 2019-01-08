import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
import { CommonService } from './common.service';
import { AppConfig } from './app.config';
import { RouterExtensionsService } from './router-extensions.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'app';
  constructor(public commonService: CommonService,
    private routerExtensionsService: RouterExtensionsService,
    private appConfig: AppConfig) {
    // this.title = appConfig.getProjectName();
   }
  getRouteAnimation(outlet) {
      return outlet.activatedRouteData.animation;
  }
}
