import * as angular from 'angular';

// angular.module('myApp')
//     .component('home', {
//         template: 'blabla',
//         controller: function HomeComponentController() {
//             this.welcome = 'Hello this is the landingpage';
//         }
//     });

export const JSHomeComponent = {
  template: 'This is the AngularJS HomeComponent',
  controller: () => {
    const welcome: String = 'This is the landing page';
  }
};

angular.module('myApp').component('home', JSHomeComponent);


