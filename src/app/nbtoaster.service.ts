import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// import { ToastController } from '@ionic/angular';
// import { RouterExtensionsService } from './router-extensions.service';
import { AppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class NbToasterService {
  constructor(private toastrService: ToastrService,
    private appConfig: AppConfig) { }

  async show(message: string, isSuccess: boolean = true) {
      if (isSuccess) {
        this.toastrService.success(message, this.appConfig.getProjectName());
      } else {
        this.toastrService.error(message, this.appConfig.getProjectName());
      }
  }
}
