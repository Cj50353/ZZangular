/**
 * Created by taozhizhi on 2016/1/5.
 */
var firstController=function($scope){

    $scope.list=[
        {text : "reach", key : "reach", checked : false,disabled:true},
        {text : "results", key : "total_actions", checked : false,disabled:false},
        {text : "cost", key : "cost", checked : false,disabled:false}
    ];
    $scope.selectAll= function () {
       /* for(var i = 0, item; item = $scope.list[i++];){
            if(item.disabled !== null || item.disabled !== undefined || item.disabled !== ''){
                if(item.disabled!=true){
                    item.checked=true;
                }
            }
        }*/
        $scope.list[1].checked=true;
    };
    $scope.unselectAll= function () {
        for(var i = 0, item; item = $scope.list[i++];){
            if(item.disabled !== null || item.disabled !== undefined || item.disabled !== ''){
                if(item.disabled!=true) {
                    item.checked = !item.checked;
                }
            }
        }
    };
    $scope.$watch('list',function (oldValue,newValue) {
        if(oldValue!=newValue){
        }
        console.log($scope.list);
    },true);

//ng-checked 不会改变list的值.
    $scope.test= function (data) {
        console.log($scope.list);
    };
    $scope.jim=123;
//ng-model ng-model
    $scope.$watch('jim',function (oldValue,newValue) {
        if(oldValue!=newValue){
            console.log($scope.jim);
        }
    },false);
};

