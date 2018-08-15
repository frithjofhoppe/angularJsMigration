import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {downgradeComponent, downgradeInjectable, setAngularJSGlobal, UpgradeModule} from '@angular/upgrade/static';
import * as angular from 'angular';
import {HomeDirective, JSHomeComponent} from './home.directive';
import {JSOverviewComponent, OverviewDirective} from './overview.directive';
import {JSServiceID, TestService} from './example/example.service';
import { TestComponent } from './test/test.component';
import {FormsModule} from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import {CalculationService} from './calculation.service';


angular.module('myApp', [])
  .component('home', JSHomeComponent)
  .component('overview', JSOverviewComponent)
  .service('serviceId', JSServiceID)
  .directive('appRoot', downgradeComponent({component: AppComponent}))
  .directive('calculator', downgradeComponent({component: CalculatorComponent}))
  .factory('calculating', downgradeInjectable(CalculationService));

export const testServiceProvider = {
  provide: TestService,
  useFactory: testServiceFactory,
  deps: ['$injector']
}

export function testServiceFactory(i: any) {
  return i.get('serviceId');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeDirective,
    OverviewDirective,
    TestComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UpgradeModule
  ],
  providers: [
    testServiceProvider,
    CalculationService
  ],
  entryComponents: [AppComponent, CalculatorComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
  }

  ngDoBootstrap() {
    setAngularJSGlobal(angular);
    this.upgrade.bootstrap(document.body, ['myApp'], {strictDi: true});
  }
}
