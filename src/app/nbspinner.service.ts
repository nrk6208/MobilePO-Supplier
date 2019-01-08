import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class NbSpinnerService {
  // display = false;
  constructor(private spinner: NgxSpinnerService) { }
  show() {
    // this.display = true;
    this.spinner.show();
  }
  hide() {
    // this.display = false;
    this.spinner.hide();
  }
}
