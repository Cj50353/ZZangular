//第一种隐式依赖注入 不推荐用这种方法
//angular.module('myApp',[],function(){
//
//})

//第二种显式依赖注入
angular.module('myApp',[],['$filterProvider','$provide','$controllerProvider',function(a,b,c){
    console.log(a)
    console.log(b)
    console.log(c)
}])
//第一种方法
//.factory('CustomService',function($window){
//        //也可以使用console.log(window);但是ng推荐合适$window
//        console.log($window);  //这里输出的是window下的对象
//})
//第二种方法
.factory('CustomService',['$window',function(a){
        //也可以使用console.log(window);但是ng推荐合适$window
        console.log(a);  //这里输出的是window下的对象
        return a;
}])
//第一种方法隐式的依赖注入
//这样做的不好之处是js在后期会做压缩 ，会把$scope变量会变成a或b简单的变量，那就会产生angular不会把数据依赖注入进来
//.controller('firstController',function($scope,CustomService){
//    //如果想在这里用到上面的CustomService就必须在上面的factory里return a;
//    console.log(CustomService);
// })
//第二种方法显式的依赖注入    （推荐使用）
.controller('firstController',['$scope','CustomService',function(a,b){
        //如果想在这里用到上面的CustomService就必须在上面的factory里return a;
        console.log(a)
        console.log(b)  //可以把上面factory的CustomService作为参数，依赖注入后，就可以用b访问CustomService
       //console.log(CustomService);
}])

//显式的依赖注入    （推荐使用）
//解决方法 如果在数组中第一参数是$scope，那么在function里的a就可以接收$scope
.controller('secondController',['$scope','$filter',function(a,b){
        //这里的a可以相当于$scope使用，这里的b可以相当于$filter使用
      console.log(a);
      console.log(b);
}])

//这个属于ng-app下的函数，但是不属于myApp的管理，但是也是可以调到$scope对象
//第一种隐式注入
//function threeController($scope){
//    console.log($scope);
//}

//第二种显式注入方法 （推荐使用,方便代码发布）
function threeController(a){
    console.log(a);
}
threeController.$inject=['$scope'];    //$inject只能用于这种函数注入

