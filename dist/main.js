(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../auth/auth.module.ngfactory": [
		"./src/app/auth/auth.module.ngfactory.js",
		"auth-auth-module-ngfactory~forms-forms-module-ngfactory~pages-login-login-module-ngfactory~pages-pag~84c4da25",
		"auth-auth-module-ngfactory~purchase-orders-purchase-orders-module-ngfactory~shipments-shipments-modu~761e013b",
		"auth-auth-module-ngfactory~pages-pages-module-ngfactory",
		"common",
		"auth-auth-module-ngfactory"
	],
	"../forms/forms.module.ngfactory": [
		"./src/app/forms/forms.module.ngfactory.js",
		"auth-auth-module-ngfactory~forms-forms-module-ngfactory~pages-login-login-module-ngfactory~pages-pag~84c4da25",
		"common",
		"forms-forms-module-ngfactory"
	],
	"../pages/login/login.module.ngfactory": [
		"./src/app/pages/login/login.module.ngfactory.js",
		"auth-auth-module-ngfactory~forms-forms-module-ngfactory~pages-login-login-module-ngfactory~pages-pag~84c4da25",
		"pages-login-login-module-ngfactory~pages-pages-module-ngfactory~purchase-orders-purchase-orders-modu~ade1ceec",
		"common",
		"pages-login-login-module-ngfactory"
	],
	"../pages/pages.module.ngfactory": [
		"./src/app/pages/pages.module.ngfactory.js",
		"auth-auth-module-ngfactory~forms-forms-module-ngfactory~pages-login-login-module-ngfactory~pages-pag~84c4da25",
		"pages-login-login-module-ngfactory~pages-pages-module-ngfactory~purchase-orders-purchase-orders-modu~ade1ceec",
		"pages-pages-module-ngfactory~purchase-orders-purchase-orders-module-ngfactory~shipments-shipments-mo~58d3d793",
		"pages-pages-module-ngfactory~purchase-orders-purchase-orders-module-ngfactory",
		"auth-auth-module-ngfactory~pages-pages-module-ngfactory",
		"common",
		"pages-pages-module-ngfactory"
	],
	"../purchase-orders/purchase-orders.module.ngfactory": [
		"./src/app/purchase-orders/purchase-orders.module.ngfactory.js",
		"auth-auth-module-ngfactory~forms-forms-module-ngfactory~pages-login-login-module-ngfactory~pages-pag~84c4da25",
		"pages-login-login-module-ngfactory~pages-pages-module-ngfactory~purchase-orders-purchase-orders-modu~ade1ceec",
		"auth-auth-module-ngfactory~purchase-orders-purchase-orders-module-ngfactory~shipments-shipments-modu~761e013b",
		"pages-pages-module-ngfactory~purchase-orders-purchase-orders-module-ngfactory~shipments-shipments-mo~58d3d793",
		"purchase-orders-purchase-orders-module-ngfactory~shipments-shipments-module-ngfactory",
		"pages-pages-module-ngfactory~purchase-orders-purchase-orders-module-ngfactory",
		"common",
		"purchase-orders-purchase-orders-module-ngfactory"
	],
	"../shipments/shipments.module.ngfactory": [
		"./src/app/shipments/shipments.module.ngfactory.js",
		"auth-auth-module-ngfactory~forms-forms-module-ngfactory~pages-login-login-module-ngfactory~pages-pag~84c4da25",
		"pages-login-login-module-ngfactory~pages-pages-module-ngfactory~purchase-orders-purchase-orders-modu~ade1ceec",
		"auth-auth-module-ngfactory~purchase-orders-purchase-orders-module-ngfactory~shipments-shipments-modu~761e013b",
		"pages-pages-module-ngfactory~purchase-orders-purchase-orders-module-ngfactory~shipments-shipments-mo~58d3d793",
		"purchase-orders-purchase-orders-module-ngfactory~shipments-shipments-module-ngfactory",
		"common",
		"shipments-shipments-module-ngfactory"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/Interceptor.service.ts":
/*!****************************************!*\
  !*** ./src/app/Interceptor.service.ts ***!
  \****************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








var InterceptorService = /** @class */ (function () {
    function InterceptorService(commonService, router) {
        this.commonService = commonService;
        this.router = router;
    }
    InterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        request = request.clone({
            headers: request.headers
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + (localStorage.getItem(btoa('AuthorizationToken')) || ''))
            // .set('anonymoustoken', this.Constants.token['anonymoustoken'] || '')
            // .set('usertoken', this.Constants.token['usertoken'] || '')
        });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                _this.SetTokenFromLoginResponse(event);
                // console.log('response', event);
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                _this.commonService.spinner.hide();
                if (err.status === 0) {
                    setTimeout(function () {
                        _this.commonService.toaster.show('Server not reachable, Try Again', false);
                        // this.router.navigateByUrl('login');
                    });
                }
                else {
                    if (err.status === 401) {
                        // redirect to the login route
                        // or show a modal
                        // un-authorized
                        setTimeout(function () {
                            _this.commonService.toaster.show('Unauthorized access, redirecting to Login page', false);
                            _this.router.navigateByUrl('login');
                        });
                    }
                    else if (err.status === 400) {
                        setTimeout(function () {
                            _this.commonService.toaster.show((typeof (err.error) === 'string' ? err.error : err.error.message), false);
                        });
                    }
                    else {
                        setTimeout(function () {
                            _this.commonService.toaster.show('Server not reachable, Try Again', false);
                        });
                    }
                }
            }
        }));
    };
    InterceptorService.prototype.SetTokenFromLoginResponse = function (event) {
        if (event.url.endsWith('config.json')) {
            // fetching app settings from local config.json
            return;
        }
        if (this.isLoginResponse(event) && (event.body !== null && event.body.Token)) {
            localStorage.setItem(btoa('AuthorizationToken'), event.body.Token);
        }
    };
    InterceptorService.prototype.isLoginResponse = function (event) {
        return (event.url.toLowerCase().indexOf('login') > -1);
    };
    InterceptorService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_5__["defineInjectable"]({ factory: function InterceptorService_Factory() { return new InterceptorService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); }, token: InterceptorService, providedIn: "root" });
    return InterceptorService;
}());



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/ngx-spinner/ngx-spinner.ngfactory */ "./node_modules/ngx-spinner/ngx-spinner.ngfactory.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");
/* harmony import */ var _router_extensions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router-extensions.service */ "./src/app/router-extensions.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "ngx-spinner", [["bdColor", "rgba(51,51,51,0.8)"], ["color", "#fff"], ["size", "medium"], ["type", "ball-clip-rotate-multiple"]], null, null, null, _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NgxSpinnerComponent_0"], _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NgxSpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 770048, null, 0, ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]], { bdColor: [0, "bdColor"], size: [1, "size"], color: [2, "color"], type: [3, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "p", [["style", "font-size: 20px; color: white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Loading..."]))], function (_ck, _v) { _ck(_v, 1, 0); var currVal_0 = "rgba(51,51,51,0.8)"; var currVal_1 = "medium"; var currVal_2 = "#fff"; var currVal_3 = "ball-clip-rotate-multiple"; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], [_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], _router_extensions_service__WEBPACK_IMPORTED_MODULE_7__["RouterExtensionsService"], _app_config__WEBPACK_IMPORTED_MODULE_8__["AppConfig"]], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".spinner[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  margin: 0; }\n\n.toast-container.toast-top-right[_ngcontent-%COMP%] {\n  top: 60px; }\n\n.toast-container[_ngcontent-%COMP%]   .toast-success[_ngcontent-%COMP%] {\n  background-color: #2cb5e8 !important; }\n\n.lds-dual-ring[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 64px;\n  height: 64px; }\n\n.lds-dual-ring[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: block;\n  width: 46px;\n  height: 46px;\n  margin: 1px;\n  border-radius: 50%;\n  border: 5px solid #fff;\n  border-color: #fff transparent #fff transparent;\n  -webkit-animation: lds-dual-ring 1.2s linear infinite;\n          animation: lds-dual-ring 1.2s linear infinite; }\n\n@-webkit-keyframes lds-dual-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes lds-dual-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }"];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _router_extensions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router-extensions.service */ "./src/app/router-extensions.service.ts");



