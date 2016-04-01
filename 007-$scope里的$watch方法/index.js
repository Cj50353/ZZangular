/**
 * Created by taozhizhi on 2016/1/5.
 */
var firstController=function($scope){
    //$scope是一个指向应用model的object,也是表达式的执行上下文
    //scope被放置于一个类似应用的DOM结构的层次结构中
    //$scope是个作用域
    //申明一个Model
    $scope.name='z3';
    $scope.count=0;
    console.log($scope);

    //监听一个model(name),当一个model(name)每次改变时，都 会触发第2个函数
    //$watch有三个参数，第1个参数：监控对象，第2个参数：回调函数，第三个参数默认的是false,进行的监控叫做引用监控(意思就是监控对象的应用没有发生变化的时候就不算对象发生了变化,例如：items的属性发生了变化，只要items的引用没有发生变化，$watch就都当做没有看见)，如果第三个参数设置为true的时候，那么我们的监控叫做“全等监控”，此时的$watch的要求就是比较苛刻了，只要他监控的对象有一点点变化时，但是性能比较低
    $scope.$watch('name',function(newValue,oldValue){
        console.log(newValue,oldValue);
        ++$scope.count;
        if($scope.count>=20){
            $scope.name='大于20次'
        }

    },false);
    //$apply  angular使用的是脏检查看变量是否变了
    //不会脏检查所有的对象，当对象被绑定到html中（{{date}），这个对象添加为检查对象（watcher）
    //不会脏检查所有的属性，同样当属性被绑定后，这个属性会被列为检查的属性
    //当angular程序初始化时，会将绑定的对象 属性添加为监听对象（watcher）,也就是说一个对象绑定了N个属性，就会添加N个watcher
    //以ng-开头的都会触发脏检查

    //在digest执行进，如果watch观察的value与上次执行时不一样时，就会被触发


}

