/**
 * Created by taozhizhi on 2016/1/5.
 */
var firstController=function($scope){
    //$scope是个作用域
    //申明一个Model
    $scope.name='z3';
    console.log($scope);

    $scope.$watch('name',function(newValue,oldValue){
        if(newValue===oldValue){return;}
        console.log('执行1');
    })
}
var secondController=function($scope){

    $scope.name='x4';
    setTimeout(function () {
        $scope.$apply(function () {
            $scope.name='x5';
        })
    },2000)
    
    $scope.$watch('name',function(newValue,oldValue){
        if(newValue===oldValue){return;}
        console.log('执行2');
    })
    console.log($scope);
}
angular.module('app',[])
    .controller('firstController',firstController)
    .controller('secondController',secondController);
