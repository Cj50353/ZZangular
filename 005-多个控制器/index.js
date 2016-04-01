/**
 * Created by taozhizhi on 2016/1/5.
 */
var firstController=function($scope){
    //$scope是个作用域
    //申明一个Model
    $scope.name='z3';
    console.log($scope);

}

var secondController=function($scope){
    $scope.name='x4';
    console.log($scope);
}