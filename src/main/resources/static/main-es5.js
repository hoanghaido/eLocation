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
            /* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Add Employee</h2>\n  <form *ngIf=\"!isAdded\" [formGroup]=\"addEmployeeForm\"  (ngSubmit)=\"addEmployee()\">  \n          \n      <mat-dialog-content style=\"display:flex;flex-direction: column;\">  \n        <mat-form-field>\n          <mat-label>Name</mat-label>\n          <input matInput formControlName=\"name\" required> \n        </mat-form-field>   \n\n        <mat-checkbox formControlName=\"flexWorkplace\" labelPosition=\"before\" (click)=\"onFlexWorkplaceChange()\">Flex Workplace</mat-checkbox> \n\n        <!--<mat-form-field>\n          <mat-label>Location</mat-label>\n          <mat-select [(value)]=\"selectedLocation\" formControlName=\"location\" >\n            <mat-option>N/A</mat-option>\n            <mat-option *ngFor=\"let workplace of workplaces\" [value]=\"workplace.location\" [disabled]=\"workplace.occupied || (workplace.flex != flexWorkplace.value)\" (click)=\"setWorkplace(workplace)\">\n              {{(workplace.flex != flexWorkplace.value) ? workplace.location + \" (not allowed)\" : (workplace.occupied ? workplace.location + \" (occupied)\" : workplace.location)}}\n            </mat-option>\n          </mat-select> \n        </mat-form-field>  -->\n        \n        <mat-form-field>\n          <mat-label>Location Search</mat-label>\n          <input type=\"text\" matInput formControlName=\"locationGroup\" [matAutocomplete]=\"auto\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option (click)=\"setWorkplace(null)\">N/A</mat-option>\n            <mat-optgroup *ngFor=\"let group of locationGroupOptions | async\" [label]=\"'Floor ' + group.floor\">\n              <mat-option *ngFor=\"let workplace of group.workplaces\" [value]=\"workplace.location\"\n                [disabled]=\"isOccupied(workplace) || !isCompatible(workplace)\" (click)=\"setWorkplace(workplace)\">\n                {{!isCompatible(workplace) ? \n                  workplace.location + \" (not allowed)\" : \n                  (isOccupied(workplace) ? workplace.location + \" (occupied)\" : workplace.location)}}\n              </mat-option>\n            </mat-optgroup>\n          </mat-autocomplete>\n        </mat-form-field>\n        \n        <button [disabled]=\"!locationExists\" type=\"button\" style=\"margin-bottom:10px\" mat-raised-button (click)=\"openMap()\">Open Map</button>\n      <!--\n        <mat-form-field>\n          <mat-label>Location</mat-label>\n          <input matInput formControlName=\"location\" >\n        </mat-form-field>  \n\n        <mat-form-field>\n          <mat-label>X</mat-label>   \n          <input matInput formControlName=\"xCoord\" > \n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Y</mat-label>   \n          <input matInput formControlName=\"yCoord\" > \n        </mat-form-field>-->\n        \n      </mat-dialog-content>   \n\n      <mat-dialog-actions>  \n        \n        <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"addEmployeeForm.invalid || !locationValid\">Add</button>  \n        <button mat-raised-button  [mat-dialog-close] (click)=\"resetAdd()\" >Cancel</button>  \n      </mat-dialog-actions>  \n  </form>      \n\n  <div *ngIf=\"isAdded\">  \n    <mat-dialog-content>  \n      Employee Added!  \n    </mat-dialog-content>  \n      <mat-dialog-actions>  \n      <button (click)=\"resetAdd()\" mat-raised-button color=\"primary\">Add More Employees</button>\n      <button mat-raised-button  [mat-dialog-close] (click)=\"resetAdd()\">Close</button> \n    </mat-dialog-actions>  \n  </div> \n\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" >\n    <router-outlet></router-outlet>\n</div>\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login-modal/login-modal.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login-modal/login-modal.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Login</h2>\n\n<form *ngIf=\"!isLoggedIn\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n<mat-dialog-content style=\"display:flex;flex-direction: column;\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Username</mat-label>\n      <input matInput formControlName=\"username\" required> \n      <mat-error *ngIf=\"loginForm.get('username').invalid\">Username can not be blank</mat-error>\n    </mat-form-field>  \n    <br>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Password</mat-label>\n      <input matInput [type]=\"'password'\" formControlName=\"password\" required> \n      <mat-error *ngIf=\"loginForm.get('password').invalid\">Password can not be blank</mat-error>\n    </mat-form-field> \n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\" isLoginFailed\">\n        Login failed.\n    </div>\n</mat-dialog-content> \n<mat-dialog-actions>  \n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"loginForm.invalid\">Login</button>  \n</mat-dialog-actions>  \n    \n</form>\n\n<div  *ngIf=\"isLoggedIn\">\n  <mat-dialog-content>\n    <h5>Logged in as {{ username }}.</h5>\n  </mat-dialog-content>\n  <mat-dialog-actions>  \n    <button mat-raised-button color=\"primary\" (click)=\"close()\">Close</button>\n    <!--<button mat-raised-button color=\"primary\" (click)=\"reloadPage()\">To Employees List</button>-->\n  </mat-dialog-actions>  \n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    \n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/profile/profile.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/profile/profile.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <h3 mat-dialog-title>\n        <strong>{{ employee.name }}</strong>'s Profile \n    </h3>\n\n    <mat-dialog-content style=\"display:flex;flex-direction: column;\">\n      <p>\n        <strong>Email:</strong>\n        {{ user.email }}\n      </p>\n      <strong>Roles:</strong>\n      <ul>\n        <li *ngFor=\"let role of user.roles\">\n          {{ role }}\n        </li>\n      </ul>\n      <p>\n        <strong>Location:</strong>\n        Floor {{employee.workplace.floor}} {{employee.workplace.location}}\n        <button class='btn btn-link' *ngIf=\"employee.workplace\" (click)=\"openMap()\" >\n          <span class=\"glyphicon glyphicon-map-marker\"></span>\n        </button>\n        <button class='btn btn-link' (click)=\"openUpdate()\">\n          <span class=\"glyphicon glyphicon-edit\"></span>\n        </button>\n      </p>\n    </mat-dialog-content>\n\n    <mat-dialog-actions>     \n      <button mat-raised-button [mat-dialog-close]=\"true\">Close</button> \n    </mat-dialog-actions>  \n     \n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/register/register.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/register/register.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n    <div class=\"card card-container\">\n      <img\n        id=\"profile-img\"\n        src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\"\n        class=\"profile-img-card\"\n      />\n      <form\n        *ngIf=\"!isSuccessful\"\n        name=\"form\"\n        (ngSubmit)=\"f.form.valid && onSubmit()\"\n        #f=\"ngForm\"\n        novalidate\n      >\n        <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            name=\"username\"\n            [(ngModel)]=\"form.username\"\n            required\n            minlength=\"3\"\n            maxlength=\"20\"\n            #username=\"ngModel\"\n          />\n          <div class=\"alert-danger\" *ngIf=\"f.submitted && username.invalid\">\n            <div *ngIf=\"username.errors.required\">Username is required</div>\n            <div *ngIf=\"username.errors.minlength\">\n              Username must be at least 3 characters\n            </div>\n            <div *ngIf=\"username.errors.maxlength\">\n              Username must be at most 20 characters\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input\n            type=\"email\"\n            class=\"form-control\"\n            name=\"email\"\n            [(ngModel)]=\"form.email\"\n            required\n            email\n            #email=\"ngModel\"\n          />\n          <div class=\"alert-danger\" *ngIf=\"f.submitted && email.invalid\">\n            <div *ngIf=\"email.errors.required\">Email is required</div>\n            <div *ngIf=\"email.errors.email\">\n              Email must be a valid email address\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            name=\"password\"\n            [(ngModel)]=\"form.password\"\n            required\n            minlength=\"6\"\n            #password=\"ngModel\"\n          />\n          <div class=\"alert-danger\" *ngIf=\"f.submitted && password.invalid\">\n            <div *ngIf=\"password.errors.required\">Password is required</div>\n            <div *ngIf=\"password.errors.minlength\">\n              Password must be at least 6 characters\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-primary btn-block\">Sign Up</button>\n        </div>\n  \n        <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\n          Signup failed!<br />{{ errorMessage }}\n        </div>\n      </form>\n  \n      <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\n        Your registration is successful!\n      </div>\n    </div>\n  </div>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("\n<mat-toolbar>\n\n    <span>\n        <button *ngIf=\"isAdmin\" class='btn btn-link' [disabled]=\"selecting\" (click)=\"openAdd()\" title=\"Add an employee\">\n            <fa-icon [icon]=\"['fas', 'plus']\"></fa-icon>\n        </button>\n        <button *ngIf=\"isAdmin\" class='btn btn-link' style='margin-left: 10px;'[disabled]=\"selecting\" (click)=\"toggleSelect()\" title=\"Select and delete employees\">\n            <fa-icon [icon]=\"['far', 'trash-alt']\"></fa-icon>\n        </button>\n        <!--<button class='btn btn-link' style='margin-left: 10px;'[disabled]=\"selecting\" (click)=\"openMap()\" title=\"Open map\">\n            <fa-icon [icon]=\"['fas', 'map-marked']\"></fa-icon>\n        </button>-->\n    </span>\n\n    <span>\n        <button mat-raised-button color=\"warn\" *ngIf=\"selecting\" (click)=\"openDeleteConfirm()\">Confirm</button>\n        <button mat-raised-button style='margin-left: 10px;' *ngIf=\"selecting\" (click)=\"toggleSelect()\">Cancel</button>\n    </span>\n\n    <span class=\"col-sm-12\"></span>\n\n    <span>\n        <button class='btn btn-link' [disabled]=\"selecting\" (click)=\"openProfile()\" title=\"Open Profile\">\n            <fa-icon [icon]=\"['fas', 'user']\"></fa-icon>\n        </button>\n        <button class='btn btn-link' [disabled]=\"selecting\" (click)=\"logout()\" title=\"Log Out\">\n            <fa-icon [icon]=\"['fas', 'sign-out-alt']\"></fa-icon>\n        </button>\n    </span>\n\n</mat-toolbar>\n\n<div class=\"row\" style=\"margin:10px 5px 0 0\">\n    \n    <span class=\"col-sm-4\" >\n        <mat-form-field id=\"filter\" >\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n    </span>\n    <span class=\"col-sm-8\">\n    </span>\n</div>\n\n<!--<mat-paginator [pageSizeOptions]=\"getPageSizeOptions()\" showFirstLastButtons></mat-paginator>-->\n<div style=\"height:100%; overflow:auto;\">\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"table table-hover mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"select\">\n        <th mat-header-cell *matHeaderCellDef [hidden]=\"!selecting\">\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                      >\n            </mat-checkbox>\n        </th>\n        <td mat-cell *matCellDef=\"let row\"  [hidden]=\"!selecting\">\n            <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? select(row) : null\"\n                        [checked]=\"selection.isSelected(row)\"\n                      >\n            </mat-checkbox>\n        </td>\n    </ng-container>   \n\n    <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Id</th>\n            <td mat-cell *matCellDef=\"let employee\">{{employee.id}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n        <td mat-cell *matCellDef=\"let employee\" >{{employee.name}}\n        </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"flex\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Flex Workplace </th>\n        <td mat-cell *matCellDef=\"let employee\" >{{employee.flexWorkplace}}\n        </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"floor\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Floor </th>\n        <td mat-cell *matCellDef=\"let employee\"> {{employee.workplace ? employee.workplace.floor : 'N/A'}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"location\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Location </th>\n        <td mat-cell *matCellDef=\"let employee\"> {{employee.workplace ? employee.workplace.location : 'N/A'}} \n            <div class=\"btn-group btn-group-lg\" *ngIf=\"!selecting\">\n                <button class='btn btn-link' (click)=\"openMap(employee.workplace)\" *ngIf=\"employee.workplace\">\n                    <span class=\"glyphicon glyphicon-map-marker\"></span>\n                </button>\n                <button *ngIf=\"isAdmin || isMod\" class='btn btn-link' (click)=\"setToUpdateEmployee(employee.id)\">\n                    <span class=\"glyphicon glyphicon-edit\"></span>\n                </button>\n                <button *ngIf=\"isAdmin\" class='btn btn-link' (click)=\"deleteOne(employee)\">\n                    <span class=\"glyphicon glyphicon-trash\"></span>\n                </button>\n            </div> \n        </td>\n    </ng-container>\n    \n    <tr mat-header-row *matHeaderRowDef=\"getColumnsToDisplay(); sticky:true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: getColumnsToDisplay()\" ></tr>\n  </table>\n</div>\n\n\n\n<!--<app-add-modal (addEvent)=\"afterAdd()\"></app-add-modal>\n\n<app-confirm-delete-modal [length]=\"selection.selected.length\" (confirmEvent)=\"deleteSelected()\"></app-confirm-delete-modal>-->\n\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<b>Building map: Floor {{floor}}  </b>\n<mat-dialog-content>\n    <div id=\"mapContainer\" >\n      <maphilight [config]=\"config\" id=\"0f\" *ngIf=\"enabledImg=='0'\" >   \n      <img  src=\"assets/0f.jpg\" alt=\".../\">\n      <map>\n        <area id=\"north0\" alt=\"North0\" title=\"North0\" coords=\"1,114,1,2,423,2,425,268,275,269,277,116\" shape=\"poly\">\n        <area id=\"south0\" alt=\"South0\" title=\"South0\" coords=\"3,498,2,385,276,383,277,271,424,271,424,498\" shape=\"poly\">\n        <area id=\"west0\" alt=\"West0\" title=\"West0\" coords=\"573,555,570,171,841,171,843,307,697,306,697,555\" shape=\"poly\">\n        <area id=\"east0\" alt=\"East0\" title=\"East0\" coords=\"844,173,845,307,992,309,992,555,1117,556,1117,171,845,172\" shape=\"poly\">\n      </map>\n      </maphilight>\n\n      <maphilight [config]=\"config\" id=\"1f\" *ngIf=\"enabledImg=='1'\">  \n      <img  src=\"assets/1f.jpg\" alt=\".../\">\n      <map>\n        <area id=\"north1\" alt=\"North1\" title=\"North1\" coords=\"1,114,1,2,423,2,425,268,275,269,277,116\" shape=\"poly\">\n        <area id=\"south1\" alt=\"South1\" title=\"South1\" coords=\"3,498,2,385,276,383,277,271,424,271,424,498\" shape=\"poly\">\n        <area id=\"west1\" alt=\"West1\" title=\"West1\" coords=\"573,555,570,171,841,171,843,307,697,306,697,555\" shape=\"poly\">\n        <area id=\"east1\" alt=\"East1\" title=\"East1\" coords=\"844,173,845,307,992,309,992,555,1117,556,1117,171,845,172\" shape=\"poly\">\n      </map>\n      </maphilight>\n\n      <maphilight [config]=\"config\" id=\"2f\" *ngIf=\"enabledImg=='2'\"> \n      <img  src=\"assets/2f.jpg\" alt=\".../\">\n      <map>\n        <area id=\"north2\" alt=\"North2\" title=\"North2\" coords=\"1,114,1,2,423,2,425,268,275,269,277,116\" shape=\"poly\">\n        <area id=\"south2\" alt=\"South2\" title=\"South2\" coords=\"3,498,2,385,276,383,277,271,424,271,424,498\" shape=\"poly\">\n        <area id=\"west2\" alt=\"West2\" title=\"West2\" coords=\"573,555,570,171,841,171,843,307,697,306,697,555\" shape=\"poly\">\n        <area id=\"east2\" alt=\"East2\" title=\"East2\" coords=\"844,173,845,307,992,309,992,555,1117,556,1117,171,845,172\" shape=\"poly\">\n      </map>\n      </maphilight>\n\n      <maphilight [config]=\"config\" id=\"3f\" *ngIf=\"enabledImg=='3'\"> \n      <img  src=\"assets/3f.jpg\" alt=\".../\">\n      <map>\n        <area id=\"north3\" alt=\"North3\" title=\"North3\" coords=\"1,114,1,2,423,2,425,268,275,269,277,116\" shape=\"poly\">\n        <area id=\"south3\" alt=\"South3\" title=\"South3\" coords=\"3,498,2,385,276,383,277,271,424,271,424,498\" shape=\"poly\">\n        <area id=\"west3\" alt=\"West3\" title=\"West3\" coords=\"573,555,570,171,841,171,843,307,697,306,697,555\" shape=\"poly\">\n        <area id=\"east3\" alt=\"East3\" title=\"East3\" coords=\"844,173,845,307,992,309,992,555,1117,556,1117,171,845,172\" shape=\"poly\">\n      </map>\n      </maphilight>\n\n      <maphilight [config]=\"config\" id=\"4f\" *ngIf=\"enabledImg=='4'\"> \n      <img  src=\"assets/4f.jpg\" alt=\".../\">\n      <map>\n        <area id=\"north4\" alt=\"North4\" title=\"North4\" coords=\"1,114,1,2,423,2,425,268,275,269,277,116\" shape=\"poly\">\n        <area id=\"south4\" alt=\"South4\" title=\"South4\" coords=\"3,498,2,385,276,383,277,271,424,271,424,498\" shape=\"poly\">\n        <area id=\"west4\" alt=\"West4\" title=\"West4\" coords=\"573,555,570,171,841,171,843,307,697,306,697,555\" shape=\"poly\">\n        <area id=\"east4\" alt=\"East4\" title=\"East4\" coords=\"844,173,845,307,992,309,992,555,1117,556,1117,171,845,172\" shape=\"poly\">\n      </map>\n      </maphilight>\n\n    </div>\n</mat-dialog-content>   \n\n<mat-dialog-actions>   \n  <button mat-raised-button (click)=\"close()\">Close</button>  \n</mat-dialog-actions>  \n \n\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("\n<h2 mat-dialog-title>Update Employee</h2>\n  <form [formGroup]=\"updateEmployeeForm\"  (ngSubmit)=\"updateEmployee()\">  \n          \n        <mat-dialog-content style=\"display:flex;flex-direction: column;\">    \n          <mat-form-field>\n            <mat-label>Name</mat-label>\n            <input matInput formControlName=\"name\" required> \n          </mat-form-field>    \n\n          <mat-checkbox formControlName=\"flexWorkplace\" labelPosition=\"before\" (click)=\"onFlexWorkplaceChange()\">Flex Workplace</mat-checkbox>\n\n          <mat-form-field >\n            <mat-label>Location</mat-label>\n            <mat-select [(value)]=\"selectedLocation\" formControlName=\"location\" >\n              <mat-option>N/A</mat-option>\n              <mat-option *ngFor=\"let workplace of workplaces\" [value]=\"workplace.location\" [disabled]=\"workplace.occupied || (workplace.flex != flexWorkplace.value)\" (click)=\"setWorkplace(workplace)\">\n                {{(workplace.flex != flexWorkplace.value) ? workplace.location + \" (not allowed)\" : (workplace.occupied ? workplace.location + \" (occupied)\" : workplace.location)}}\n              </mat-option>\n            </mat-select> \n          </mat-form-field>  \n          \n          <button [disabled]=\"selectedLocation == undefined || selectedLocation == ''\" type=\"button\" style=\"margin-bottom:10px\" mat-raised-button (click)=\"openMap()\">Open Map</button>\n          \n          <!--\n          <mat-form-field>\n            <mat-label>Location</mat-label>\n            <input matInput formControlName=\"location\" >\n          </mat-form-field> \n\n          <mat-form-field>\n            <mat-label>X</mat-label>   \n            <input matInput formControlName=\"xCoord\" > \n          </mat-form-field>\n  \n          <mat-form-field>\n            <mat-label>Y</mat-label>   \n            <input matInput formControlName=\"yCoord\" > \n          </mat-form-field>-->\n        </mat-dialog-content>  \n\n        <mat-dialog-actions *ngIf=\"!isUpdateed\">  \n          <button type=\"submit\" [mat-dialog-close]=\"true\" mat-raised-button color=\"primary\" [disabled]=\"updateEmployeeForm.invalid\">Update</button>  \n          <button mat-raised-button  [mat-dialog-close]=\"false\" (click)=\"resetUpdate()\">Cancel</button>  \n        </mat-dialog-actions>  \n  </form>      \n\n\n");
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
            /* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
            /* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../map-modal/map-modal.component */ "./src/app/map-modal/map-modal.component.ts");
            /* harmony import */ var _employee_payload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../employee-payload */ "./src/app/employee-payload.ts");
            /* harmony import */ var _workplace_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../workplace.service */ "./src/app/workplace.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AddModalComponent = /** @class */ (function () {
                function AddModalComponent(employeeService, workplaceService, dialogRef, dialog) {
                    this.employeeService = employeeService;
                    this.workplaceService = workplaceService;
                    this.dialogRef = dialogRef;
                    this.dialog = dialog;
                    this.locationGroups = new Array();
                    this.locationValid = false;
                    this.locationExists = false;
                }
                AddModalComponent.prototype.ngOnInit = function () {
                    var _this_1 = this;
                    this.initForm();
                    this.workplaceService.getWorkplacesList().subscribe(function (data) {
                        _this_1.workplaces = data;
                        _this_1.initLocationGroups();
                        _this_1.locationGroupOptions = _this_1.locationGroup.valueChanges
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (value) { return _this_1.filterGroup(value); }));
                        //console.log(this.locationGroups);
                        //console.log(this.locations);
                    });
                };
                AddModalComponent.prototype.initForm = function () {
                    this.addEmployeeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                        flexWorkplace: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        //location : new FormControl(''),
                        locationGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                    });
                };
                Object.defineProperty(AddModalComponent.prototype, "name", {
                    get: function () {
                        return this.addEmployeeForm.get('name');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddModalComponent.prototype, "flexWorkplace", {
                    get: function () {
                        return this.addEmployeeForm.get('flexWorkplace');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddModalComponent.prototype, "locationGroup", {
                    /*
                    get location() {
                      return this.addEmployeeForm.get('location');
                    }*/
                    get: function () {
                        return this.addEmployeeForm.get('locationGroup');
                    },
                    enumerable: true,
                    configurable: true
                });
                AddModalComponent.prototype.onFlexWorkplaceChange = function () {
                    this.locationGroup.reset();
                    this.locationGroup.patchValue('');
                };
                AddModalComponent.prototype.isOccupied = function (workplace) {
                    return workplace.occupied == true;
                };
                AddModalComponent.prototype.isCompatible = function (workplace) {
                    return workplace.flex == this.flexWorkplace.value;
                };
                //only choosing one of the enabled options enables the add button
                AddModalComponent.prototype.setWorkplace = function (workplace) {
                    console.log(workplace);
                    //choosing N/A
                    if (workplace == null) {
                        this.locationValid = true;
                        this.locationGroup.reset();
                        this.locationGroup.patchValue('');
                        return;
                    }
                    //clicking and choosing an enabled option
                    if (!this.isOccupied(workplace) && this.isCompatible(workplace)) {
                        this.locationValid = true;
                        this.locationExists = true;
                        this.workplaceMap = workplace;
                    }
                };
                AddModalComponent.prototype.initLocationGroups = function () {
                    var _this_1 = this;
                    var groupExists = false;
                    this.workplaces.forEach(function (workplace) {
                        groupExists = false;
                        _this_1.locationGroups.forEach(function (locationGroup) {
                            if (workplace.floor == locationGroup.floor) {
                                locationGroup.workplaces.push(workplace);
                                groupExists = true;
                            }
                        });
                        if (!groupExists) {
                            _this_1.locationGroups.push({ floor: workplace.floor, workplaces: [workplace] });
                        }
                    });
                };
                AddModalComponent.prototype.filterFn = function (list, value) {
                    return list.filter(function (workplace) { return workplace.location.toLowerCase().includes(value.toLowerCase()); });
                };
                AddModalComponent.prototype.filterGroup = function (value) {
                    var _this_1 = this;
                    //map is only enabled when clicking on one of the options (except N/A), typing will disable map
                    this.locationExists = false;
                    //after typing and if the input is not empty, add button will be disabled
                    //add button is only enabled after clicking on one of the options or if the input is empty
                    if (value) {
                        this.locationValid = false;
                        return this.locationGroups
                            .map(function (locationGroup) { return ({ floor: locationGroup.floor, workplaces: _this_1.filterFn(locationGroup.workplaces, value) }); })
                            .filter(function (locationGroup) { return locationGroup.workplaces.length > 0; });
                    }
                    //leaving the input empty enables the add button (location value is '')
                    this.locationValid = true;
                    return this.locationGroups;
                };
                AddModalComponent.prototype.addEmployee = function () {
                    this.employeePayload = new _employee_payload__WEBPACK_IMPORTED_MODULE_6__["EmployeePayload"]();
                    this.employeePayload.name = this.name.value;
                    this.employeePayload.flexWorkplace = this.flexWorkplace.value;
                    this.employeePayload.workplaceLocation = this.locationGroup.value;
                    console.log(this.employeePayload);
                    this.employeeService.addEmployee(this.employeePayload).subscribe(function (data) {
                        console.log(data);
                    }, function (error) { return console.log(error); });
                    this.isAdded = true;
                };
                AddModalComponent.prototype.resetAdd = function () {
                    this.isAdded = false;
                    this.initForm();
                };
                AddModalComponent.prototype.openMap = function () {
                    var dialogRef = this.dialog.open(_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__["MapModalComponent"], {
                        data: { workplace: this.workplaceMap }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log(result);
                    });
                };
                return AddModalComponent;
            }());
            AddModalComponent.ctorParameters = function () { return [
                { type: _employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] },
                { type: _workplace_service__WEBPACK_IMPORTED_MODULE_7__["WorkplaceService"] },
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
            /* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
            /* harmony import */ var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/register/register.component */ "./src/app/authentication/register/register.component.ts");
            /* harmony import */ var _authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/auth-guard.service */ "./src/app/authentication/auth-guard.service.ts");
            var routes = [
                { path: '', pathMatch: 'full', redirectTo: 'list' },
                { path: 'list', component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeListComponent"], canActivate: [_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
                { path: 'login', component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                { path: 'register', component: _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] }
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
            /* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/fesm2015/zxing-ngx-scanner.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
            /* harmony import */ var _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-modal/add-modal.component */ "./src/app/add-modal/add-modal.component.ts");
            /* harmony import */ var _confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./confirm-delete-modal/confirm-delete-modal.component */ "./src/app/confirm-delete-modal/confirm-delete-modal.component.ts");
            /* harmony import */ var _update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./update-modal/update-modal.component */ "./src/app/update-modal/update-modal.component.ts");
            /* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./map-modal/map-modal.component */ "./src/app/map-modal/map-modal.component.ts");
            /* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
            /* harmony import */ var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./authentication/register/register.component */ "./src/app/authentication/register/register.component.ts");
            /* harmony import */ var _authentication_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./authentication/profile/profile.component */ "./src/app/authentication/profile/profile.component.ts");
            /* harmony import */ var _authentication_auth_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./authentication/auth-interceptor */ "./src/app/authentication/auth-interceptor.ts");
            /* harmony import */ var _authentication_login_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./authentication/login/login-modal/login-modal.component */ "./src/app/authentication/login/login-modal/login-modal.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule(library) {
                    // Add multiple icons to the library
                    library.addIcons(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faTrashAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUser"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faSignOutAlt"]);
                }
                return AppModule;
            }());
            AppModule.ctorParameters = function () { return [
                { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconLibrary"] }
            ]; };
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                        _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeListComponent"],
                        _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_15__["AddModalComponent"],
                        _confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmDeleteModalComponent"],
                        _update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_17__["UpdateModalComponent"],
                        _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_18__["MapModalComponent"],
                        _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                        _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                        _authentication_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                        _authentication_login_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_23__["LoginModalComponent"]
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
                        ng_maphilight__WEBPACK_IMPORTED_MODULE_11__["MaphilightModule"],
                        _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_12__["ZXingScannerModule"]
                    ],
                    entryComponents: [
                        _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_15__["AddModalComponent"],
                        _update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_17__["UpdateModalComponent"],
                        _confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmDeleteModalComponent"],
                        _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_18__["MapModalComponent"],
                        _authentication_login_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_23__["LoginModalComponent"],
                        _authentication_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"]
                    ],
                    providers: [_authentication_auth_interceptor__WEBPACK_IMPORTED_MODULE_22__["authInterceptorProviders"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/authentication/auth-guard.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/authentication/auth-guard.service.ts ***!
          \******************************************************/
        /*! exports provided: AuthGuardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () { return AuthGuardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/authentication/token-storage.service.ts");
            var AuthGuardService = /** @class */ (function () {
                function AuthGuardService(tokenStorageService, router) {
                    this.tokenStorageService = tokenStorageService;
                    this.router = router;
                }
                AuthGuardService.prototype.canActivate = function () {
                    if (!this.tokenStorageService.getToken()) {
                        this.router.navigate(['login']);
                        return false;
                    }
                    return true;
                };
                return AuthGuardService;
            }());
            AuthGuardService.ctorParameters = function () { return [
                { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuardService);
            /***/ 
        }),
        /***/ "./src/app/authentication/auth-interceptor.ts": 
        /*!****************************************************!*\
          !*** ./src/app/authentication/auth-interceptor.ts ***!
          \****************************************************/
        /*! exports provided: AuthInterceptor, authInterceptorProviders */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () { return AuthInterceptor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function () { return authInterceptorProviders; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/authentication/token-storage.service.ts");
            var TOKEN_HEADER_KEY = 'Authorization';
            var AuthInterceptor = /** @class */ (function () {
                function AuthInterceptor(token) {
                    this.token = token;
                }
                AuthInterceptor.prototype.intercept = function (req, next) {
                    var authReq = req;
                    var token = this.token.getToken();
                    if (token != null) {
                        authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
                    }
                    return next.handle(authReq);
                };
                return AuthInterceptor;
            }());
            AuthInterceptor.ctorParameters = function () { return [
                { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
            ]; };
            AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
            ], AuthInterceptor);
            var authInterceptorProviders = [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
            ];
            /***/ 
        }),
        /***/ "./src/app/authentication/auth.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/authentication/auth.service.ts ***!
          \************************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AUTH_API = 'http://localhost:8080/api/auth/';
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
            var AuthService = /** @class */ (function () {
                function AuthService(http) {
                    this.http = http;
                }
                AuthService.prototype.login = function (credentials) {
                    return this.http.post(AUTH_API + 'signin', {
                        username: credentials.username,
                        password: credentials.password
                    }, httpOptions);
                };
                AuthService.prototype.register = function (user) {
                    return this.http.post(AUTH_API + 'signup', {
                        username: user.username,
                        email: user.email,
                        password: user.password
                    }, httpOptions);
                };
                AuthService.prototype.getCurrentUser = function () {
                    return this.http.get(AUTH_API + 'currentUser', httpOptions);
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/authentication/login/login-modal/login-modal.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/authentication/login/login-modal/login-modal.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-actions{\r\n    justify-content: flex-end;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4tbW9kYWwvbG9naW4tbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLW1vZGFsL2xvZ2luLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1hY3Rpb25ze1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/authentication/login/login-modal/login-modal.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/authentication/login/login-modal/login-modal.component.ts ***!
          \***************************************************************************/
        /*! exports provided: LoginModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function () { return LoginModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.service */ "./src/app/authentication/auth.service.ts");
            /* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../token-storage.service */ "./src/app/authentication/token-storage.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var LoginModalComponent = /** @class */ (function () {
                function LoginModalComponent(authService, tokenStorage, router, dialogRef, dialog) {
                    this.authService = authService;
                    this.tokenStorage = tokenStorage;
                    this.router = router;
                    this.dialogRef = dialogRef;
                    this.dialog = dialog;
                    this.isLoggedIn = false;
                    this.isLoginFailed = false;
                    this.username = "";
                }
                LoginModalComponent.prototype.ngOnInit = function () {
                    if (this.tokenStorage.getToken()) {
                        this.isLoggedIn = true;
                        this.username = this.tokenStorage.getUser().username;
                    }
                    else {
                        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
                            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])
                        });
                    }
                };
                LoginModalComponent.prototype.onSubmit = function () {
                    var _this_1 = this;
                    var credentials = {};
                    credentials.username = this.loginForm.get('username').value;
                    credentials.password = this.loginForm.get('password').value;
                    this.authService.login(credentials).subscribe(function (data) {
                        _this_1.tokenStorage.saveToken(data.accessToken);
                        _this_1.tokenStorage.saveUser(data.userDetails);
                        _this_1.isLoginFailed = false;
                        _this_1.isLoggedIn = true;
                        _this_1.username = _this_1.tokenStorage.getUser().username;
                        _this_1.reloadPage();
                    }, function (err) {
                        _this_1.isLoginFailed = true;
                    });
                };
                LoginModalComponent.prototype.reloadPage = function () {
                    var _this_1 = this;
                    this.router.navigate(['/list']);
                    setTimeout(function () {
                        _this_1.close();
                    }, 2000);
                };
                LoginModalComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                return LoginModalComponent;
            }());
            LoginModalComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            LoginModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login-modal/login-modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-modal.component.css */ "./src/app/authentication/login/login-modal/login-modal.component.css")).default]
                })
            ], LoginModalComponent);
            /***/ 
        }),
        /***/ "./src/app/authentication/login/login.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/authentication/login/login.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div .mat-form-field {\r\n    width:100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/authentication/login/login.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/authentication/login/login.component.ts ***!
          \*********************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-modal/login-modal.component */ "./src/app/authentication/login/login-modal/login-modal.component.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(dialog) {
                    this.dialog = dialog;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.openLoginModal();
                };
                LoginComponent.prototype.openLoginModal = function () {
                    var dialogRef = this.dialog.open(_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_3__["LoginModalComponent"], {
                        minWidth: '30vw',
                        minHeight: '20vh',
                        disableClose: true,
                        autoFocus: true
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        //console.log(result);
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/authentication/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/authentication/profile/profile.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/authentication/profile/profile.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-dialog-actions{\r\n    justify-content: flex-end;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWFjdGlvbnN7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/authentication/profile/profile.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/authentication/profile/profile.component.ts ***!
          \*************************************************************/
        /*! exports provided: ProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () { return ProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var src_app_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/map-modal/map-modal.component */ "./src/app/map-modal/map-modal.component.ts");
            /* harmony import */ var src_app_update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/update-modal/update-modal.component */ "./src/app/update-modal/update-modal.component.ts");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            var ProfileComponent = /** @class */ (function () {
                function ProfileComponent(dialogRef, data, dialog, snackBar) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.dialog = dialog;
                    this.snackBar = snackBar;
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    this.user = this.data.user;
                    this.employee = this.user.employee;
                };
                ProfileComponent.prototype.openMap = function () {
                    var dialogRef = this.dialog.open(src_app_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__["MapModalComponent"], {
                        data: { workplace: this.employee.workplace }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        //console.log(result);
                    });
                };
                ProfileComponent.prototype.openUpdate = function () {
                    var _this_1 = this;
                    this.dialogRef.close();
                    var dialogRef = this.dialog.open(src_app_update_modal_update_modal_component__WEBPACK_IMPORTED_MODULE_4__["UpdateModalComponent"], {
                        minWidth: '30vw',
                        minHeight: '30vh',
                        data: { employee: this.employee, nameDisabled: true }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result) {
                            window.location.reload();
                            _this_1.openSnackBar("Employee successfully updated", "Close");
                        }
                    });
                };
                ProfileComponent.prototype.openSnackBar = function (message, action) {
                    this.snackBar.open(message, action, {
                        duration: 2000,
                    });
                };
                return ProfileComponent;
            }());
            ProfileComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
            ]; };
            ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/profile/profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/authentication/profile/profile.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], ProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/authentication/register/register.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/authentication/register/register.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/authentication/register/register.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/authentication/register/register.component.ts ***!
          \***************************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/authentication/auth.service.ts");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(authService) {
                    this.authService = authService;
                    this.form = {};
                    this.isSuccessful = false;
                    this.isSignUpFailed = false;
                    this.errorMessage = '';
                }
                RegisterComponent.prototype.ngOnInit = function () {
                };
                RegisterComponent.prototype.onSubmit = function () {
                    var _this_1 = this;
                    this.authService.register(this.form).subscribe(function (data) {
                        console.log(data);
                        _this_1.isSuccessful = true;
                        _this_1.isSignUpFailed = false;
                    }, function (err) {
                        _this_1.errorMessage = err.error.message;
                        _this_1.isSignUpFailed = true;
                    });
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/authentication/register/register.component.css")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/authentication/token-storage.service.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/authentication/token-storage.service.ts ***!
          \*********************************************************/
        /*! exports provided: TokenStorageService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () { return TokenStorageService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TOKEN_KEY = 'auth-token';
            var USER_KEY = 'auth-user';
            var TokenStorageService = /** @class */ (function () {
                function TokenStorageService() {
                }
                TokenStorageService.prototype.signOut = function () {
                    window.sessionStorage.clear();
                };
                TokenStorageService.prototype.saveToken = function (token) {
                    window.sessionStorage.removeItem(TOKEN_KEY);
                    window.sessionStorage.setItem(TOKEN_KEY, token);
                };
                TokenStorageService.prototype.getToken = function () {
                    return sessionStorage.getItem(TOKEN_KEY);
                };
                TokenStorageService.prototype.saveUser = function (user) {
                    window.sessionStorage.removeItem(USER_KEY);
                    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
                };
                TokenStorageService.prototype.getUser = function () {
                    return JSON.parse(sessionStorage.getItem(USER_KEY));
                };
                return TokenStorageService;
            }());
            TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TokenStorageService);
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
            /* harmony import */ var _authentication_token_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../authentication/token-storage.service */ "./src/app/authentication/token-storage.service.ts");
            /* harmony import */ var _authentication_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../authentication/profile/profile.component */ "./src/app/authentication/profile/profile.component.ts");
            /* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var EmployeeListComponent = /** @class */ (function () {
                function EmployeeListComponent(employeeService, snackBar, dialog, tokenStorageService, authService, router) {
                    this.employeeService = employeeService;
                    this.snackBar = snackBar;
                    this.dialog = dialog;
                    this.tokenStorageService = tokenStorageService;
                    this.authService = authService;
                    this.router = router;
                    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
                    this.selecting = false;
                    this.isMod = false;
                    this.isAdmin = false;
                }
                EmployeeListComponent.prototype.ngOnInit = function () {
                    this.initEmployeesList();
                    this.currentUser = this.tokenStorageService.getUser();
                    this.roles = this.currentUser.roles;
                    this.isAdmin = this.roles.includes('ROLE_ADMIN');
                    this.isMod = this.roles.includes('ROLE_MODERATOR');
                };
                EmployeeListComponent.prototype.initEmployeesList = function () {
                    var _this_1 = this;
                    this.employeeService.getEmployeesList().subscribe(function (data) {
                        _this_1.employeesList = data;
                        console.log(_this_1.employeesList);
                        _this_1.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this_1.employeesList);
                        _this_1.dataSource.sort = _this_1.sort;
                    });
                    this.authService.getCurrentUser().subscribe(function (data) {
                        _this_1.tokenStorageService.saveUser(data);
                        _this_1.currentUser = _this_1.tokenStorageService.getUser();
                    });
                };
                EmployeeListComponent.prototype.getColumnsToDisplay = function () {
                    return ['select', 'id', 'name', 'flex', 'floor', 'location'];
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
                EmployeeListComponent.prototype.openMap = function (workplace) {
                    var _this_1 = this;
                    var dialogRef = this.dialog.open(_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_11__["MapModalComponent"], {
                        data: { workplace: workplace }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        //console.log(result);
                        _this_1.initEmployeesList();
                    });
                };
                EmployeeListComponent.prototype.openProfile = function () {
                    var _this_1 = this;
                    var dialogRef = this.dialog.open(_authentication_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], {
                        autoFocus: false,
                        data: { user: this.currentUser }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        //console.log(result);
                        _this_1.initEmployeesList();
                    });
                };
                EmployeeListComponent.prototype.logout = function () {
                    this.tokenStorageService.signOut();
                    this.router.navigate['/login'];
                    window.location.reload();
                };
                return EmployeeListComponent;
            }());
            EmployeeListComponent.ctorParameters = function () { return [
                { type: _employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"] },
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: _authentication_token_storage_service__WEBPACK_IMPORTED_MODULE_12__["TokenStorageService"] },
                { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] }
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
        /***/ "./src/app/employee-payload.ts": 
        /*!*************************************!*\
          !*** ./src/app/employee-payload.ts ***!
          \*************************************/
        /*! exports provided: EmployeePayload */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePayload", function () { return EmployeePayload; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var EmployeePayload = /** @class */ (function () {
                function EmployeePayload() {
                }
                return EmployeePayload;
            }());
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
                    this.baseUrl = 'http://localhost:8080/api/emp/';
                }
                EmployeeService.prototype.getEmployeesList = function () {
                    return this.http.get("" + this.baseUrl + 'employeesList');
                };
                EmployeeService.prototype.addEmployee = function (employeePayload) {
                    return this.http.post("" + this.baseUrl + 'add', employeePayload);
                };
                EmployeeService.prototype.deleteEmployee = function (id) {
                    return this.http.delete(this.baseUrl + "delete/" + id, { responseType: 'text' });
                };
                EmployeeService.prototype.getEmployee = function (id) {
                    return this.http.get(this.baseUrl + "employee/" + id);
                };
                EmployeeService.prototype.updateEmployee = function (id, employeePayload) {
                    return this.http.post("" + this.baseUrl + 'update', employeePayload);
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
                    this.clickedCoords = new Array();
                }
                MapModalComponent.prototype.ngOnInit = function () {
                    this.workplace = this.data.workplace;
                    this.floor = this.workplace.floor;
                    this.xCoord = parseFloat(this.workplace.xCoord);
                    this.yCoord = parseFloat(this.workplace.yCoord);
                    switch (this.floor) {
                        case '0':
                            this.enabledImg = '0';
                            break;
                        case '1':
                            this.enabledImg = '1';
                            break;
                        case '2':
                            this.enabledImg = '2';
                            break;
                        case '3':
                            this.enabledImg = '3';
                            break;
                        case '4':
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
                                $('#mapContainer').append($('<div class="marker glyphicon glyphicon-map-marker "></div>').css({
                                    position: 'absolute',
                                    top: (_this.yCoord * height) + 'px',
                                    left: (_this.xCoord * width) + 'px',
                                }));
                            }
                        }, 200);
                        //show the coordinates of the mouse click as percentages of the image
                        $('map').click(function (e) {
                            var offset = $('#mapContainer').offset();
                            _this.xCoord = (e.pageX - offset.left) / width;
                            _this.yCoord = (e.pageY - offset.top) / height;
                            _this.clickedCoords[0] = _this.xCoord.toString();
                            _this.clickedCoords[1] = _this.yCoord.toString();
                            console.log(_this.clickedCoords);
                        });
                    });
                };
                MapModalComponent.prototype.close = function () {
                    this.dialogRef.close();
                    //console.log(this.result);
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
            /* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
            /* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../map-modal/map-modal.component */ "./src/app/map-modal/map-modal.component.ts");
            /* harmony import */ var _employee_payload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../employee-payload */ "./src/app/employee-payload.ts");
            /* harmony import */ var _workplace_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../workplace.service */ "./src/app/workplace.service.ts");
            var UpdateModalComponent = /** @class */ (function () {
                function UpdateModalComponent(employeeService, dialogRef, data, dialog, workplaceService) {
                    this.employeeService = employeeService;
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.dialog = dialog;
                    this.workplaceService = workplaceService;
                }
                UpdateModalComponent.prototype.ngOnInit = function () {
                    var _this_1 = this;
                    this.toUpdateEmployee = this.data.employee;
                    //this.selectedLocation = this.toUpdateEmployee.workplace.location;
                    console.log(this.toUpdateEmployee);
                    var loc;
                    if (this.toUpdateEmployee.workplace) {
                        loc = this.toUpdateEmployee.workplace.location;
                        this.workplaceMap = this.toUpdateEmployee.workplace;
                    }
                    else {
                        loc = '';
                    }
                    this.selectedLocation = loc;
                    this.updateEmployeeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.toUpdateEmployee.name, disabled: this.data.nameDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]),
                        flexWorkplace: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.toUpdateEmployee.flexWorkplace),
                        location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](loc)
                    });
                    this.workplaceService.getWorkplacesList().subscribe(function (data) {
                        _this_1.workplaces = data;
                    });
                };
                Object.defineProperty(UpdateModalComponent.prototype, "name", {
                    get: function () {
                        return this.updateEmployeeForm.get('name');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UpdateModalComponent.prototype, "flexWorkplace", {
                    get: function () {
                        return this.updateEmployeeForm.get('flexWorkplace');
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
                UpdateModalComponent.prototype.onFlexWorkplaceChange = function () {
                    this.location.reset();
                };
                UpdateModalComponent.prototype.setWorkplace = function (workplace) {
                    console.log(workplace);
                    this.workplaceMap = workplace;
                };
                UpdateModalComponent.prototype.updateEmployee = function () {
                    this.employeePayload = new _employee_payload__WEBPACK_IMPORTED_MODULE_6__["EmployeePayload"]();
                    this.employeePayload.employeeId = this.toUpdateEmployee.id;
                    this.employeePayload.name = this.name.value;
                    this.employeePayload.flexWorkplace = this.flexWorkplace.value;
                    this.employeePayload.workplaceLocation = this.location.value;
                    console.log(this.employeePayload);
                    this.employeeService.updateEmployee(this.toUpdateEmployee.id, this.employeePayload).subscribe(function (data) {
                        console.log(data);
                        //this.updateEvent.emit();
                        //this.initSongsList();
                    }, function (error) { return console.log(error); });
                };
                UpdateModalComponent.prototype.resetUpdate = function () {
                    this.updateEmployeeForm.reset();
                };
                UpdateModalComponent.prototype.openMap = function () {
                    var dialogRef = this.dialog.open(_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__["MapModalComponent"], {
                        data: { workplace: this.workplaceMap }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log(result);
                    });
                };
                return UpdateModalComponent;
            }());
            UpdateModalComponent.ctorParameters = function () { return [
                { type: _employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _workplace_service__WEBPACK_IMPORTED_MODULE_7__["WorkplaceService"] }
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
        /***/ "./src/app/workplace.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/workplace.service.ts ***!
          \**************************************/
        /*! exports provided: WorkplaceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkplaceService", function () { return WorkplaceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var WorkplaceService = /** @class */ (function () {
                function WorkplaceService(http) {
                    this.http = http;
                    this.baseUrl = 'http://localhost:8080/api/workplace/';
                }
                WorkplaceService.prototype.getWorkplacesList = function () {
                    return this.http.get("" + this.baseUrl + 'list');
                };
                return WorkplaceService;
            }());
            WorkplaceService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            WorkplaceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], WorkplaceService);
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