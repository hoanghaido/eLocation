(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-modal/add-modal.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-modal/add-modal.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Add Employee</h2>\n  <form *ngIf=\"!isAdded\" [formGroup]=\"addEmployeeForm\"  (ngSubmit)=\"addEmployee()\">  \n          \n      <mat-dialog-content style=\"display:flex;flex-direction: column;\">  \n        <mat-form-field>\n          <mat-label>Name</mat-label>\n          <input matInput formControlName=\"name\" required> \n        </mat-form-field>   \n\n        <mat-form-field >\n          <mat-label>Floor</mat-label>\n          <mat-select [(value)]=\"selectedFloor\" formControlName=\"floor\" (selectionChange)=\"onFloorChange()\" >\n            <mat-option>N/A</mat-option>\n            <mat-option *ngFor=\"let floor of floors\" [value]=\"floor\">\n              {{floor}}\n            </mat-option>\n          </mat-select> \n        </mat-form-field>  \n        \n        <button [disabled]=\"selectedFloor == undefined\" type=\"button\" style=\"margin-bottom:10px\" mat-raised-button (click)=\"openMap()\">Set exact location</button>\n      <!--\n        <mat-form-field>\n          <mat-label>Location</mat-label>\n          <input matInput formControlName=\"location\" >\n        </mat-form-field>  \n\n        <mat-form-field>\n          <mat-label>X</mat-label>   \n          <input matInput formControlName=\"xCoord\" > \n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Y</mat-label>   \n          <input matInput formControlName=\"yCoord\" > \n        </mat-form-field>-->\n        \n      </mat-dialog-content>   \n\n      <mat-dialog-actions>  \n        \n        <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"addEmployeeForm.invalid\">Add</button>  \n        <button mat-raised-button  [mat-dialog-close] (click)=\"resetAdd()\" >Cancel</button>  \n      </mat-dialog-actions>  \n  </form>      \n\n  <div *ngIf=\"isAdded\">  \n    <mat-dialog-content>  \n      Employee Added!  \n    </mat-dialog-content>  \n      <mat-dialog-actions>  \n      <button (click)=\"resetAdd()\" mat-raised-button color=\"primary\">Add More Employees</button>\n      <button mat-raised-button  [mat-dialog-close] (click)=\"resetAdd()\">Close</button> \n    </mat-dialog-actions>  \n  </div> \n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-delete-modal/confirm-delete-modal.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-delete-modal/confirm-delete-modal.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Are you sure you want to delete these {{data.length}} item(s)?</h2>     \n<mat-dialog-actions>  \n  <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"true\">Yes</button>  \n  <button mat-raised-button [mat-dialog-close]=\"false\">No</button>  \n</mat-dialog-actions>  \n \n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<mat-toolbar>\n\n    <span>\n        <button class='btn btn-link' [disabled]=\"selecting\" (click)=\"openAdd()\" title=\"Add an employee\">\n            <fa-icon [icon]=\"['fas', 'plus']\"></fa-icon>\n        </button>\n        <button class='btn btn-link' style='margin-left: 10px;'[disabled]=\"selecting\" (click)=\"toggleSelect()\" title=\"Select and delete employees\">\n            <fa-icon [icon]=\"['far', 'trash-alt']\"></fa-icon>\n        </button>\n        <!--<button class='btn btn-link' style='margin-left: 10px;'[disabled]=\"selecting\" (click)=\"openMap()\" title=\"Open map\">\n            <fa-icon [icon]=\"['fas', 'map-marked']\"></fa-icon>\n        </button>-->\n    </span>\n\n    <span class=\"col-sm-12\"></span>\n\n    <span>\n        <button mat-raised-button color=\"warn\" *ngIf=\"selecting\" (click)=\"openDeleteConfirm()\">Confirm</button>\n        <button mat-raised-button style='margin-left: 10px;' *ngIf=\"selecting\" (click)=\"toggleSelect()\">Cancel</button>\n    </span>\n\n</mat-toolbar>\n\n<div class=\"row\" style=\"margin:10px 5px 0 0\">\n    \n    <span class=\"col-sm-4\" >\n        <mat-form-field id=\"filter\" >\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n    </span>\n    <span class=\"col-sm-8\">\n    </span>\n</div>\n\n<!--<mat-paginator [pageSizeOptions]=\"getPageSizeOptions()\" showFirstLastButtons></mat-paginator>-->\n<div style=\"height:100%; overflow:auto;\">\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"table table-hover mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"select\">\n        <th mat-header-cell *matHeaderCellDef [hidden]=\"!selecting\">\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                      >\n            </mat-checkbox>\n        </th>\n        <td mat-cell *matCellDef=\"let row\"  [hidden]=\"!selecting\">\n            <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? select(row) : null\"\n                        [checked]=\"selection.isSelected(row)\"\n                      >\n            </mat-checkbox>\n        </td>\n    </ng-container>   \n\n    <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Id</th>\n            <td mat-cell *matCellDef=\"let employee\">{{employee.id}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n        <td mat-cell *matCellDef=\"let employee\" >{{employee.name}}\n        </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"floor\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Floor </th>\n        <td mat-cell *matCellDef=\"let employee\"> {{employee.floor}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"location\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Location </th>\n        <td mat-cell *matCellDef=\"let employee\"> {{employee.location}} \n            <div class=\"btn-group btn-group-lg\" *ngIf=\"!selecting\">\n                <button class='btn btn-link' (click)=\"openMap(employee)\" *ngIf=\"employee.xCoord && employee.yCoord\">\n                    <span class=\"glyphicon glyphicon-map-marker\"></span>\n                </button>\n                <button class='btn btn-link' (click)=\"setToUpdateEmployee(employee.id)\">\n                    <span class=\"glyphicon glyphicon-edit\"></span>\n                </button>\n                <button class='btn btn-link' (click)=\"deleteOne(employee)\">\n                    <span class=\"glyphicon glyphicon-trash\"></span>\n                </button>\n            </div> \n        </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"x\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> X </th>\n        <td mat-cell *matCellDef=\"let employee\"> {{employee.xCoord}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"y\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Y </th>\n        <td mat-cell *matCellDef=\"let employee\"> {{employee.yCoord}} </td>\n    </ng-container>\n    \n    <tr mat-header-row *matHeaderRowDef=\"getColumnsToDisplay(); sticky:true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: getColumnsToDisplay()\" ></tr>\n  </table>\n</div>\n\n\n\n<!--<app-add-modal (addEvent)=\"afterAdd()\"></app-add-modal>\n\n<app-confirm-delete-modal [length]=\"selection.selected.length\" (confirmEvent)=\"deleteSelected()\"></app-confirm-delete-modal>-->\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map-modal/map-modal.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map-modal/map-modal.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div><b>Building map: Floor {{floor}}  </b>\n  <mat-form-field floatLabel=\"never\">\n    <mat-select [(value)]=\"selectedLocation\" (selectionChange)=\"onLocationChange()\" [disabled]=\"!editing\">\n      <mat-option>N/A</mat-option>\n      <mat-option *ngFor=\"let location of locations\" [value]=\"location\">\n        {{location}}\n      </mat-option>\n    </mat-select> \n  </mat-form-field> \n</div>  \n\n<mat-dialog-content>\n    <div id=\"mapContainer\" >\n      <maphilight [config]=\"config\" id=\"0f\" *ngIf=\"enabledImg=='0'\" >   \n      <img  src=\"assets/0f.jpg\" alt=\".../\">\n      <map>\n        <area id=\"north0\" (click)=\"setLocation('North0')\" alt=\"North0\" title=\"North0\" coords=\"1,114,1,2,423,2,425,268,275,269,277,116\" shape=\"poly\">\n        <area id=\"south0\" (click)=\"setLocation('South0')\" alt=\"South0\" title=\"South0\" coords=\"3,498,2,385,276,383,277,271,424,271,424,498\" shape=\"poly\">\n        <area id=\"west0\" (click)=\"setLocation('West0')\" alt=\"West0\" title=\"West0\" coords=\"573,555,570,171,841,171,843,307,697,306,697,555\" shape=\"poly\">\n        <area id=\"east0\" (click)=\"setLocation('East0')\" alt=\"East0\" title=\"East0\" coords=\"844,173,845,307,992,309,992,555,1117,556,1117,171,845,172\" shape=\"poly\">\n      </map>\n      </maphilight>\n\n      <maphilight [config]=\"config\" id=\"1f\" *ngIf=\"enabledImg=='1'\">  \n      <img  src=\"assets/1f.jpg\" alt=\".../\">\n      <map>\n        <area id=\"north1\" (click)=\"setLocation('North1')\" alt=\"North1\" title=\"North1\" coords=\"1,114,1,2,423,2,425,268,275,269,277,116\" shape=\"poly\">\n        <area id=\"south1\" (click)=\"setLocation('South1')\" alt=\"South1\" title=\"South1\" coords=\"3,498,2,385,276,383,277,271,424,271,424,498\" shape=\"poly\">\n        <area id=\"west1\" (click)=\"setLocation('West1')\" alt=\"West1\" title=\"West1\" coords=\"573,555,570,171,841,171,843,307,697,306,697,555\" shape=\"poly\">\n        <area id=\"east1\" (click)=\"setLocation('East1')\" alt=\"East1\" title=\"East1\" coords=\"844,173,845,307,992,309,992,555,1117,556,1117,171,845,172\" shape=\"poly\">\n      </map>\n      </maphilight>\n\n      <maphilight [config]=\"config\" id=\"2f\" *ngIf=\"enabledImg=='2'\"> \n      <img  src=\"assets/2f.jpg\" alt=\".../\">\n      <map>\n        <area id=\"north2\" (click)=\"setLocation('North2')\" alt=\"North2\" title=\"North2\" coords=\"1,114,1,2,423,2,425,268,275,269,277,116\" shape=\"poly\">\n        <area id=\"south2\" (click)=\"setLocation('South2')\" alt=\"South2\" title=\"South2\" coords=\"3,498,2,385,276,383,277,271,424,271,424,498\" shape=\"poly\">\n        <area id=\"west2\" (click)=\"setLocation('West2')\" alt=\"West2\" title=\"West2\" coords=\"573,555,570,171,841,171,843,307,697,306,697,555\" shape=\"poly\">\n        <area id=\"east2\" (click)=\"setLocation('East2')\" alt=\"East2\" title=\"East2\" coords=\"844,173,845,307,992,309,992,555,1117,556,1117,171,845,172\" shape=\"poly\">\n      </map>\n      </maphilight>\n\n      <maphilight [config]=\"config\" id=\"3f\" *ngIf=\"enabledImg=='3'\"> \n      <img  src=\"assets/3f.jpg\" alt=\".../\">\n      <map>\n        <area id=\"north3\" (click)=\"setLocation('North3')\" alt=\"North3\" title=\"North3\" coords=\"1,114,1,2,423,2,425,268,275,269,277,116\" shape=\"poly\">\n        <area id=\"south3\" (click)=\"setLocation('South3')\" alt=\"South3\" title=\"South3\" coords=\"3,498,2,385,276,383,277,271,424,271,424,498\" shape=\"poly\">\n        <area id=\"west3\" (click)=\"setLocation('West3')\" alt=\"West3\" title=\"West3\" coords=\"573,555,570,171,841,171,843,307,697,306,697,555\" shape=\"poly\">\n        <area id=\"east3\" (click)=\"setLocation('East3')\" alt=\"East3\" title=\"East3\" coords=\"844,173,845,307,992,309,992,555,1117,556,1117,171,845,172\" shape=\"poly\">\n      </map>\n      </maphilight>\n\n      <maphilight [config]=\"config\" id=\"4f\" *ngIf=\"enabledImg=='4'\"> \n      <img  src=\"assets/4f.jpg\" alt=\".../\">\n      <map>\n        <area id=\"north4\" (click)=\"setLocation('North4')\" alt=\"North4\" title=\"North4\" coords=\"1,114,1,2,423,2,425,268,275,269,277,116\" shape=\"poly\">\n        <area id=\"south4\" (click)=\"setLocation('South4')\" alt=\"South4\" title=\"South4\" coords=\"3,498,2,385,276,383,277,271,424,271,424,498\" shape=\"poly\">\n        <area id=\"west4\" (click)=\"setLocation('West4')\" alt=\"West4\" title=\"West4\" coords=\"573,555,570,171,841,171,843,307,697,306,697,555\" shape=\"poly\">\n        <area id=\"east4\" (click)=\"setLocation('East4')\" alt=\"East4\" title=\"East4\" coords=\"844,173,845,307,992,309,992,555,1117,556,1117,171,845,172\" shape=\"poly\">\n      </map>\n      </maphilight>\n\n    </div>\n</mat-dialog-content>   \n\n<mat-dialog-actions>   \n  <button *ngIf=\"editing\" mat-raised-button color=\"primary\" [mat-dialog-close]=\"result\">Save Location</button>\n  <button mat-raised-button (click)=\"close()\">Close</button>  \n</mat-dialog-actions>  \n \n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-modal/update-modal.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-modal/update-modal.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<h2 mat-dialog-title>Update Employee</h2>\n  <form [formGroup]=\"updateEmployeeForm\"  (ngSubmit)=\"updateEmployee()\">  \n          \n        <mat-dialog-content style=\"display:flex;flex-direction: column;\">    \n          <mat-form-field>\n            <mat-label>Name</mat-label>\n            <input matInput formControlName=\"name\" required> \n          </mat-form-field>    \n\n          <mat-form-field>\n            <mat-label>Floor</mat-label>\n            <mat-select [(value)]=\"selectedFloor\" formControlName=\"floor\" (ngModelChange)=\"onFloorChange()\">\n              <mat-option>N/A</mat-option>\n              <mat-option *ngFor=\"let floor of floors\" [value]=\"floor\">\n                {{floor}}\n              </mat-option>\n            </mat-select> \n          </mat-form-field>   \n          \n          <button [disabled]=\"selectedFloor == undefined || selectedFloor == ''\" type=\"button\" style=\"margin-bottom:10px\" mat-raised-button (click)=\"openMap()\">Set exact location</button>\n          \n          <!--\n          <mat-form-field>\n            <mat-label>Location</mat-label>\n            <input matInput formControlName=\"location\" >\n          </mat-form-field> \n\n          <mat-form-field>\n            <mat-label>X</mat-label>   \n            <input matInput formControlName=\"xCoord\" > \n          </mat-form-field>\n  \n          <mat-form-field>\n            <mat-label>Y</mat-label>   \n            <input matInput formControlName=\"yCoord\" > \n          </mat-form-field>-->\n        </mat-dialog-content>  \n\n        <mat-dialog-actions *ngIf=\"!isUpdateed\">  \n          <button type=\"submit\" [mat-dialog-close]=\"true\" mat-raised-button color=\"primary\" [disabled]=\"updateEmployeeForm.invalid\">Update</button>  \n          <button mat-raised-button  [mat-dialog-close]=\"false\" (click)=\"resetUpdate()\">Cancel</button>  \n        </mat-dialog-actions>  \n  </form>      \n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/add-modal/add-modal.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/add-modal/add-modal.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-actions{\r\n    justify-content: flex-end;\r\n}\r\n\r\ndiv .mat-form-field {\r\n        width:100%;\r\n}\r\n     \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW1vZGFsL2FkZC1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO1FBQ1EsVUFBVTtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWFjdGlvbnN7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5kaXYgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG59XHJcbiAgICAgIl19 */");
            /***/ 
        }),
        /***/ "./src/app/add-modal/add-modal.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/add-modal/add-modal.component.ts ***!
          \**************************************************/
        /*! exports provided: AddModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModalComponent", function () { return AddModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employee */ "./src/app/employee.ts");
            /* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
            /* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../map-modal/map-modal.component */ "./src/app/map-modal/map-modal.component.ts");
            var AddModalComponent = /** @class */ (function () {
                function AddModalComponent(employeeService, dialogRef, dialog) {
                    this.employeeService = employeeService;
                    this.dialogRef = dialogRef;
                    this.dialog = dialog;
                    //locations: string[] = ['North', 'South', 'West', 'East'];
                    //selectedLocation : string;
                    this.floors = ['0', '1', '2', '3', '4'];
                }
                AddModalComponent.prototype.ngOnInit = function () {
                    this.addEmployeeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        floor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
                        xCoord: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
                        yCoord: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
                    });
                };
                Object.defineProperty(AddModalComponent.prototype, "name", {
                    get: function () {
                        return this.addEmployeeForm.get('name');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddModalComponent.prototype, "floor", {
                    get: function () {
                        return this.addEmployeeForm.get('floor');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddModalComponent.prototype, "location", {
                    get: function () {
                        return this.addEmployeeForm.get('location');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddModalComponent.prototype, "xCoord", {
                    get: function () {
                        return this.addEmployeeForm.get('xCoord');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddModalComponent.prototype, "yCoord", {
                    get: function () {
                        return this.addEmployeeForm.get('yCoord');
                    },
                    enumerable: true,
                    configurable: true
                });
                AddModalComponent.prototype.onFloorChange = function () {
                    console.log(this.selectedFloor);
                    //if(this.selectedFloor == undefined) {
                    this.addEmployeeForm.get('location').reset();
                    this.addEmployeeForm.get('xCoord').reset();
                    this.addEmployeeForm.get('yCoord').reset();
                    //}
                };
                AddModalComponent.prototype.addEmployee = function () {
                    this.employee = new _employee__WEBPACK_IMPORTED_MODULE_4__["Employee"]();
                    this.employee.name = this.name.value;
                    this.employee.floor = this.floor.value;
                    this.employee.location = this.location.value;
                    this.employee.xCoord = this.xCoord.value;
                    this.employee.yCoord = this.yCoord.value;
                    console.log(this.addEmployeeForm.value);
                    this.employeeService.addEmployee(this.employee).subscribe(function (data) {
                        console.log(data);
                        //this.addEvent.emit();
                        //this.initSongsList();
                    }, function (error) { return console.log(error); });
                    this.isAdded = true;
                };
                AddModalComponent.prototype.resetAdd = function () {
                    this.isAdded = false;
                    this.addEmployeeForm.reset();
                };
                AddModalComponent.prototype.openMap = function () {
                    var _this_1 = this;
                    var dialogRef = this.dialog.open(_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_6__["MapModalComponent"], {
                        autoFocus: false,
                        data: { editing: true, floor: this.floor.value, location: this.location.value }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result != undefined) {
                            var ret = result;
                            console.log(ret);
                            _this_1.location.patchValue(ret[0]);
                            _this_1.xCoord.patchValue(ret[1]);
                            _this_1.yCoord.patchValue(ret[2]);
                        }
                    });
                };
                return AddModalComponent;
            }());
            AddModalComponent.ctorParameters = function () { return [
                { type: _employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
            ]; };
            AddModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-modal/add-modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-modal.component.css */ "./src/app/add-modal/add-modal.component.css")).default]
                })
            ], AddModalComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
            var routes = [
                { path: '', component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeListComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'eLocation';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            /* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
            /* harmony import */ var ng_maphilight__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-maphilight */ "./node_modules/ng-maphilight/fesm2015/ng-maphilight.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
            /* harmony import */ var _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-modal/add-modal.component */ "./src/app/add-modal/add-modal.component.ts");
            /* harmony import */ var _confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./confirm-delete-modal/confirm-delete-modal.component */ "./src/app/confirm-delete-modal/confirm-delete-modal.component.ts");
            /* harmony import */ var _update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./update-modal/update-modal.component */ "./src/app/update-modal/update-modal.component.ts");
            /* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./map-modal/map-modal.component */ "./src/app/map-modal/map-modal.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule(library) {
                    // Add multiple icons to the library
                    library.addIcons(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faTrashAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faMapMarked"]);
                }
                return AppModule;
            }());
            AppModule.ctorParameters = function () { return [
                { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconLibrary"] }
            ]; };
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                        _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeListComponent"],
                        _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_14__["AddModalComponent"],
                        _confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDeleteModalComponent"],
                        _update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_16__["UpdateModalComponent"],
                        _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_17__["MapModalComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                        ng_maphilight__WEBPACK_IMPORTED_MODULE_11__["MaphilightModule"]
                    ],
                    entryComponents: [
                        _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_14__["AddModalComponent"],
                        _update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_16__["UpdateModalComponent"],
                        _confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDeleteModalComponent"],
                        _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_17__["MapModalComponent"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/confirm-delete-modal/confirm-delete-modal.component.css": 
        /*!*************************************************************************!*\
          !*** ./src/app/confirm-delete-modal/confirm-delete-modal.component.css ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-actions{\r\n    justify-content: flex-end;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybS1kZWxldGUtbW9kYWwvY29uZmlybS1kZWxldGUtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm0tZGVsZXRlLW1vZGFsL2NvbmZpcm0tZGVsZXRlLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1hY3Rpb25ze1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/confirm-delete-modal/confirm-delete-modal.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/confirm-delete-modal/confirm-delete-modal.component.ts ***!
          \************************************************************************/
        /*! exports provided: ConfirmDeleteModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteModalComponent", function () { return ConfirmDeleteModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var ConfirmDeleteModalComponent = /** @class */ (function () {
                //@Input() length: number;
                //@Output() confirmEvent = new EventEmitter();
                function ConfirmDeleteModalComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                }
                ConfirmDeleteModalComponent.prototype.ngOnInit = function () {
                };
                return ConfirmDeleteModalComponent;
            }());
            ConfirmDeleteModalComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            ConfirmDeleteModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-confirm-delete-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-delete-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-delete-modal/confirm-delete-modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-delete-modal.component.css */ "./src/app/confirm-delete-modal/confirm-delete-modal.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], ConfirmDeleteModalComponent);
            /***/ 
        }),
        /***/ "./src/app/employee-list/employee-list.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/employee-list/employee-list.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table tr .btn-group { opacity:0; float:right }\r\ntable tr:hover .btn-group { opacity:1 }\r\n.mat-cell {\r\n    vertical-align:middle;\r\n}\r\n.btn-group {\r\n    vertical-align:bottom;\r\n    display: table-cell;\r\n    padding:0;\r\n}\r\n.btn-group button {\r\n    padding: 0 10px 0 0;\r\n}\r\n.btn-link:focus {\r\n    border:none;\r\n    outline:none;\r\n}\r\ndiv .mat-form-field {\r\n   width:100%;\r\n}\r\n.dialog{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    margin-top: 40px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCLFNBQVMsRUFBRSxZQUFZO0FBQzdDLDRCQUE0QixVQUFVO0FBRXRDO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0dBQ0csVUFBVTtBQUNiO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHRyIC5idG4tZ3JvdXAgeyBvcGFjaXR5OjA7IGZsb2F0OnJpZ2h0IH1cclxudGFibGUgdHI6aG92ZXIgLmJ0bi1ncm91cCB7IG9wYWNpdHk6MSB9XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG59XHJcblxyXG4uYnRuLWdyb3VwIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOmJvdHRvbTtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBwYWRkaW5nOjA7XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDA7XHJcbn1cclxuXHJcbi5idG4tbGluazpmb2N1cyB7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIG91dGxpbmU6bm9uZTtcclxufVxyXG5cclxuZGl2IC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5kaWFsb2d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/employee-list/employee-list.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/employee-list/employee-list.component.ts ***!
          \**********************************************************/
        /*! exports provided: EmployeeListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function () { return EmployeeListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            /* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
            /* harmony import */ var _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-modal/add-modal.component */ "./src/app/add-modal/add-modal.component.ts");
            /* harmony import */ var _confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../confirm-delete-modal/confirm-delete-modal.component */ "./src/app/confirm-delete-modal/confirm-delete-modal.component.ts");
            /* harmony import */ var _update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../update-modal/update-modal.component */ "./src/app/update-modal/update-modal.component.ts");
            /* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../map-modal/map-modal.component */ "./src/app/map-modal/map-modal.component.ts");
            var EmployeeListComponent = /** @class */ (function () {
                function EmployeeListComponent(employeeService, snackBar, dialog) {
                    this.employeeService = employeeService;
                    this.snackBar = snackBar;
                    this.dialog = dialog;
                    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
                    this.selecting = false;
                }
                EmployeeListComponent.prototype.ngOnInit = function () {
                    this.initEmployeesList();
                };
                EmployeeListComponent.prototype.initEmployeesList = function () {
                    var _this_1 = this;
                    this.employeeService.getEmployeesList().subscribe(function (data) {
                        _this_1.employeesList = data;
                        _this_1.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this_1.employeesList);
                        _this_1.dataSource.sort = _this_1.sort;
                    });
                };
                EmployeeListComponent.prototype.getColumnsToDisplay = function () {
                    return ['select', 'id', 'name', 'floor', 'location', 'x', 'y'];
                };
                EmployeeListComponent.prototype.applyFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                EmployeeListComponent.prototype.openSnackBar = function (message, action) {
                    this.snackBar.open(message, action, {
                        duration: 2000,
                    });
                };
                EmployeeListComponent.prototype.toggleSelect = function () {
                    this.selection.clear();
                    this.selecting = !this.selecting;
                };
                EmployeeListComponent.prototype.isAllSelected = function () {
                    var numSelected = this.selection.selected.length;
                    var numRows = this.dataSource.data.length;
                    return numSelected === numRows;
                };
                EmployeeListComponent.prototype.masterToggle = function () {
                    var _this_1 = this;
                    this.isAllSelected() ?
                        this.selection.clear() :
                        this.dataSource.data.forEach(function (row) { return _this_1.selection.select(row); });
                };
                EmployeeListComponent.prototype.select = function (row) {
                    this.selection.toggle(row);
                };
                EmployeeListComponent.prototype.deleteSelected = function () {
                    var _this_1 = this;
                    this.selected = this.selection.selected;
                    this.selected.forEach(function (element) {
                        console.log(element.id);
                        _this_1.employeeService.deleteEmployee(element.id)
                            .subscribe(function (data) {
                            console.log(data);
                            _this_1.initEmployeesList();
                        }, function (error) { return console.log(error); });
                    });
                    this.openSnackBar(this.selection.selected.length + " item(s) successfully deleted", "Close");
                    this.selection.clear();
                    this.selecting = false;
                };
                EmployeeListComponent.prototype.openAdd = function () {
                    var _this_1 = this;
                    var dialogRef = this.dialog.open(_add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_8__["AddModalComponent"], {
                        minWidth: '30vw',
                        minHeight: '30vh'
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        _this_1.initEmployeesList();
                        //this.openSnackBar("Employee successfully added", "Close");
                    });
                };
                EmployeeListComponent.prototype.openDeleteConfirm = function () {
                    var _this_1 = this;
                    var dialogRef = this.dialog.open(_confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDeleteModalComponent"], {
                        position: { top: '10%' },
                        autoFocus: false,
                        data: { length: this.selection.selected.length }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log(result);
                        if (result)
                            _this_1.deleteSelected();
                        _this_1.initEmployeesList();
                    });
                };
                EmployeeListComponent.prototype.deleteOne = function (employee) {
                    this.selection.clear();
                    this.select(employee);
                    this.openDeleteConfirm();
                };
                EmployeeListComponent.prototype.setToUpdateEmployee = function (id) {
                    var _this_1 = this;
                    this.employeeService.getEmployee(id).subscribe(function (data) {
                        //console.log(data);
                        _this_1.openUpdate(data);
                    }, function (error) { return console.log(error); });
                };
                EmployeeListComponent.prototype.openUpdate = function (data) {
                    var _this_1 = this;
                    var dialogRef = this.dialog.open(_update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_10__["UpdateModalComponent"], {
                        minWidth: '30vw',
                        minHeight: '30vh',
                        data: { employee: data }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        _this_1.initEmployeesList();
                        if (result)
                            _this_1.openSnackBar("Employee successfully updated", "Close");
                    });
                };
                EmployeeListComponent.prototype.openMap = function (employee) {
                    var _this_1 = this;
                    var dialogRef = this.dialog.open(_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_11__["MapModalComponent"], {
                        autoFocus: false,
                        data: { editing: false, employee: employee }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        //console.log(result);
                        _this_1.initEmployeesList();
                    });
                };
                return EmployeeListComponent;
            }());
            EmployeeListComponent.ctorParameters = function () { return [
                { type: _employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"] },
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
            ], EmployeeListComponent.prototype, "sort", void 0);
            EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-employee-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employee-list/employee-list.component.css")).default]
                })
            ], EmployeeListComponent);
            /***/ 
        }),
        /***/ "./src/app/employee.service.ts": 
        /*!*************************************!*\
          !*** ./src/app/employee.service.ts ***!
          \*************************************/
        /*! exports provided: EmployeeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function () { return EmployeeService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var EmployeeService = /** @class */ (function () {
                function EmployeeService(http) {
                    this.http = http;
                    this.baseUrl = '/api/';
                }
                EmployeeService.prototype.getEmployeesList = function () {
                    return this.http.get("" + this.baseUrl + 'employeesList');
                };
                EmployeeService.prototype.addEmployee = function (employee) {
                    return this.http.post("" + this.baseUrl + 'add', employee);
                };
                EmployeeService.prototype.deleteEmployee = function (id) {
                    return this.http.delete(this.baseUrl + "delete/" + id, { responseType: 'text' });
                };
                EmployeeService.prototype.getEmployee = function (id) {
                    return this.http.get(this.baseUrl + "employee/" + id);
                };
                EmployeeService.prototype.updateEmployee = function (id, employee) {
                    return this.http.post(this.baseUrl + "update/" + id, employee);
                };
                return EmployeeService;
            }());
            EmployeeService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], EmployeeService);
            /***/ 
        }),
        /***/ "./src/app/employee.ts": 
        /*!*****************************!*\
          !*** ./src/app/employee.ts ***!
          \*****************************/
        /*! exports provided: Employee */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function () { return Employee; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Employee = /** @class */ (function () {
                function Employee() {
                }
                return Employee;
            }());
            /***/ 
        }),
        /***/ "./src/app/map-modal/map-modal.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/map-modal/map-modal.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.mat-dialog-title {\r\n    margin: 0;\r\n}\r\n\r\n.mat-dialog-content {\r\n    max-height: 80vh;\r\n}\r\n\r\n.mat-dialog-actions {\r\n    justify-content: flex-end;\r\n}\r\n\r\n#mapContainer {\r\n    position: relative;\r\n}\r\n\r\nmap {\r\n    cursor: pointer;\r\n}\r\n\r\nimg {\r\n    opacity: 0.5;\r\n    filter: alpha(opacity=50); /* For IE8 and earlier */\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW1vZGFsL21hcC1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QixFQUFFLHdCQUF3QjtJQUNuRCxlQUFlO0lBQ2YsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21hcC1tb2RhbC9tYXAtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLm1hdC1kaWFsb2ctdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IDgwdmg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4gXHJcbiNtYXBDb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5tYXAge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTsgLyogRm9yIElFOCBhbmQgZWFybGllciAqL1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/map-modal/map-modal.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/map-modal/map-modal.component.ts ***!
          \**************************************************/
        /*! exports provided: MapModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModalComponent", function () { return MapModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var MapModalComponent = /** @class */ (function () {
                function MapModalComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.config = {
                        fade: true,
                        alwaysOn: false,
                        neverOn: false,
                        // fill
                        fill: true,
                        fillColor: '#dde8f4',
                        fillOpacity: 0.5,
                        // stroke
                        stroke: true,
                        strokeColor: '#0676f4',
                        strokeOpacity: 1,
                        strokeWidth: 2,
                        // shadow:
                        shadow: true,
                        shadowColor: '#000000',
                        shadowOpacity: 0.8,
                        shadowRadius: 10
                    };
                    this.result = new Array();
                }
                MapModalComponent.prototype.ngOnInit = function () {
                    this.editing = this.data.editing;
                    this.employee = this.data.employee;
                    if (this.employee != null) {
                        this.xCoord = parseFloat(this.employee.xCoord);
                        this.yCoord = parseFloat(this.employee.yCoord);
                    }
                    if (!this.editing) {
                        this.floor = this.employee.floor;
                        this.selectedLocation = this.employee.location;
                    }
                    else {
                        this.floor = this.data.floor;
                        this.selectedLocation = this.data.location;
                    }
                    switch (this.floor) {
                        case '0':
                            this.locations = ['North0', 'South0', 'West0', 'East0'];
                            this.enabledImg = '0';
                            break;
                        case '1':
                            this.locations = ['North1', 'South1', 'West1', 'East1'];
                            this.enabledImg = '1';
                            break;
                        case '2':
                            this.locations = ['North2', 'South2', 'West2', 'East2'];
                            this.enabledImg = '2';
                            break;
                        case '3':
                            this.locations = ['North3', 'South3', 'West3', 'East3'];
                            this.enabledImg = '3';
                            break;
                        case '4':
                            this.locations = ['North4', 'South4', 'West4', 'East4'];
                            this.enabledImg = '4';
                            break;
                        default:
                            break;
                    }
                    var _this = this;
                    $(document).ready(function () {
                        //make image map responsive
                        $('img[usemap]').rwdImageMaps();
                        var height;
                        var width;
                        setTimeout(function () {
                            height = $('img').height();
                            width = $('img').width();
                            console.log(height + "x" + width);
                            //show map marker from coordinates (if exists)
                            if (!isNaN(_this.xCoord) && !isNaN(_this.yCoord)) {
                                //var offset = $('#mapContainer').offset();
                                //$('.marker').remove();
                                $('#mapContainer').append($('<div class="marker glyphicon glyphicon-map-marker "></div>').css({
                                    position: 'absolute',
                                    top: (_this.yCoord * height - 14) + 'px',
                                    left: (_this.xCoord * width - 7) + 'px',
                                }));
                            }
                        }, 200);
                        if (_this.editing) {
                            $('map').click(function (e) {
                                //save the coordinates (in the image) of the mouse click
                                var offset = $('#mapContainer').offset();
                                _this.xCoord = (e.pageX - offset.left) / width;
                                _this.yCoord = (e.pageY - offset.top) / height;
                                _this.result[1] = _this.xCoord.toString();
                                _this.result[2] = _this.yCoord.toString();
                                console.log(_this.result);
                                $('.marker').remove();
                                $('#mapContainer').append($('<div class="marker glyphicon glyphicon-map-marker "></div>').css({
                                    position: 'absolute',
                                    top: (_this.yCoord * height - 14) + 'px',
                                    left: (_this.xCoord * width - 7) + 'px',
                                }));
                            });
                        }
                    });
                };
                MapModalComponent.prototype.close = function () {
                    this.dialogRef.close();
                    //console.log(this.result);
                };
                //set location from coords
                MapModalComponent.prototype.setLocation = function (location) {
                    if (this.editing) {
                        this.selectedLocation = location;
                        this.result[0] = location;
                    }
                };
                MapModalComponent.prototype.onLocationChange = function () {
                    $('.marker').remove();
                    //reset coords to null, keep location
                    this.result = [this.selectedLocation];
                    console.log(this.result);
                };
                return MapModalComponent;
            }());
            MapModalComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            MapModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-map-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/map-modal/map-modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map-modal.component.css */ "./src/app/map-modal/map-modal.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], MapModalComponent);
            /***/ 
        }),
        /***/ "./src/app/update-modal/update-modal.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/update-modal/update-modal.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-actions{\r\n    justify-content: flex-end;\r\n}\r\n\r\ndiv .mat-form-field {\r\n        width:100%;\r\n}\r\n     \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLW1vZGFsL3VwZGF0ZS1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO1FBQ1EsVUFBVTtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1tb2RhbC91cGRhdGUtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWFjdGlvbnN7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5kaXYgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG59XHJcbiAgICAgIl19 */");
            /***/ 
        }),
        /***/ "./src/app/update-modal/update-modal.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/update-modal/update-modal.component.ts ***!
          \********************************************************/
        /*! exports provided: UpdateModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateModalComponent", function () { return UpdateModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employee */ "./src/app/employee.ts");
            /* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
            /* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../map-modal/map-modal.component */ "./src/app/map-modal/map-modal.component.ts");
            var UpdateModalComponent = /** @class */ (function () {
                function UpdateModalComponent(employeeService, dialogRef, data, dialog) {
                    this.employeeService = employeeService;
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.dialog = dialog;
                    //locations: string[] = ['North', 'South', 'West', 'East'];
                    //selectedLocation : string;
                    this.floors = ['0', '1', '2', '3', '4'];
                }
                UpdateModalComponent.prototype.ngOnInit = function () {
                    this.toUpdateEmployee = this.data.employee;
                    this.selectedFloor = this.toUpdateEmployee.floor;
                    console.log(this.toUpdateEmployee);
                    this.updateEmployeeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.toUpdateEmployee.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        floor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.toUpdateEmployee.floor),
                        location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.toUpdateEmployee.location, disabled: true }),
                        xCoord: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.toUpdateEmployee.xCoord, disabled: true }),
                        yCoord: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.toUpdateEmployee.yCoord, disabled: true }),
                    });
                };
                Object.defineProperty(UpdateModalComponent.prototype, "name", {
                    get: function () {
                        return this.updateEmployeeForm.get('name');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UpdateModalComponent.prototype, "floor", {
                    get: function () {
                        return this.updateEmployeeForm.get('floor');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UpdateModalComponent.prototype, "location", {
                    get: function () {
                        return this.updateEmployeeForm.get('location');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UpdateModalComponent.prototype, "xCoord", {
                    get: function () {
                        return this.updateEmployeeForm.get('xCoord');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UpdateModalComponent.prototype, "yCoord", {
                    get: function () {
                        return this.updateEmployeeForm.get('yCoord');
                    },
                    enumerable: true,
                    configurable: true
                });
                UpdateModalComponent.prototype.onFloorChange = function () {
                    console.log(this.selectedFloor);
                    //if(this.selectedFloor == undefined) {
                    this.updateEmployeeForm.get('location').reset();
                    this.updateEmployeeForm.get('xCoord').reset();
                    this.updateEmployeeForm.get('yCoord').reset();
                    //}
                };
                UpdateModalComponent.prototype.updateEmployee = function () {
                    this.employee = new _employee__WEBPACK_IMPORTED_MODULE_4__["Employee"]();
                    this.employee.name = this.name.value;
                    this.employee.floor = this.floor.value;
                    this.employee.location = this.location.value;
                    this.employee.xCoord = this.xCoord.value;
                    this.employee.yCoord = this.yCoord.value;
                    console.log(this.updateEmployeeForm.value);
                    this.employeeService.updateEmployee(this.toUpdateEmployee.id, this.employee).subscribe(function (data) {
                        console.log(data);
                        //this.updateEvent.emit();
                        //this.initSongsList();
                    }, function (error) { return console.log(error); });
                };
                UpdateModalComponent.prototype.resetUpdate = function () {
                    this.updateEmployeeForm.reset();
                };
                UpdateModalComponent.prototype.openMap = function () {
                    var _this_1 = this;
                    var dialogRef = this.dialog.open(_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_6__["MapModalComponent"], {
                        autoFocus: false,
                        data: { editing: true, employee: this.toUpdateEmployee, floor: this.floor.value, location: this.location.value }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result != undefined) {
                            var ret = result;
                            console.log(ret);
                            _this_1.location.patchValue(ret[0]);
                            _this_1.xCoord.patchValue(ret[1]);
                            _this_1.yCoord.patchValue(ret[2]);
                        }
                    });
                };
                return UpdateModalComponent;
            }());
            UpdateModalComponent.ctorParameters = function () { return [
                { type: _employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
            ]; };
            UpdateModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-update-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-modal/update-modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-modal.component.css */ "./src/app/update-modal/update-modal.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], UpdateModalComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\do\OneDrive - adesso Group\angular-workplace\eLocation\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map