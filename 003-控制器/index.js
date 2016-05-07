/**
 * Created by taozhizhi on 2016/1/5.
 */
angular.module('app',[])
    .controller('firstController', function ($scope) {
        //$scope是个作用域
        //申明一个Model
        $scope.name='z3';
        $scope.age=20;
        $scope.fn= function () {
            $scope.age++;
        }
    })
/*
var firstController=function($scope){

}
*/
