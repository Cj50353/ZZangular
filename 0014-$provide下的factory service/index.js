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

    //factory和service都是$provide下的快捷方法  可以用myApp.service(); 和myApp.factory()方法使用
   //自定义工厂 可以返回任意类型
    $provide.factory('CustomFactory',function(){
        return [1,2,3,4,5,6];
    });
    //自定义服务 必须返回对象，不可是字符串或是number或布尔,null undefined
    $provide.service('Customservice2',function(){
        return [12];
    });

});


//这个是全局函数，不属于myApp，如果 在ng-app的引号里加上ng-app="myApp",然后在myApp.controller('firstController'，function($scope){...})
myApp.controller('firstController',function($scope,CustomService,CustomFactory,Customservice2){
    $scope.name='z3';
    //console.log(CustomFactory);
    //console.log(CustomService);
    //console.log(Customservice2);
});


