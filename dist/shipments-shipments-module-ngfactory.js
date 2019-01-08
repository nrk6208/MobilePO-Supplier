(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shipments-shipments-module-ngfactory"],{

/***/ "./src/app/shipments/shipment-lines/shipment-lines.component.ngfactory.js":
/*!********************************************************************************!*\
  !*** ./src/app/shipments/shipment-lines/shipment-lines.component.ngfactory.js ***!
  \********************************************************************************/
/*! exports provided: RenderType_ShipmentLinesComponent, View_ShipmentLinesComponent_0, View_ShipmentLinesComponent_Host_0, ShipmentLinesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ShipmentLinesComponent", function() { return RenderType_ShipmentLinesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShipmentLinesComponent_0", function() { return View_ShipmentLinesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShipmentLinesComponent_Host_0", function() { return View_ShipmentLinesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentLinesComponentNgFactory", function() { return ShipmentLinesComponentNgFactory; });
/* harmony import */ var _shipment_lines_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipment-lines.component.scss.shim.ngstyle */ "./src/app/shipments/shipment-lines/shipment-lines.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _node_modules_angular_material_sort_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/sort/typings/index.ngfactory */ "./node_modules/@angular/material/sort/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony import */ var _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/toolbar/typings/index.ngfactory */ "./node_modules/@angular/material/toolbar/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/form-field/typings/index.ngfactory */ "./node_modules/@angular/material/form-field/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/paginator/typings/index.ngfactory */ "./node_modules/@angular/material/paginator/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _shipment_lines_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shipment-lines.component */ "./src/app/shipments/shipment-lines/shipment-lines.component.ts");
/* harmony import */ var _shipment_lines_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shipment-lines.service */ "./src/app/shipments/shipment-lines/shipment-lines.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


























var styles_ShipmentLinesComponent = [_shipment_lines_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ShipmentLinesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ShipmentLinesComponent, data: {} });

