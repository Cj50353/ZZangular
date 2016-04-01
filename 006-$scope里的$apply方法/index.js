/**
 * Created by taozhizhi on 2016/1/5.
 */
var firstController=function($scope){
    //$scope是一个指向应用model的object,也是表达式的执行上下文
    //scope被放置于一个类似应用的DOM结构的层次结构中
    //$scope是个作用域
    //申明一个Model
    $scope.date=new Date();
    console.log($scope);

    //$apply  angular使用的是脏检查看变量是否变了
    //不会脏检查所有的对象，当对象被绑定到html中（{{date}），这个对象添加为检查对象（watcher）
    //不会脏检查所有的属性，同样当属性被绑定后，这个属性会被列为检查的属性
    //当angular程序初始化时，会将绑定的对象 属性添加为监听对象（watcher）,也就是说一个对象绑定了N个属性，就会添加N个watcher
    //以ng-开头的都会触发脏检查

    //$apply把信息直接传给$digest,中间还有$eval门卫把关，如果$apply带的表达式不合法，$eval会把错误交
    //$exceptionHandler,合法才触发digest,所以才安全
    setInterval(function(){
        $scope.$apply(function(){
            $scope.date=new Date();    //每1s就会触发一次脏检查
        })
    },1000);

}

