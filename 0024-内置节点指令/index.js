var myApp=angular.module('myApp',[])
.controller('firstController',function($scope){
    $scope.status=false;
    $scope.changeStatus=function(event){
        $scope.status=!$scope.status;
        angular.element(event.target).html('当前'+$scope.status);
    }

   $scope.defaultStyle={
       color:'blue',
       'margin-left':'100px'
   };
   $scope.src='http://www.phonegap100.com/data/pgapp/1446168519.png';
   $scope.href='http://baidu.com';
})

