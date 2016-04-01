
//第三种方式：这种是比较推荐的方法，性能高，改变一个地方可以控制绑定多个控制器
angular.module('myApp',[]).factory('Data',function(){
    console.log('先于下面的controller(firstController)执行 第一步');
    return {
        message:'共享数据'
    };
})
.controller('firstController',function($scope,Data){
        //这里必须在function参数里传入Data才可执行上面的factory,也就是说这里只有用到了Data才能去调用上面的factory(Data)
    console.log('后于上面的factory(Data)执行 第二步，可以把上面的Data对象值传到这里使用');
    $scope.Date=Data;
    $scope.today=new Date();
});