var AppComponent = /** @class */ (function () {
    // title = 'app';
    function AppComponent(commonService, routerExtensionsService, appConfig) {
        this.commonService = commonService;
        this.routerExtensionsService = routerExtensionsService;
        this.appConfig = appConfig;
        // this.title = appConfig.getProjectName();
    }
    AppComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData.animation;
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _nbspinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nbspinner.service */ "./src/app/nbspinner.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var AppConfig = /** @class */ (function () {
    function AppConfig(http, nbSpinnerService) {
        this.http = http;
        this.nbSpinnerService = nbSpinnerService;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? 'production' : 'development';
        this.apiUrl = '';
    }
    AppConfig.prototype.getUrl = function (key) {
        if (this.data && this.data[key]) {
            return this.data[key].startsWith('http') ? this.data[key] : this.data['apiUrl'] + "/" + this.data[key];
        }
        else {
            return '';
        }
    };
    AppConfig.prototype.getIcon = function () {
        return "assets/icon/" + this.data['IconFileName'];
    };
    AppConfig.prototype.getLogo = function () {
        return "assets/images/" + this.data['LogoFileName'];
    };
    AppConfig.prototype.getProjectName = function () {
        return "" + this.data['ProjectName'];
    };
    AppConfig.prototype.load = function () {
        var _this = this;
        // this.nbSpinnerService.show();
        return new Promise(function (resolve, reject) {
            _this.http.get('assets/config.json').subscribe(function (responseData) {
                _this.data = responseData;
                _this.apiUrl = responseData['apiUrl'];
                resolve(true);
            }, function (error) {
                console.log('Configuration file "config.json" could not be read');
                resolve(true);
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error || 'Server error');
            });
        });
    };
    AppConfig.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"]({ factory: function AppConfig_Factory() { return new AppConfig(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"](_nbspinner_service__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerService"])); }, token: AppConfig, providedIn: "root" });
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _node_modules_ngx_toastr_ngx_toastr_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/ngx-toastr/ngx-toastr.ngfactory */ "./node_modules/ngx-toastr/ngx-toastr.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Interceptor.service */ "./src/app/Interceptor.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _router_extensions_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./router-extensions.service */ "./src/app/router-extensions.service.ts");
/* harmony import */ var _nbtoaster_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./nbtoaster.service */ "./src/app/nbtoaster.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _nbspinner_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./nbspinner.service */ "./src/app/nbspinner.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _guards_role_guard_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./guards/role-guard.service */ "./src/app/guards/role-guard.service.ts");
/* harmony import */ var _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lazy-load/lazy-load.module */ "./src/app/lazy-load/lazy-load.module.ts");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵEmptyOutletComponentNgFactory"], _node_modules_ngx_toastr_ngx_toastr_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ToastNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_l"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_k"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_browser_platform_browser_e"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["GestureConfig"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_HAMMER_OPTIONS"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_c"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_a"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_d"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Meta"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_i"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_g"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0, p1_1) { return [p0_0, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["removeStyles"](p1_0, p1_1)]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_INITIALIZER"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], function (p0_0, p1_0, p1_1) { return [p0_0, new _Interceptor_service__WEBPACK_IMPORTED_MODULE_14__["InterceptorService"](p1_0, p1_1)]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], _common_service__WEBPACK_IMPORTED_MODULE_15__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINTS"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINTS_PROVIDER_FACTORY"], [[3, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINTS"]], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT"]], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["DISABLE_DEFAULT_BREAKPOINTS"]], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["ADD_ORIENTATION_BREAKPOINTS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["BreakPointRegistry"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["ɵa"], [[3, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["BreakPointRegistry"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINTS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MatchMedia"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["ɵc"], [[3, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MatchMedia"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMonitor"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MediaMonitor"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["BreakPointRegistry"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MatchMedia"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["ObservableMedia"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["OBSERVABLE_MEDIA_PROVIDER_FACTORY"], [[3, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["ObservableMedia"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["MatchMedia"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["BreakPointRegistry"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StylesheetMap"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["STYLESHEET_MAP_PROVIDER_FACTORY"], [[3, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StylesheetMap"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StyleUtils"], [[2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["StylesheetMap"]], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["SERVER_TOKEN"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["DISABLE_VENDOR_PREFIXES"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_16__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_16__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_17__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _common_service__WEBPACK_IMPORTED_MODULE_15__["CommonService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _router_extensions_service__WEBPACK_IMPORTED_MODULE_19__["RouterExtensionsService"], _router_extensions_service__WEBPACK_IMPORTED_MODULE_19__["RouterExtensionsService"], [_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _common_service__WEBPACK_IMPORTED_MODULE_15__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nbtoaster_service__WEBPACK_IMPORTED_MODULE_20__["NbToasterService"], _nbtoaster_service__WEBPACK_IMPORTED_MODULE_20__["NbToasterService"], [ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrService"], _app_config__WEBPACK_IMPORTED_MODULE_22__["AppConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_g"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_g"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _nbspinner_service__WEBPACK_IMPORTED_MODULE_23__["NbSpinnerService"], _nbspinner_service__WEBPACK_IMPORTED_MODULE_23__["NbSpinnerService"], [ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _app_config__WEBPACK_IMPORTED_MODULE_22__["AppConfig"], _app_config__WEBPACK_IMPORTED_MODULE_22__["AppConfig"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _nbspinner_service__WEBPACK_IMPORTED_MODULE_23__["NbSpinnerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_browser_platform_browser_h"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"](p1_0), _app_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"](p2_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_g"], _app_config__WEBPACK_IMPORTED_MODULE_22__["AppConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_d"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_c"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () { return [[{ path: "auth", loadChildren: "../auth/auth.module#AuthModule", canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"], _guards_role_guard_service__WEBPACK_IMPORTED_MODULE_26__["RoleGuard"]], data: _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_27__["ɵ0"] }, { path: "login", loadChildren: "../pages/login/login.module#LoginModule" }, { path: "**", redirectTo: "auth/dashboard", canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"], _guards_role_guard_service__WEBPACK_IMPORTED_MODULE_26__["RoleGuard"]] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_e"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_27__["LazyLoadModule"], _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_27__["LazyLoadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_28__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_28__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MATERIAL_SANITY_CHECKS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_32__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_32__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_33__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_33__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_35__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_35__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_36__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_36__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_37__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_37__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_38__["PerfectScrollbarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_38__["PerfectScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_39__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_39__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_40__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_40__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_41__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_41__["FlexLayoutModule"], [[2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["SERVER_TOKEN"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__["ScrollDispatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__["ScrollDispatchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_44__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_44__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_16__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_16__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_46__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_46__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_47__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_47__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slider__WEBPACK_IMPORTED_MODULE_48__["MatSliderModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_48__["MatSliderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_49__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_49__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_core_module__WEBPACK_IMPORTED_MODULE_50__["CoreModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_50__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_37__["MAT_CHIPS_DEFAULT_OPTIONS"], { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_51__["ENTER"]] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_38__["PERFECT_SCROLLBAR_CONFIG"], _core_core_module__WEBPACK_IMPORTED_MODULE_50__["ɵ0"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["TOAST_CONFIG"], { default: ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["DefaultGlobalConfig"], config: { timeOut: 3000, closeButton: true, newestOnTop: true, progressBar: true, positionClass: "toast-bottom-right", preventDuplicates: true } }, [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");

var ɵ0 = function (config) { return function () { return config.load(); }; };
// import { ShipmentDialogComponent } from './purchase-orders/shipment-dialog/shipment-dialog.component';
// import { MatDialogModule } from '@angular/material';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());




/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var AuthService = /** @class */ (function () {
    function AuthService(router, commonService) {
        this.router = router;
        this.commonService = commonService;
        this._isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this._loginData = null;
        this.currentPage = '';
        if (localStorage.getItem(btoa('isLoggedIn')) == null) {
            this._isLoggedIn.next(false);
            this.logout();
        }
        else {
            this._isLoggedIn.next(true);
            var _tempLoginData = localStorage.getItem(btoa('loginData'));
            if (_tempLoginData != null) {
                this._loginData = JSON.parse(atob(_tempLoginData));
            }
        }
    }
    AuthService.prototype.isLoggedIn = function () {
        return this._isLoggedIn.asObservable();
    };
    AuthService.prototype.getLogginStatus = function () {
        return this._isLoggedIn.value;
    };
    AuthService.prototype.saveLogindata = function (data) {
        var _this = this;
        this._isLoggedIn.next(true);
        localStorage.setItem(btoa('loginData'), btoa(JSON.stringify(data)));
        this._loginData = data;
        localStorage.setItem(btoa('isLoggedIn'), 'true');
        this.router.navigateByUrl('');
        setTimeout(function () {
            _this.commonService.spinner.hide();
            _this.commonService.toaster.show("Welcome " + data.User.FirstName + " " + data.User.LastName);
        }, 500);
    };
    AuthService.prototype.getUser = function () {
        return this._loginData.User;
    };
    AuthService.prototype.logout = function (isFromLogin) {
        if (isFromLogin === void 0) { isFromLogin = false; }
        if (isFromLogin) {
            this.reset();
            this._isLoggedIn.next(false);
        }
        else {
            this.commonService.spinner.show();
            this.reset();
            this.router.navigateByUrl('login');
            this._isLoggedIn.next(false);
        }
    };
    AuthService.prototype.reset = function () {
        localStorage.removeItem(btoa('isLoggedIn'));
        localStorage.removeItem(btoa('AuthorizationToken'));
    };
    AuthService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"]({ factory: function AuthService_Factory() { return new AuthService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"](_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());



/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _nbspinner_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nbspinner.service */ "./src/app/nbspinner.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nbtoaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nbtoaster.service */ "./src/app/nbtoaster.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var CommonService = /** @class */ (function () {
    function CommonService(router, spinner, toaster) {
        this.router = router;
        this.spinner = spinner;
        this.toaster = toaster;
    }
    CommonService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"]({ factory: function CommonService_Factory() { return new CommonService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"](_nbspinner_service__WEBPACK_IMPORTED_MODULE_0__["NbSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"](_nbtoaster_service__WEBPACK_IMPORTED_MODULE_2__["NbToasterService"])); }, token: CommonService, providedIn: "root" });
    return CommonService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var ɵ0 = DEFAULT_PERFECT_SCROLLBAR_CONFIG;
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    return CoreModule;
}());




/***/ }),

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, commonService, router) {
        this.authService = authService;
        this.commonService = commonService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.getLogginStatus()) {
            return true;
        }
        this.router.navigateByUrl('/login');
        return false;
    };
    AuthGuard.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"]({ factory: function AuthGuard_Factory() { return new AuthGuard(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"](_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); }, token: AuthGuard, providedIn: "root" });
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/role-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/role-guard.service.ts ***!
  \**********************************************/
/*! exports provided: RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var RoleGuard = /** @class */ (function () {
    function RoleGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    RoleGuard.prototype.canActivate = function (next, state) {
        var user = this._authService.getUser();
        if (next.data.roles.indexOf(Math.floor(user.RoleRank / 10) + 1) > -1) {
            return true;
        }
        // navigate to not found page
        this._router.navigate(['/404']);
        return false;
    };
    RoleGuard.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]({ factory: function RoleGuard_Factory() { return new RoleGuard(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); }, token: RoleGuard, providedIn: "root" });
    return RoleGuard;
}());



/***/ }),

/***/ "./src/app/lazy-load/lazy-load.module.ts":
/*!***********************************************!*\
  !*** ./src/app/lazy-load/lazy-load.module.ts ***!
  \***********************************************/
/*! exports provided: LazyLoadModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadModule", function() { return LazyLoadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
/* harmony import */ var _guards_role_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/role-guard.service */ "./src/app/guards/role-guard.service.ts");



var ɵ0 = { roles: [1, 2, 3, 4] };
var routes = [
    // {
    //     path: '',
    //     redirectTo: 'auth/dashboard',
    //     canActivate: [AuthGuard, RoleGuard],
    //     data: {roles: [1, 2, 3, 4]}
    // },
    {
        path: 'auth',
        loadChildren: '../auth/auth.module#AuthModule',
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _guards_role_guard_service__WEBPACK_IMPORTED_MODULE_2__["RoleGuard"]],
        data: ɵ0
    },
    {
        path: 'login',
        loadChildren: '../pages/login/login.module#LoginModule',
    },
    {
        path: '**',
        redirectTo: 'auth/dashboard',
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _guards_role_guard_service__WEBPACK_IMPORTED_MODULE_2__["RoleGuard"]]
    }
];
var LazyLoadModule = /** @class */ (function () {
    function LazyLoadModule() {
    }
    return LazyLoadModule;
}());




/***/ }),

