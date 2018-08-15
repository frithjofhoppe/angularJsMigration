'use strict';
angular.module('myApp')
    .component('overview', {
    template: '<h2>Overview</h2>\n' +
        '<p>{{$ctrl.welcomeText}}</p>\n' +
        '<ul>\n' +
        '    <li ng-repeat="entry in $ctrl.listContent">\n' +
        '        {{entry}}\n' +
        '    </li>\n' +
        '</ul>\n',
    controller: HomeComponentController
});
function HomeComponentController() {
    this.welcomeText = 'This is the list overview';
    this.listContent = ['one', 'two', 'three'];
}
//# sourceMappingURL=overview.component.js.map