function View_ShipmentLinesComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "container"], ["fxLayout", ""], ["fxLayout.xs", "column"], ["fxLayoutAlign", "center"], ["fxLayoutGap", "10px"], ["fxLayoutGap.xs", "0"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]], { layout: [0, "layout"], layoutXs: [1, "layoutXs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1785856, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutGapDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [6, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]], { gap: [0, "gap"], gapXs: [1, "gapXs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [6, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]], { align: [0, "align"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "div", [["class", "text-center"], ["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["ADD_FLEX_STYLES"]]], { flex: [0, "flex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [["style", "font-weight:bold !important"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Order Number: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 5, "div", [["class", "text-center"], ["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["ADD_FLEX_STYLES"]]], { flex: [0, "flex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [["style", "font-weight:bold !important"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Shipment Date: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](14, 2)], function (_ck, _v) { var currVal_0 = ""; var currVal_1 = "column"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "10px"; var currVal_3 = "0"; _ck(_v, 2, 0, currVal_2, currVal_3); var currVal_4 = "center"; _ck(_v, 3, 0, currVal_4); var currVal_5 = ""; _ck(_v, 5, 0, currVal_5); var currVal_7 = ""; _ck(_v, 10, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.shipment.OrderNumber; _ck(_v, 8, 0, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _ck(_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.shipment.Date, "yyyy-MM-dd hh:mm:ss")); _ck(_v, 13, 0, currVal_8); }); }
function View_ShipmentLinesComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["scope", "col"]], [[1, "aria-sort", 0], [2, "mat-sort-header-disabled", null]], [[null, "click"], [null, "mouseenter"], [null, "longpress"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleClick() !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._setIndicatorHintVisible(true) !== false);
        ad = (pd_1 && ad);
    } if (("longpress" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._setIndicatorHintVisible(true) !== false);
        ad = (pd_2 && ad);
    } if (("mouseleave" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._setIndicatorHintVisible(false) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_angular_material_sort_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatSortHeader_0"], _node_modules_angular_material_sort_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatSortHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortHeader"], [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortHeaderIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"]]], { disabled: [0, "disabled"], id: [1, "id"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) { var currVal_2 = (_v.context.$implicit.key == "action"); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.key, ""); _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getAriaSortAttribute(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_4); }); }
function View_ShipmentLinesComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [], [[1, "data-label", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.parent.context.$implicit[_v.context.$implicit.key]; _ck(_v, 1, 0, currVal_1); }); }
function View_ShipmentLinesComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShipmentLinesComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.headers; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ShipmentLinesComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [["style", "text-align: center;"]], [[8, "colSpan", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" No records found "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.headers.length; _ck(_v, 1, 0, currVal_0); }); }
function View_ShipmentLinesComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "thead", [], null, null, null, null, null))], null, null); }
function View_ShipmentLinesComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "tr", [], null, null, null, null, null))], null, null); }
function View_ShipmentLinesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { paginator1: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 2, { filter: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 53, "div", [["class", "components-container-gt-xs"], ["fxLayout", "column"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]], { layout: [0, "layout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 1785856, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutGapDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [6, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]], { gap: [0, "gap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 999424, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["ClassDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]], { klazz: [0, "klazz"], ngClassXs: [1, "ngClassXs"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShipmentLinesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 47, "div", [["class", "table-component-holder mat-elevation-z4"], ["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["ADD_FLEX_STYLES"]]], { flex: [0, "flex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 10, "mat-toolbar", [["class", "table-header mat-toolbar"], ["style", "position: relative;"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { _toolbarRows: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 7, "h1", [["class", "px-3 mat-headline center-align"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Shipment Lines"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 4, "span", [["routerLink", "../"], ["style", "position: absolute;right: 1em;cursor: pointer;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "i", [["class", "material-icons"], ["style", "vertical-align: sub;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" chevron_left "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Back"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 34, "div", [["class", "table-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 12, "div", [["class", "example-header"], ["style", "padding: 0 20px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 11, "mat-form-field", [["class", "mat-form-field"], ["floatPlaceholder", "never"], ["style", "color: black; width: 100%;"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 7389184, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 6, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, [[2, 0], ["filter", 1]], 1, 2, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Filter by Item"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "blur"], [null, "focus"], [null, "input"]], function (_v, en, $event) { var ad = true; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._focusChanged(false) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._focusChanged(true) !== false);
        ad = (pd_1 && ad);
    } if (("input" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._onInput() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_20__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[4, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 17, "table", [["matSort", ""]], null, [[null, "matSortChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("matSortChange" === en)) {
        var pd_0 = (_co.sortData($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 737280, null, 0, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], [], null, { sortChange: "matSortChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 3, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShipmentLinesComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShipmentLinesComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShipmentLinesComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_ShipmentLinesComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkHeaderRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatHeaderRowDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatHeaderRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { columns: [0, "columns"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_ShipmentLinesComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatRowDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { columns: [0, "columns"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 2, "mat-paginator", [["class", "mat-paginator"]], null, [[null, "page"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("page" === en)) {
        var pd_0 = (_co.next($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_MatPaginator_0"], _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_MatPaginator"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 245760, [[1, 4]], 0, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginator"], [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { length: [0, "length"], pageSize: [1, "pageSize"], pageSizeOptions: [2, "pageSizeOptions"] }, { page: "page" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](56, 6)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 4, 0, currVal_0); var currVal_1 = "20px"; _ck(_v, 5, 0, currVal_1); var currVal_2 = "components-container-gt-xs"; var currVal_3 = "components-container-xs"; _ck(_v, 6, 0, currVal_2, currVal_3); var currVal_4 = _co.shipment; _ck(_v, 8, 0, currVal_4); var currVal_5 = ""; _ck(_v, 10, 0, currVal_5); var currVal_8 = "../"; _ck(_v, 18, 0, currVal_8); var currVal_39 = "Filter by Item"; _ck(_v, 34, 0, currVal_39); _ck(_v, 37, 0); var currVal_40 = _co.headers; _ck(_v, 41, 0, currVal_40); var currVal_41 = _co.rows; _ck(_v, 44, 0, currVal_41); var currVal_42 = (((_co.rows == null) ? null : _co.rows.length) == 0); _ck(_v, 46, 0, currVal_42); var currVal_43 = _co.displayedColumns; _ck(_v, 49, 0, currVal_43); var currVal_44 = _co.displayedColumns; _ck(_v, 53, 0, currVal_44); var currVal_45 = _co.pageLength; var currVal_46 = _co.pageSize; var currVal_47 = _ck(_v, 56, 0, 1, 5, 10, 25, 50, 100); _ck(_v, 55, 0, currVal_45, currVal_46, currVal_47); }, function (_ck, _v) { var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._toolbarRows.length; var currVal_7 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._toolbarRows.length; _ck(_v, 11, 0, currVal_6, currVal_7); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).appearance == "standard"); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).appearance == "fill"); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).appearance == "outline"); var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).appearance == "legacy"); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._control.errorState; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._canLabelFloat; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._shouldLabelFloat(); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._hideControlPlaceholder(); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._control.disabled; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._control.autofilled; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._control.focused; var currVal_20 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).color == "accent"); var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).color == "warn"); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._shouldForward("untouched"); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._shouldForward("touched"); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._shouldForward("pristine"); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._shouldForward("dirty"); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._shouldForward("valid"); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._shouldForward("invalid"); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._shouldForward("pending"); var currVal_29 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._animationsEnabled; _ck(_v, 24, 1, [currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29]); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._isServer; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).id; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).placeholder; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).disabled; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).required; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).readonly; var currVal_36 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._ariaDescribedby || null); var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).errorState; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).required.toString(); _ck(_v, 33, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); }); }
function View_ShipmentLinesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "shipment-lines", [], null, null, null, View_ShipmentLinesComponent_0, RenderType_ShipmentLinesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shipment_lines_component__WEBPACK_IMPORTED_MODULE_24__["ShipmentLinesComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _shipment_lines_service__WEBPACK_IMPORTED_MODULE_25__["ShipmentLinesService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ShipmentLinesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("shipment-lines", _shipment_lines_component__WEBPACK_IMPORTED_MODULE_24__["ShipmentLinesComponent"], View_ShipmentLinesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shipments/shipment-lines/shipment-lines.component.scss.shim.ngstyle.js":
/*!****************************************************************************************!*\
  !*** ./src/app/shipments/shipment-lines/shipment-lines.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************/
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
var styles = [".table-header[_ngcontent-%COMP%] {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.table-container[_ngcontent-%COMP%] {\n  padding: 5px 15px 15px 15px; }\n\n.table-component-holder[_ngcontent-%COMP%] {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-collapse: collapse;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  table-layout: fixed; }\n\ntable[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin: .5em 0 .75em;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  border: 1px solid #ddd;\n  padding: .35em; }\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd)   td[_ngcontent-%COMP%] {\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: rgba(145, 151, 187, 0.34);\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\n  .mat-sort-header-container {\n  justify-content: center; }\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: .625em;\n  text-align: center;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #cfcfcf;\n  font-size: .85em;\n  letter-spacing: .1em;\n  text-transform: uppercase; }\n\n@media screen and (max-width: 600px) {\n  table[_ngcontent-%COMP%] {\n    border: 0; }\n  table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n    font-size: 1.3em; }\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    border: none;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px; }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 3px solid #ddd;\n    display: block;\n    margin-bottom: .625em; }\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: .8em;\n    text-align: right; }\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    \n    content: attr(data-label);\n    float: left;\n    font-weight: bold;\n    text-transform: uppercase; }\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0; } }\n\nmat-button-toggle-group[_ngcontent-%COMP%] {\n  cursor: pointer; }\n\n  .mat-sort-header-container {\n  justify-content: center; }\n\n\n\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px; }\n\n.example-header[_ngcontent-%COMP%] {\n  min-height: 64px;\n  display: flex;\n  align-items: center;\n  padding-left: 24px;\n  font-size: 20px; }\n\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 500px; }\n\n.widgetHolder[_ngcontent-%COMP%] {\n  margin: 0 auto; }\n\n.widgetHolder[_ngcontent-%COMP%]   .widgetHolder-content[_ngcontent-%COMP%] {\n    padding: 20px; }"];



/***/ }),

/***/ "./src/app/shipments/shipment-lines/shipment-lines.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shipments/shipment-lines/shipment-lines.component.ts ***!
  \**********************************************************************/
/*! exports provided: ShipmentLinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentLinesComponent", function() { return ShipmentLinesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shipment_lines_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipment-lines.service */ "./src/app/shipments/shipment-lines/shipment-lines.service.ts");






var ShipmentLinesComponent = /** @class */ (function () {
    // @Input() status;
    // @Input() actionStatus;
    // @Output() edit = new EventEmitter();
    // @Output() delete = new EventEmitter();
    // @Output() view = new EventEmitter();
    // @Output() page = new EventEmitter();
    // @Output() sort = new EventEmitter();
    // @Output() dup = new EventEmitter();
    function ShipmentLinesComponent(route, router, service) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.service = service;
        this.displayedColumns = ['Line Number', 'Item', 'Shipment Date', 'Delivered Quantity', 'Shipped Quantity'];
        this.rows = [];
        this.sortedRows = [];
        this.selectedRows = [];
        this.pageLength = 0;
        this.pageSize = 10;
        this.headers = [
            {
                name: 'Line Number',
                key: 'OrderLineNumber',
                order: 'desc'
            },
            {
                name: 'Item',
                key: 'Item',
                order: 'desc'
            },
            {
                name: 'Ordered Quantity',
                key: 'OrderedQuantity',
                order: 'desc'
            },
            {
                name: 'Shipped Quantity',
                key: 'Quantity',
                order: 'desc'
            },
            {
                name: 'Delivered Quantity',
                key: 'DeliveredQuantity',
                order: 'desc'
            }
        ];
        this.shipment = { Lines: [] };
        // purchaseOrder = {
        //     OrderNumber: 'PRO000001',
        //     Date: new Date(new Date().setDate(-1)),
        //     Quantity: 10,
        //     Lines: [{
        //         OrderLineNumber: 10,
        //         Quantity: 50,
        //         Date: new Date(new Date().setDate(-1)),
        //         Item: 'ITM000001'
        //     }, {
        //         OrderLineNumber: 20,
        //             Quantity: 10,
        //             Date: new Date(new Date().setDate(-2)),
        //             Item: 'ITM000002'
        //     }]
        // };
        this.filterText = '';
        this.route.params.subscribe(function (params) {
            _this.shipment = JSON.parse(params['Shipment']);
        });
    }
    ShipmentLinesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRows();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.filter.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function () {
            if (!_this.rows) {
                return;
            }
            // this.rows = this.filter.nativeElement.value;
            // tslint:disable-next-line:max-line-length
            _this.sortedRows = [];
            _this.filterText = _this.filter.nativeElement.value;
            // const helperRows = this.helpers.rows.filter(e => e.name.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1);
            _this.getRows();
        });
    };
    ShipmentLinesComponent.prototype.next = function (event) {
        this.rows = [];
        // for (let i = 1 * event.pageIndex * event.pageSize; i < event.pageSize + event.pageIndex * event.pageSize; i++) {
        //     this.rows = [...this.rows, this.helpers.rows[i]];
        // }
        var startIndex = 1 * event.pageIndex * event.pageSize;
        var length = event.pageSize + event.pageIndex * event.pageSize;
        this.getRows(startIndex, length);
    };
    ShipmentLinesComponent.prototype.getFilteredRows = function () {
        var _this = this;
        // if (this.filterText !== '') {
        //     let number = 0;
        //     try {
        //         number = isNumber(this.filterText) ? parseInt(this.filterText, 2) : 0;
        //     } catch { }
        //     return this.shipment.Lines.filter(e => e.OrderLineNumber === number);
        // } else {
        //     return this.shipment.Lines;
        // }
        // return this.shipment.Lines.filter(e => e.OrderLineNumber.toString().indexOf(this.filterText.toLowerCase()) > -1);
        return this.shipment.Lines.filter(function (e) { return e.Item.toLowerCase().indexOf(_this.filterText.toLowerCase()) > -1; });
    };
    ShipmentLinesComponent.prototype.getSortedFilteredRows = function () {
        var _this = this;
        // if (this.filterText !== '') {
        //     let number = 0;
        //     try {
        //         number = isNumber(this.filterText) ? parseInt(this.filterText, 2) : 0;
        //     } catch { }
        //     return this.sortedRows.filter(e => e.OrderLineNumber === number);
        // } else {
        //     return this.sortedRows;
        // }
        // return this.sortedRows.filter(e => e.OrderLineNumber.toString().indexOf(this.filterText.toLowerCase()) > -1);
        return this.sortedRows.filter(function (e) { return e.Item.indexOf(_this.filterText.toLowerCase()) > -1; });
    };
    ShipmentLinesComponent.prototype.getRows = function (startIndex, length) {
        if (startIndex === void 0) { startIndex = 0; }
        if (length === void 0) { length = this.pageSize; }
        // for (let i = 0; i < this.pageSize; i++) {
        //     this.rows = [...this.rows, this.helpers.rows[i]];
        // }
        // this.pageLength = this.helpers.rows.length;
        if (this.filterText) {
            // tslint:disable-next-line:max-line-length
            var filteredRows = this.sortedRows.length > 0 ? this.getSortedFilteredRows() : this.getFilteredRows();
            this.rows = filteredRows.slice(startIndex, length);
            this.pageLength = filteredRows.length;
        }
        else {
            // tslint:disable-next-line:max-line-length
            if (this.sortedRows.length > 0) {
                this.rows = this.sortedRows.slice(startIndex, length);
                this.pageLength = this.sortedRows.length;
            }
            else {
                this.rows = this.shipment.Lines.slice(startIndex, length);
                this.pageLength = this.shipment.Lines.length;
            }
        }
    };
    ShipmentLinesComponent.prototype.sortData = function (sort) {
        var _this = this;
        var data = this.filterText ? this.getFilteredRows() : this.shipment.Lines.slice();
        if (!sort.active || sort.direction === '') {
            this.getRows();
            return;
        }
        this.sortedRows = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'OrderLineNumber': return _this.compare(a.OrderLineNumber, b.OrderLineNumber, isAsc);
                case 'Item': return _this.compare(a.Item, b.Item, isAsc);
                case 'OrderedQuantity': return _this.compare(a.OrderedQuantity, b.OrderedQuantity, isAsc);
                case 'DeliveredQuantity': return _this.compare(a.DeliveredQuantity, b.DeliveredQuantity, isAsc);
                case 'Quantity': return _this.compare(a.Quantity, b.Quantity, isAsc);
                default: return 0;
            }
        });
        this.getRows();
    };
    ShipmentLinesComponent.prototype.compare = function (a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };
    return ShipmentLinesComponent;
}());



/***/ }),

/***/ "./src/app/shipments/shipment-lines/shipment-lines.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shipments/shipment-lines/shipment-lines.service.ts ***!
  \********************************************************************/
/*! exports provided: ShipmentLinesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentLinesService", function() { return ShipmentLinesService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");


var ShipmentLinesService = /** @class */ (function () {
    // display = false;
    function ShipmentLinesService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    return ShipmentLinesService;
}());



/***/ }),

/***/ "./src/app/shipments/shipments.module.ngfactory.js":
/*!*********************************************************!*\
  !*** ./src/app/shipments/shipments.module.ngfactory.js ***!
  \*********************************************************/
/*! exports provided: ShipmentsModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentsModuleNgFactory", function() { return ShipmentsModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shipments_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipments.module */ "./src/app/shipments/shipments.module.ts");
/* harmony import */ var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/material/dialog/typings/index.ngfactory */ "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/material/datepicker/typings/index.ngfactory */ "./node_modules/@angular/material/datepicker/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/material/tooltip/typings/index.ngfactory */ "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _shipments_shipments_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipments/shipments.component.ngfactory */ "./src/app/shipments/shipments/shipments.component.ngfactory.js");
/* harmony import */ var _shipment_lines_shipment_lines_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shipment-lines/shipment-lines.component.ngfactory */ "./src/app/shipments/shipment-lines/shipment-lines.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var angular_highlight_js_dist_esm_src_highlightJs_token__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-highlight-js/dist/esm/src/highlightJs.token */ "./node_modules/angular-highlight-js/dist/esm/src/highlightJs.token.js");
/* harmony import */ var _shipments_shipments_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shipments/shipments.service */ "./src/app/shipments/shipments/shipments.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _shipment_lines_shipment_lines_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shipment-lines/shipment-lines.service */ "./src/app/shipments/shipment-lines/shipment-lines.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var angular_highlight_js_dist_esm_src_highlightJs_module__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! angular-highlight-js/dist/esm/src/highlightJs.module */ "./node_modules/angular-highlight-js/dist/esm/src/highlightJs.module.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shipments_router__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./shipments.router */ "./src/app/shipments/shipments.router.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shipments_shipments_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./shipments/shipments.component */ "./src/app/shipments/shipments/shipments.component.ts");
/* harmony import */ var _shipment_lines_shipment_lines_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./shipment-lines/shipment-lines.component */ "./src/app/shipments/shipment-lines/shipment-lines.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

























































var ShipmentsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_shipments_module__WEBPACK_IMPORTED_MODULE_1__["ShipmentsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatCalendarHeaderNgFactory"], _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TooltipComponentNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ɵEmptyOutletComponentNgFactory"], _shipments_shipments_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ShipmentsComponentNgFactory"], _shipment_lines_shipment_lines_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ShipmentLinesComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINTS"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINTS_PROVIDER_FACTORY"], [[3, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINTS"]], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINT"]], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["DISABLE_DEFAULT_BREAKPOINTS"]], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["ADD_ORIENTATION_BREAKPOINTS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["BreakPointRegistry"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["ɵa"], [[3, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["BreakPointRegistry"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINTS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MatchMedia"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["ɵc"], [[3, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MatchMedia"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMonitor"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMonitor"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["BreakPointRegistry"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MatchMedia"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["ObservableMedia"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["OBSERVABLE_MEDIA_PROVIDER_FACTORY"], [[3, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["ObservableMedia"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MatchMedia"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["BreakPointRegistry"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StylesheetMap"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["STYLESHEET_MAP_PROVIDER_FACTORY"], [[3, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StylesheetMap"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], [[2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StylesheetMap"]], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["SERVER_TOKEN"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["DISABLE_VENDOR_PREFIXES"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperIntl"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_i"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorIntl"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"], [[3, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortHeaderIntl"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MAT_SORT_HEADER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortHeaderIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, angular_highlight_js_dist_esm_src_highlightJs_token__WEBPACK_IMPORTED_MODULE_23__["HIGHLIGHT_JS"], _shipments_module__WEBPACK_IMPORTED_MODULE_1__["highlightJsFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shipments_shipments_service__WEBPACK_IMPORTED_MODULE_24__["ShipmentsService"], _shipments_shipments_service__WEBPACK_IMPORTED_MODULE_24__["ShipmentsService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_26__["AppConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shipment_lines_shipment_lines_service__WEBPACK_IMPORTED_MODULE_27__["ShipmentLinesService"], _shipment_lines_shipment_lines_service__WEBPACK_IMPORTED_MODULE_27__["ShipmentLinesService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClient"], _app_config__WEBPACK_IMPORTED_MODULE_26__["AppConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_28__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_29__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_29__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"], [[2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["SERVER_TOKEN"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MATERIAL_SANITY_CHECKS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_33__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_33__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_37__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_37__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_38__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_38__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_39__["CdkStepperModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_39__["CdkStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_bb"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_41__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_41__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_42__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_42__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_43__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_43__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollDispatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollDispatchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_46__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_46__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_49__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_49__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_50__["MatButtonToggleModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_50__["MatButtonToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_highlight_js_dist_esm_src_highlightJs_module__WEBPACK_IMPORTED_MODULE_51__["HighlightJsModule"], angular_highlight_js_dist_esm_src_highlightJs_module__WEBPACK_IMPORTED_MODULE_51__["HighlightJsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_52__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_52__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_52__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_52__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shipments_router__WEBPACK_IMPORTED_MODULE_53__["ShipmentsRouterModule"], _shipments_router__WEBPACK_IMPORTED_MODULE_53__["ShipmentsRouterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shipments_module__WEBPACK_IMPORTED_MODULE_1__["ShipmentsModule"], _shipments_module__WEBPACK_IMPORTED_MODULE_1__["ShipmentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_49__["MAT_CHIPS_DEFAULT_OPTIONS"], { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_54__["ENTER"]] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_52__["ROUTES"], function () { return [[{ path: "", component: _shipments_shipments_component__WEBPACK_IMPORTED_MODULE_55__["ShipmentsComponent"] }, { path: "lines", component: _shipment_lines_shipment_lines_component__WEBPACK_IMPORTED_MODULE_56__["ShipmentLinesComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/shipments/shipments.module.ts":
/*!***********************************************!*\
  !*** ./src/app/shipments/shipments.module.ts ***!
  \***********************************************/
/*! exports provided: highlightJsFactory, ShipmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightJsFactory", function() { return highlightJsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentsModule", function() { return ShipmentsModule; });
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_1__);


function highlightJsFactory() {
    highlight_js__WEBPACK_IMPORTED_MODULE_0__["registerLanguage"]('typescript', highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_1__);
    return highlight_js__WEBPACK_IMPORTED_MODULE_0__;
}
var ShipmentsModule = /** @class */ (function () {
    function ShipmentsModule() {
    }
    return ShipmentsModule;
}());



/***/ }),

/***/ "./src/app/shipments/shipments.router.ts":
/*!***********************************************!*\
  !*** ./src/app/shipments/shipments.router.ts ***!
  \***********************************************/
/*! exports provided: ShipmentsRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentsRouterModule", function() { return ShipmentsRouterModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shipment_lines_shipment_lines_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipment-lines/shipment-lines.component */ "./src/app/shipments/shipment-lines/shipment-lines.component.ts");
/* harmony import */ var _shipments_shipments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipments/shipments.component */ "./src/app/shipments/shipments/shipments.component.ts");



var shipmentRoutes = [
    { path: '', component: _shipments_shipments_component__WEBPACK_IMPORTED_MODULE_2__["ShipmentsComponent"] },
    { path: 'lines', component: _shipment_lines_shipment_lines_component__WEBPACK_IMPORTED_MODULE_1__["ShipmentLinesComponent"] }
];
var ShipmentsRouterModule = /** @class */ (function () {
    function ShipmentsRouterModule() {
    }
    return ShipmentsRouterModule;
}());



/***/ }),

/***/ "./src/app/shipments/shipments/shipments.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/shipments/shipments/shipments.component.ngfactory.js ***!
  \**********************************************************************/
/*! exports provided: RenderType_ShipmentsComponent, View_ShipmentsComponent_0, View_ShipmentsComponent_Host_0, ShipmentsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ShipmentsComponent", function() { return RenderType_ShipmentsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShipmentsComponent_0", function() { return View_ShipmentsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShipmentsComponent_Host_0", function() { return View_ShipmentsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentsComponentNgFactory", function() { return ShipmentsComponentNgFactory; });
/* harmony import */ var _shipments_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipments.component.scss.shim.ngstyle */ "./src/app/shipments/shipments/shipments.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_sort_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/sort/typings/index.ngfactory */ "./node_modules/@angular/material/sort/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony import */ var _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/toolbar/typings/index.ngfactory */ "./node_modules/@angular/material/toolbar/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/form-field/typings/index.ngfactory */ "./node_modules/@angular/material/form-field/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/paginator/typings/index.ngfactory */ "./node_modules/@angular/material/paginator/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _shipments_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shipments.component */ "./src/app/shipments/shipments/shipments.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shipments_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shipments.service */ "./src/app/shipments/shipments/shipments.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../common.service */ "./src/app/common.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 































var styles_ShipmentsComponent = [_shipments_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ShipmentsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ShipmentsComponent, data: {} });

function View_ShipmentsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["scope", "col"]], [[1, "aria-sort", 0], [2, "mat-sort-header-disabled", null]], [[null, "click"], [null, "mouseenter"], [null, "longpress"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleClick() !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._setIndicatorHintVisible(true) !== false);
        ad = (pd_1 && ad);
    } if (("longpress" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._setIndicatorHintVisible(true) !== false);
        ad = (pd_2 && ad);
    } if (("mouseleave" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._setIndicatorHintVisible(false) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_angular_material_sort_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatSortHeader_0"], _node_modules_angular_material_sort_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatSortHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeaderIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkColumnDef"]]], { disabled: [0, "disabled"], id: [1, "id"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) { var currVal_2 = (_v.context.$implicit.key == "action"); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.key, ""); _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._getAriaSortAttribute(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_4); }); }
function View_ShipmentsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.parent.parent.context.$implicit[_v.parent.context.$implicit.key], "yyyy-MM-dd hh:mm:ss")); _ck(_v, 1, 0, currVal_0); }); }
function View_ShipmentsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 3, "span", [], null, [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longpress" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._handleTouchend() !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (_co.openLines(_v.parent.parent.context.$implicit) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MAT_TOOLTIP_DEFAULT_OPTIONS"]]], { message: [0, "message"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" arrow_right_alt "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", ((((_v.parent.parent.context.$implicit.Lines == null) ? null : _v.parent.parent.context.$implicit.Lines.length) || 0) + " Lines"), ""); _ck(_v, 1, 0, currVal_0); }, null); }
function View_ShipmentsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit[_v.parent.context.$implicit.key]; _ck(_v, 1, 0, currVal_0); }); }
function View_ShipmentsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "td", [], [[1, "data-label", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShipmentsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShipmentsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShipmentsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_1 = (_v.context.$implicit.key == "Date"); _ck(_v, 2, 0, currVal_1); var currVal_2 = ((_v.context.$implicit.key == "action") && ((((_v.parent.context.$implicit.Lines == null) ? null : _v.parent.context.$implicit.Lines.length) || 0) > 0)); _ck(_v, 4, 0, currVal_2); var currVal_3 = ((_v.context.$implicit.key != "action") && (_v.context.$implicit.key != "Date")); _ck(_v, 6, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 0, 0, currVal_0); }); }
function View_ShipmentsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShipmentsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.headers; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ShipmentsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [["style", "text-align: center;"]], [[8, "colSpan", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" No records found "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.headers.length; _ck(_v, 1, 0, currVal_0); }); }
function View_ShipmentsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "thead", [], null, null, null, null, null))], null, null); }
function View_ShipmentsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "tr", [], null, null, null, null, null))], null, null); }
function View_ShipmentsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { paginator1: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 2, { filter: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 45, "div", [["class", "components-container-gt-xs"], ["fxLayout", "column"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"]], { layout: [0, "layout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 1785856, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutGapDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [6, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"]], { gap: [0, "gap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 999424, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["ClassDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"]], { klazz: [0, "klazz"], ngClassXs: [1, "ngClassXs"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 41, "div", [["class", "table-component-holder mat-elevation-z4"], ["fxFlex", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["FlexDirective"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["MediaMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["LayoutDirective"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["StyleUtils"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_13__["ADD_FLEX_STYLES"]]], { flex: [0, "flex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 4, "mat-toolbar", [["class", "px-3 table-header mat-toolbar"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { _toolbarRows: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 1, "h1", [["class", "mat-headline center-align"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Shipments"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 34, "div", [["class", "table-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 12, "div", [["class", "example-header"], ["style", "padding: 0 20px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 11, "mat-form-field", [["class", "mat-form-field"], ["floatPlaceholder", "never"], ["style", "color: black; width: 100%;"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 7389184, null, 7, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { _control: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 6, { _labelChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, [[2, 0], ["filter", 1]], 1, 2, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Filter by Invoice Number"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [8, "readOnly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "blur"], [null, "focus"], [null, "input"]], function (_v, en, $event) { var ad = true; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._focusChanged(false) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._focusChanged(true) !== false);
        ad = (pd_1 && ad);
    } if (("input" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._onInput() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[4, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 17, "table", [["matSort", ""]], null, [[null, "matSortChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("matSortChange" === en)) {
        var pd_0 = (_co.sortData($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 737280, null, 0, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], [], null, { sortChange: "matSortChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 3, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShipmentsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShipmentsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 802816, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShipmentsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_ShipmentsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkHeaderRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatHeaderRowDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatHeaderRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { columns: [0, "columns"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_ShipmentsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatRowDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { columns: [0, "columns"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 2, "mat-paginator", [["class", "mat-paginator"]], null, [[null, "page"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("page" === en)) {
        var pd_0 = (_co.next($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_MatPaginator_0"], _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_MatPaginator"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 245760, [[1, 4]], 0, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginator"], [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { length: [0, "length"], pageSize: [1, "pageSize"], pageSizeOptions: [2, "pageSizeOptions"] }, { page: "page" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](48, 6)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "column"; _ck(_v, 4, 0, currVal_0); var currVal_1 = "20px"; _ck(_v, 5, 0, currVal_1); var currVal_2 = "components-container-gt-xs"; var currVal_3 = "components-container-xs"; _ck(_v, 6, 0, currVal_2, currVal_3); var currVal_4 = ""; _ck(_v, 8, 0, currVal_4); var currVal_37 = "Filter by Invoice Number"; _ck(_v, 26, 0, currVal_37); _ck(_v, 29, 0); var currVal_38 = _co.headers; _ck(_v, 33, 0, currVal_38); var currVal_39 = _co.rows; _ck(_v, 36, 0, currVal_39); var currVal_40 = (((_co.rows == null) ? null : _co.rows.length) == 0); _ck(_v, 38, 0, currVal_40); var currVal_41 = _co.displayedColumns; _ck(_v, 41, 0, currVal_41); var currVal_42 = _co.displayedColumns; _ck(_v, 45, 0, currVal_42); var currVal_43 = _co.pageLength; var currVal_44 = _co.pageSize; var currVal_45 = _ck(_v, 48, 0, 1, 5, 10, 25, 50, 100); _ck(_v, 47, 0, currVal_43, currVal_44, currVal_45); }, function (_ck, _v) { var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._toolbarRows.length; var currVal_6 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._toolbarRows.length; _ck(_v, 9, 0, currVal_5, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).appearance == "standard"); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).appearance == "fill"); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).appearance == "outline"); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).appearance == "legacy"); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._control.errorState; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._canLabelFloat; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._shouldLabelFloat(); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._hideControlPlaceholder(); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._control.disabled; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._control.autofilled; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._control.focused; var currVal_18 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).color == "accent"); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).color == "warn"); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._shouldForward("untouched"); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._shouldForward("touched"); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._shouldForward("pristine"); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._shouldForward("dirty"); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._shouldForward("valid"); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._shouldForward("invalid"); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._shouldForward("pending"); var currVal_27 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._animationsEnabled; _ck(_v, 16, 1, [currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27]); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._isServer; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).id; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).placeholder; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).disabled; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).required; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).readonly; var currVal_34 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._ariaDescribedby || null); var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).errorState; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).required.toString(); _ck(_v, 25, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36); }); }
function View_ShipmentsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "shipments", [], null, null, null, View_ShipmentsComponent_0, RenderType_ShipmentsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shipments_component__WEBPACK_IMPORTED_MODULE_27__["ShipmentsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_28__["Router"], _shipments_service__WEBPACK_IMPORTED_MODULE_29__["ShipmentsService"], _common_service__WEBPACK_IMPORTED_MODULE_30__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ShipmentsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("shipments", _shipments_component__WEBPACK_IMPORTED_MODULE_27__["ShipmentsComponent"], View_ShipmentsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shipments/shipments/shipments.component.scss.shim.ngstyle.js":
/*!******************************************************************************!*\
  !*** ./src/app/shipments/shipments/shipments.component.scss.shim.ngstyle.js ***!
  \******************************************************************************/
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
var styles = [".table-header[_ngcontent-%COMP%] {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.table-container[_ngcontent-%COMP%] {\n  padding: 5px 15px 15px 15px; }\n\n.table-component-holder[_ngcontent-%COMP%] {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\ntable[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-collapse: collapse;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  table-layout: fixed; }\n\ntable[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin: .5em 0 .75em;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  border: 1px solid #ddd;\n  padding: .35em; }\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd)   td[_ngcontent-%COMP%] {\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: rgba(145, 151, 187, 0.34);\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\n  .mat-sort-header-container {\n  justify-content: center; }\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: .625em;\n  text-align: center;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #cfcfcf;\n  font-size: .85em;\n  letter-spacing: .1em;\n  text-transform: uppercase; }\n\n@media screen and (max-width: 600px) {\n  table[_ngcontent-%COMP%] {\n    border: 0; }\n  table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n    font-size: 1.3em; }\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    border: none;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px; }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 3px solid #ddd;\n    display: block;\n    margin-bottom: .625em; }\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: .8em;\n    text-align: right; }\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    \n    content: attr(data-label);\n    float: left;\n    font-weight: bold;\n    text-transform: uppercase; }\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0; } }\n\nmat-button-toggle-group[_ngcontent-%COMP%] {\n  cursor: pointer; }\n\n  .mat-sort-header-container {\n  justify-content: center; }\n\n\n\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px; }\n\n.example-header[_ngcontent-%COMP%] {\n  min-height: 64px;\n  display: flex;\n  align-items: center;\n  padding-left: 24px;\n  font-size: 20px; }\n\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 500px; }\n\n.widgetHolder[_ngcontent-%COMP%] {\n  margin: 0 auto; }\n\n.widgetHolder[_ngcontent-%COMP%]   .widgetHolder-content[_ngcontent-%COMP%] {\n    padding: 20px; }"];



/***/ }),

/***/ "./src/app/shipments/shipments/shipments.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shipments/shipments/shipments.component.ts ***!
  \************************************************************/
/*! exports provided: ShipmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentsComponent", function() { return ShipmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _shipments_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipments.service */ "./src/app/shipments/shipments/shipments.service.ts");







var ShipmentsComponent = /** @class */ (function () {
    // @Input() status;
    // @Input() actionStatus;
    // @Output() edit = new EventEmitter();
    // @Output() delete = new EventEmitter();
    // @Output() view = new EventEmitter();
    // @Output() page = new EventEmitter();
    // @Output() sort = new EventEmitter();
    // @Output() dup = new EventEmitter();
    function ShipmentsComponent(router, service, commonService, route) {
        this.router = router;
        this.service = service;
        this.commonService = commonService;
        this.route = route;
        this.displayedColumns = ['Invoice Number', 'Lorry Number', 'Order Number', 'Shipment Date'];
        this.rows = [];
        this.sortedRows = [];
        this.pageLength = 0;
        this.pageSize = 10;
        this.headers = [
            {
                name: 'Invoice Number',
                key: 'InvoiceNumber',
                order: 'desc'
            },
            {
                name: 'Lorry Number',
                key: 'LorryNumber',
                order: 'desc'
            },
            {
                name: 'Order Number',
                key: 'OrderNumber',
                order: 'asc'
            },
            {
                name: 'Shipment Date',
                key: 'Date',
                order: 'desc'
            },
            {
                name: 'Action',
                key: 'action',
                order: 'desc'
            }
        ];
        this.records = [];
        // records = [{
        //     OrderNumber: 'PRO000001',
        //     Date: new Date(new Date().setDate(-1)),
        //     Quantity: 10,
        //     lines: [{
        //         OrderLineNumber: 10,
        //         Quantity: 10,
        //         Date: new Date(new Date().setDate(-1)),
        //         Item: 'ITM000001'
        //     }]
        // }, {
        //     OrderNumber: 'PRO000002',
        //     Date: new Date(new Date().setDate(-2)),
        //     Quantity: 20,
        //     lines: [{}]
        // }, {
        //     OrderNumber: 'PRO000003',
        //     Date: new Date(new Date().setDate(-3)),
        //     Quantity: 30,
        //     lines: [{}]
        // }, {
        //     OrderNumber: 'PRO000004',
        //     Date: new Date(new Date().setDate(-4)),
        //     Quantity: 40,
        //     lines: [{}]
        // }, {
        //     OrderNumber: 'PRO000005',
        //     Date: new Date(new Date().setDate(-5)),
        //     Quantity: 50,
        //     lines: [{}]
        // }, {
        //     OrderNumber: 'PRO000006',
        //     Date: new Date(new Date().setDate(-6)),
        //     Quantity: 60,
        //     lines: [{}]
        // }, {
        //     OrderNumber: 'PRO000007',
        //     Date: new Date(new Date().setDate(-7)),
        //     Quantity: 70,
        //     lines: [{}]
        // }, {
        //     OrderNumber: 'PRO000008',
        //     Date: new Date(new Date().setDate(-8)),
        //     Quantity: 80,
        //     lines: [{}]
        // }, {
        //     OrderNumber: 'PRO000009',
        //     Date: new Date(new Date().setDate(-9)),
        //     Quantity: 90,
        //     lines: [{}]
        // }, {
        //     OrderNumber: 'PRO000010',
        //     Date: new Date(new Date().setDate(-10)),
        //     Quantity: 100,
        //     lines: [{}]
        // }, {
        //     OrderNumber: 'PRO000011',
        //     Date: new Date(new Date().setDate(-11)),
        //     Quantity: 110,
        //     lines: [{}]
        // }, {
        //     OrderNumber: 'PRO000012',
        //     Date: new Date(new Date().setDate(-12)),
        //     Quantity: 120,
        //     lines: [{}]
        // }, {
        //     OrderNumber: 'PRO000013',
        //     Date: new Date(new Date().setDate(-13)),
        //     Quantity: 130,
        //     lines: [{}]
        // }, {
        //     OrderNumber: 'PRO000014',
        //     Date: new Date(new Date().setDate(-14)),
        //     Quantity: 140,
        //     lines: [{}]
        // }, {
        //     OrderNumber: 'PRO000015',
        //     Date: new Date(new Date().setDate(-15)),
        //     Quantity: 150,
        //     lines: [{}]
        // }, {
        //     OrderNumber: 'PRO000016',
        //     Date: new Date(new Date().setDate(-16)),
        //     Quantity: 160,
        //     lines: [{}]
        // }];
        this.filterText = '';
    }
    ShipmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.spinner.show();
        this.service.getAllShipments().subscribe(function (res) {
            _this.records = res;
            // if (res.length === 0) {
            //     this.commonService.toaster.show('No records found');
            // } else {
            _this.getRows();
            // }
            _this.commonService.spinner.hide();
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.filter.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function () {
            if (!_this.rows) {
                return;
            }
            // this.rows = this.filter.nativeElement.value;
            // tslint:disable-next-line:max-line-length
            _this.sortedRows = [];
            _this.filterText = _this.filter.nativeElement.value;
            // const helperRows = this.helpers.rows.filter(e => e.name.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1);
            _this.getRows();
        });
    };
    ShipmentsComponent.prototype.next = function (event) {
        this.rows = [];
        // for (let i = 1 * event.pageIndex * event.pageSize; i < event.pageSize + event.pageIndex * event.pageSize; i++) {
        //     this.rows = [...this.rows, this.helpers.rows[i]];
        // }
        var startIndex = 1 * event.pageIndex * event.pageSize;
        var length = event.pageSize + event.pageIndex * event.pageSize;
        this.getRows(startIndex, length);
    };
    ShipmentsComponent.prototype.getFilteredRows = function () {
        var _this = this;
        return this.records.filter(function (e) { return e.InvoiceNumber.toLowerCase().indexOf(_this.filterText.toLowerCase()) > -1; });
    };
    ShipmentsComponent.prototype.getSortedFilteredRows = function () {
        var _this = this;
        return this.sortedRows.filter(function (e) { return e.InvoiceNumber.toLowerCase().indexOf(_this.filterText.toLowerCase()) > -1; });
    };
    ShipmentsComponent.prototype.getRows = function (startIndex, length) {
        if (startIndex === void 0) { startIndex = 0; }
        if (length === void 0) { length = this.pageSize; }
        // for (let i = 0; i < this.pageSize; i++) {
        //     this.rows = [...this.rows, this.helpers.rows[i]];
        // }
        // this.pageLength = this.helpers.rows.length;
        if (this.filterText) {
            // tslint:disable-next-line:max-line-length
            var filteredRows = this.sortedRows.length > 0 ? this.getSortedFilteredRows() : this.getFilteredRows();
            this.rows = filteredRows.slice(startIndex, length);
            this.pageLength = filteredRows.length;
        }
        else {
            // tslint:disable-next-line:max-line-length
            if (this.sortedRows.length > 0) {
                this.rows = this.sortedRows.slice(startIndex, length);
                this.pageLength = this.sortedRows.length;
            }
            else {
                this.rows = this.records.slice(startIndex, length);
                this.pageLength = this.records.length;
            }
        }
    };
    ShipmentsComponent.prototype.sortData = function (sort) {
        var _this = this;
        var data = this.filterText ? this.getFilteredRows() : this.records.slice();
        if (!sort.active || sort.direction === '') {
            this.getRows();
            return;
        }
        this.sortedRows = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'InvoiceNumber': return _this.compare(a.InvoiceNumber, b.InvoiceNumber, isAsc);
                case 'LorryNumber': return _this.compare(a.OrderNumber, b.OrderNumber, isAsc);
                case 'OrderNumber': return _this.compare(a.OrderNumber, b.OrderNumber, isAsc);
                case 'Date': return _this.compare(a.Date, b.Date, isAsc);
                default: return 0;
            }
        });
        this.getRows();
    };
    ShipmentsComponent.prototype.compare = function (a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };
    ShipmentsComponent.prototype.openLines = function (row) {
        this.router.navigate(['lines', { Shipment: JSON.stringify(row) }], { relativeTo: this.route, skipLocationChange: true });
    };
    return ShipmentsComponent;
}());



/***/ }),

/***/ "./src/app/shipments/shipments/shipments.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shipments/shipments/shipments.service.ts ***!
  \**********************************************************/
/*! exports provided: ShipmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentsService", function() { return ShipmentsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");


var ShipmentsService = /** @class */ (function () {
    // display = false;
    function ShipmentsService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    ShipmentsService.prototype.getAllShipments = function () {
        return this.http.get("" + this.appConfig.getUrl('GetAllShipments'));
    };
    return ShipmentsService;
}());



/***/ })

}]);
//# sourceMappingURL=shipments-shipments-module-ngfactory.js.map