/***/ "./src/app/nbspinner.service.ts":
/*!**************************************!*\
  !*** ./src/app/nbspinner.service.ts ***!
  \**************************************/
/*! exports provided: NbSpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSpinnerService", function() { return NbSpinnerService; });
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var NbSpinnerService = /** @class */ (function () {
    // display = false;
    function NbSpinnerService(spinner) {
        this.spinner = spinner;
    }
    NbSpinnerService.prototype.show = function () {
        // this.display = true;
        this.spinner.show();
    };
    NbSpinnerService.prototype.hide = function () {
        // this.display = false;
        this.spinner.hide();
    };
    NbSpinnerService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function NbSpinnerService_Factory() { return new NbSpinnerService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_0__["NgxSpinnerService"])); }, token: NbSpinnerService, providedIn: "root" });
    return NbSpinnerService;
}());



/***/ }),

/***/ "./src/app/nbtoaster.service.ts":
/*!**************************************!*\
  !*** ./src/app/nbtoaster.service.ts ***!
  \**************************************/
/*! exports provided: NbToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbToasterService", function() { return NbToasterService; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// import { ToastController } from '@ionic/angular';
// import { RouterExtensionsService } from './router-extensions.service';




var NbToasterService = /** @class */ (function () {
    function NbToasterService(toastrService, appConfig) {
        this.toastrService = toastrService;
        this.appConfig = appConfig;
    }
    NbToasterService.prototype.show = function (message, isSuccess) {
        if (isSuccess === void 0) { isSuccess = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (isSuccess) {
                    this.toastrService.success(message, this.appConfig.getProjectName());
                }
                else {
                    this.toastrService.error(message, this.appConfig.getProjectName());
                }
                return [2 /*return*/];
            });
        });
    };
    NbToasterService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]({ factory: function NbToasterService_Factory() { return new NbToasterService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"])); }, token: NbToasterService, providedIn: "root" });
    return NbToasterService;
}());



/***/ }),

