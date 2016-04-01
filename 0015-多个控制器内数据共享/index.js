//第一种方式：这种是可以把第一个控制器的name赋值给第二个控制器的name ,改变第一个控制器的name不会改变第二个控制器的name
/*
 angular.module('myApp',[]).controller('firstController',function($scope){
    $scope.name='z3';
 }).controller('secondController',function($scope){
     //就是当前secondController的兄弟的name
     //$scope.$$prevSibling就是当前这个控制器的上一个兄弟控制器
     //$scope.$$nextSibling就是当前这个控制器的下一个兄弟控制器
     //console.log($scope.$$prevSibling.name)
     $scope.name=$scope.$$prevSibling.name;
 })
 */

//第二种方式：这种是可以把第一个控制器的name赋值给第二个控制器的name,改变第一个控制器的name可以改变第二个控制器的name
//因为改变的是date这个引用值，整个date这个索引值改变，就会触发脏检查,/但是性能低
/*
angular.module('myApp',[]).controller('firstController',function($scope){
     $scope.date={
         name:'z3'
     };
}).controller('secondController',function($scope){
     $scope.date=$scope.$$prevSibling.date;
});
*/

//第三种方式：这种是比较推荐的方法，性能高，改变一个地方可以控制绑定多个控制器
angular.module('myApp',[]).factory('Date',function(){
    return {
        message:'共享数据'
    };
}).controller('firstController',function($scope,Date){
    $scope.Date=Date;
}).controller('secondController',function($scope,Date){
    $scope.Date=Date;
});
