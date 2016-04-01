//第一个参数是自定义的模块名，第二个参数：需要依赖于哪些模块，第三个参数是：配置文件(function里面的参数是$provide这个是固定的，表示)
//这里是angular.module先启动，然后是mpApp.controller后启动
var myApp=angular.module('myApp',[],function($provide){
    //自定义服务CustomService,可以链接到下面的myApp.controller的参数注入
    $provide.provider('CustomService',function(){
        console.log(this);
        //$provide下的provider方法是实现自动依赖注入机制，注入机制通过调用一个provider的$get()方法，把得到的对象作为参数进行相关调用
        this.$get=function(){
            return{
                message:'CustomService Message'
            }
        }
    });
    //自定义服务CustomService2,可以链接到下面的myApp.controller的参数注入
    $provide.provider('CustomService2',function(){
        console.log(this);
        this.$get=function(){
            return{
                message:'CustomService2 Message'
            }
        }
    });

});

//这个是全局函数，不属于myApp，如果 在ng-app的引号里加上ng-app="myApp",然后在myApp.controller('firstController'，function($scope){...})

myApp.controller('firstController',function($scope,CustomService,CustomService2){
    $scope.name='z3';
    console.log(CustomService);
    console.log(CustomService2);
});

//function firstController($scope){
//    $scope.name='z3';
//}
////var firstController=function($scope){
//    $scope.name='x3';
//}