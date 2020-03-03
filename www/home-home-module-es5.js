function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n\n<ion-content>\n\n\n  <ion-slides [options]=\"slideOptions\" pager=\"true\" #slide >\n    <ion-slide *ngFor=\"let slide of slides\">\n      <div class=\"slide-img-padding\">\n        <img [src]=\"slide.img\">\n      </div>\n      <div class=\"slide-tittle\">\n        <h3 [innerHTML]=\"slide.tittle\"></h3>\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n  <ion-footer class=\"ion-no-border\">\n    <ion-grid fixed >\n      <ion-row>\n       \n\n        <ion-col size=\"10\" offset=\"1\" >\n          <ion-button color=\"primary\" \n          expand=\"full\" fill=\"clear\" (click)=\"goLogin()\"> ENTRAR</ion-button >\n        </ion-col>\n\n        <ion-col size=\"10\" offset=\"1\" >\n          <ion-button color=\"primary\" \n          expand=\"full\" shape=\"round\" mode=\"ios\" class=\"btn-main\" (click)=\"goSigIn()\"> REGISTRATE</ion-button >\n        </ion-col>\n        \n      </ion-row>\n    </ion-grid>\n  </ion-footer>\n\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --overflow: hidden;\n}\n\nion-slide {\n  padding-top: 40px;\n  display: block;\n}\n\nion-slides {\n  --bullet-background:grey;\n  --bullet-background-active:#8890B2;\n}\n\nion-footer {\n  position: fixed;\n  bottom: 30px;\n}\n\n.slide-img-padding {\n  padding: 40px;\n}\n\nimg {\n  max-height: 5000px;\n}\n\n.slide-tittle {\n  font-size: 30px;\n  font-weight: lighter;\n  margin-bottom: 60px;\n  color: gray;\n}\n\n.btn-main {\n  height: 60px;\n}\n\n@media screen and (max-height: 775px) {\n  img {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyL0RvY3VtZW50cy9EZW51bWVyaXNBcHBzL3RyaWJ1T3JnYW5pY2Evc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUVDLGlCQUFBO0VBQ0EsY0FBQTtBQ0REOztBREtBO0VBRUEsd0JBQUE7RUFDQSxrQ0FBQTtBQ0hBOztBRE1BO0VBRUksZUFBQTtFQUNBLFlBQUE7QUNKSjs7QURPQTtFQUVJLGFBQUE7QUNMSjs7QURRQTtFQUNHLGtCQUFBO0FDTEg7O0FEUUE7RUFFSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNOSjs7QURTQTtFQUVDLFlBQUE7QUNQRDs7QURXQTtFQUVJO0lBQ0ksVUFBQTtFQ1ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudCB7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tc2xpZGVcbntcbiBwYWRkaW5nLXRvcDogNDBweDtcbiBkaXNwbGF5OiBibG9jaztcbiBcbn1cblxuaW9uLXNsaWRlc1xue1xuLS1idWxsZXQtYmFja2dyb3VuZDpncmV5O1xuLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6Izg4OTBCMjtcbn1cblxuaW9uLWZvb3Rlclxue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDMwcHg7XG59XG5cbi5zbGlkZS1pbWctcGFkZGluZ1xue1xuICAgIHBhZGRpbmc6IDQwcHg7XG59XG5cbmltZyB7XG4gICBtYXgtaGVpZ2h0OiA1MDAwcHg7XG59XG5cbi5zbGlkZS10aXR0bGVcbntcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuLmJ0bi1tYWluXG57XG4gaGVpZ2h0OiA2MHB4O1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0Ojc3NXB4KVxue1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tc2xpZGUge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOmdyZXk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiM4ODkwQjI7XG59XG5cbmlvbi1mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzBweDtcbn1cblxuLnNsaWRlLWltZy1wYWRkaW5nIHtcbiAgcGFkZGluZzogNDBweDtcbn1cblxuaW1nIHtcbiAgbWF4LWhlaWdodDogNTAwMHB4O1xufVxuXG4uc2xpZGUtdGl0dGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5idG4tbWFpbiB7XG4gIGhlaWdodDogNjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc3NXB4KSB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(ruter) {
        _classCallCheck(this, HomePage);

        this.ruter = ruter; //https://www.youtube.com/watch?v=ECKXIzhiuwE

        this.slides = [{
          img: 'assets/img/yoga.svg',
          tittle: 'Mantente en armonía'
        }, {
          img: 'assets/img/aptitud.svg',
          tittle: 'Plan de ejercicio semanal'
        }, {
          img: 'assets/img/cuidado.svg',
          tittle: 'Tu salud no tiene precio'
        }];
        this.slideOptions = {
          initialSlide: 0,
          speed: 1000,
          autoplay: {
            disableOnInteraction: false
          }
        };
      }

      _createClass(HomePage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.slide.startAutoplay();
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.slide.stopAutoplay();
        }
      }, {
        key: "goSigIn",
        value: function goSigIn() {
          // this.ruter.navigate(['registro',this.data]);
          this.ruter.navigate(['sig-in']);
        }
      }, {
        key: "goLogin",
        value: function goLogin() {
          this.ruter.navigate(['login']);
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slide', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], HomePage.prototype, "slide", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map