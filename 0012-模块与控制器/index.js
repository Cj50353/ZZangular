//第一个参数是自定义的模块名，第二个参数：需要依赖于哪些模块，第三个参数是：配置文件
var myApp=angular.module('myApp',[]);

//这个是全局函数，不属于myApp，如果 在ng-app的引号里加上ng-app="myApp",然后在myApp.controller('firstController'，function($scope){...})

myApp.controller('firstController',function($scope){
    $scope.name='z3';
});

//function firstController($scope){
//    $scope.name='z3';
//}
////var firstController=function($scope){
//    $scope.name='x3';
//}