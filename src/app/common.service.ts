import { Injectable } from '@angular/core';
import { NbSpinnerService } from './nbspinner.service';
import { Router } from '@angular/router';
import { NbToasterService } from './nbtoaster.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private router: Router,
    public spinner: NbSpinnerService,
    public toaster: NbToasterService) { }
}
