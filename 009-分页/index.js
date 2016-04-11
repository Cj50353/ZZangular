angular.module('app', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider.
                when('/table/:pn', {
                    controller: 'tableController',
                    templateUrl: 'table.html'
                }).
                otherwise({
                    redirectTo: '/table/#1'
                });
            //$locationProvider.html5Mode(true);
        }])
    .controller('appCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    }])
    .controller('tableController', ['$scope', '$rootScope','$http',function ($scope,$rootScope,$http) {
       var dat2a= $http.get('package.json').then(function (data) {
           return data.data.data;
       })
        dat2a.then(function (dat2a) {
            $scope.subUsers=dat2a;
            console.log($scope.subUsers);
        })
    }]);
