

//第三种方式：这种是比较推荐的方法，性能高，改变一个地方可以控制绑定多个控制器
angular.module('myApp',[]).factory('Data',function(){
    return {
        message:'HEllO',
        city:[
            {
                name:'上海',
                py:'sh'
            },
            {
                name:'北京',
                py:'bj'
            },
            {
                name:'南京',
                py:'nj'
            },
            {
                name:'上京',
                py:'nj'
            }
        ]

    };
}).controller('firstController',function($scope,Data,$filter){
    console.log(Data.city)
    console.log($filter)
    $scope.date=Data;
    $scope.today=new Date;

    //使用过滤器
    var number=$filter('number')(3000);   //过滤一个number类型，number值为3000
    //console.log(number);

    var jsonString=$filter('json')($scope.date);
    //console.log(jsonString);

    var upString=$filter('uppercase')(Data.city[0].py);    //SH
    console.log(upString);

    $scope.checkName=function(obj){
        console.log(obj);
        if(obj.py.indexOf('h')===-1){   //如果不含有h,则return false,
            return false;
        }
        return true;  //如果含有h,则return true,
    }
});
