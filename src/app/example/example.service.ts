import * as angular from 'angular';

// angular.module('myApp')
//   .service('serviceId', () => {
//     return new TestService();
//   });

export class TestService {
  square(val1: number) {
    return val1 * val1;
  }
}

export function JSServiceID() {
  this.square = function (a) {
    return a * a;
  };
}
