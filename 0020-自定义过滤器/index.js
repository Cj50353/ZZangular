angular.module('myApp',[],function($filterProvider,$provide,$controllerProvider){
    $provide.service('Data',function(){
        return [
            {
                name:'z3',
                age:20,
                city:'sh'
            },
            {
                name:'z4',
                age:40,
                city:'bj'
            }
        ];
    });
    //自定义过滤器
    $filterProvider.register('filterAge',function(){
        //注意这里的语法是必须是return 一个function  obj返回的是一个上面的Data值
        return function(obj){
            console.log(obj);
            //return obj;
            var newObj=[];
            angular.forEach(obj,function(o){
                //o代表的obj里的每一个元素
                if(o.age>20){
                    newObj.push(o);
                }
            });
            return newObj;   //return newObj会把值传给filterAge
        }
    });
    //firstController函数连接到了html中的ng-controller,这里一定要与入$scope参数
    $controllerProvider.register('firstController',function($scope,Data){
            console.log(Data)
            $scope.data=Data;  //这里会把
    })
})
//过滤器的第2种方法
.filter('filterCity',function(){
        return function(obj){
            var newObj=[];
            angular.forEach(obj,function(o){
                //o代表的obj里的每一个元素
                if(o.city==='sh'){
                    newObj.push(o);
                }
            });
            return newObj;   //return newObj会把值传给filterAge
        }
})