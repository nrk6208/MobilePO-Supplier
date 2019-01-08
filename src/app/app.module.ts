import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ToastrModule } from 'ngx-toastr';
import { NbSpinnerService } from './nbspinner.service';
import { NbToasterService } from './nbtoaster.service';
import { AppConfig } from './app.config';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './Interceptor.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterExtensionsService } from './router-extensions.service';
import { AuthService } from './auth.service';
// import { ShipmentDialogComponent } from './purchase-orders/shipment-dialog/shipment-dialog.component';
// import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [

  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    HttpClientModule,
    // MatDialogModule,
    CoreModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      closeButton: true,
      newestOnTop: true,
      progressBar: true,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    BrowserAnimationsModule
  ],
  providers: [
    RouterExtensionsService,
    NbSpinnerService,
    NbToasterService,
    AuthService,
    AppConfig,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    { provide: APP_INITIALIZER, useFactory: (config: AppConfig) => () => config.load(), deps: [AppConfig], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
