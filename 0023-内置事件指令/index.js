var myApp=angular.module('myApp',[])
.controller('firstController',function($scope){
        $scope.status=false;
        $scope.changeStatus=function(event){
            //event.target是当前的事件的jq对象
            console.log(event.target);   //<button ng-click="changeStatus($event)">切换</button>
            $scope.status=!$scope.status;

            //】  angular.element实现了简单的jq方法，把当前的js元素转换了jq元素
            angular.element(event.target).html('当前状态：'+$scope.status);
        }
    })