/***/ "./src/app/router-extensions.service.ts":
/*!**********************************************!*\
  !*** ./src/app/router-extensions.service.ts ***!
  \**********************************************/
/*! exports provided: RouterExtensionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterExtensionsService", function() { return RouterExtensionsService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// import { NbSpinnerService } from './nbspinner.service';






var RouterExtensionsService = /** @class */ (function () {
    function RouterExtensionsService(authService, commonService, router) {
        var _this = this;
        this.authService = authService;
        this.commonService = commonService;
        this.router = router;
        this.currentPage = '';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
                _this.commonService.spinner.show();
                // console.log(event.url);
                _this.currentPage = event.url;
                if (_this.currentPage === 'login') {
                    _this.authService.logout();
                }
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                if (event.url === '/auth') {
                    _this.router.navigateByUrl('auth/dashboard');
                }
                else {
                    _this.commonService.spinner.hide();
                }
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationCancel"]) {
                _this.commonService.spinner.hide();
            }
        });
    }
    RouterExtensionsService.prototype.PageRefresh = function () {
        window.location.reload();
    };
    RouterExtensionsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"]({ factory: function RouterExtensionsService_Factory() { return new RouterExtensionsService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"](_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); }, token: RouterExtensionsService, providedIn: "root" });
    return RouterExtensionsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, palete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "palete", function() { return palete; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBwlk0KMM75nBsZ8L7j9cZ5N5x0fwqfBjg',
        authDomain: 'newproject-5d731.firebaseapp.com',
        databaseURL: 'https://newproject-5d731.firebaseio.com',
        projectId: 'newproject-5d731',
        storageBucket: 'newproject-5d731.appspot.com',
        messagingSenderId: '737689833575'
    },
    mailApi: '/assets/list.json'
};
var palete = {
    primary: '#D32F2F',
    accent: '#E65100',
    warm: '#C2185B',
    name: '#D50000',
    secondary: '#D81B60',
    tertiary: '#8E24AA',
    quaternary: '#5E35B1',
    quinary: '#3949AB',
    secondaryLight: '#E91E63',
    tertiaryLight: '#9C27B0',
    quaternaryLight: '#673AB7',
    quinaryLight: '#3F51B5'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AppModuleNgFactory"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Angular\6\Hyva\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map