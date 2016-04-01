var myApp=angular.module('myApp',[])
.directive('customTags',function(){
        return{
            restrict:'ECAM',
            templateUrl:'other/code2.html',
            //compile:function(){
            //    console.log(1);
            //},
            replace:true,
            controller: function ($scope) {
                setTimeout(function () {
                    $scope.$apply(function () {
                        $scope.name ="Timeout called!";
                    });
                }, 2000);
               /* $scope.$apply(function () {
                    $scope.name ="Timeout called!";
                });*/
            }
        }
})
    //这里的templateUrl关联到script标签里的id
.directive('customTags2',function(){
        return{
            restrict:'ECAM',
            templateUrl:'templateUrl2',
            //compile:function(){
            //    console.log(1);
            //},
            replace:true
        }
})
.controller('firstController',['$scope',function($scope){
        $scope.name='outer';
}]);