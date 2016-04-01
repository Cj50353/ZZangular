/**
 * Created by taozhizhi on 2016/1/5.
 */
var cartController=function($scope){
    var _this=this;
    //console.log(this);  //this是Constructor{}
    $scope.cart=[
        {
            id:1000,
            name:'iphone5s',
            quantity:2,
            price:4300
        },
        {
            id:2000,
            name:'iphone5',
            quantity:3,
            price:3300
        },
        {
            id:3000,
            name:'mac',
            quantity:4,
            price:14300
        },
        {
            id:4000,
            name:'ipad',
            quantity:5,
            price:6300
        }
    ];
    $scope.totalPrice=function(){
        var total=0;
        angular.forEach($scope.cart,function(item){
            total+=item.quantity*item.price;
        });
        return total;
    }

    $scope.totalQuanlity=function(){
        var totalnum=0;
        angular.forEach($scope.cart,function(item){
            totalnum+=parseInt(item.quantity);
        });
        return totalnum;
    };

    //在每一个移除按钮都绑定了ng-click事件，执行完后都会触发一次脏检查，所以总价格与总问数量都 是动态变化的，
    //数据是双项绑定的
    $scope.remove=function(id){
        //console.log(id);
        console.log(this);
        var index=_this.findIndex(id);
        //如果找不到，
        if(index!==-1){
            $scope.cart.splice(index,1);  //从第index位删除一位
        }
    }
    //为每个产品添加一个数量
    $scope.add=function(id){
        var index=_this.findIndex(id);
        if(index!==-1){
            ++$scope.cart[index].quantity;
        }

    }
    //为每个产品添减少一个数量
    $scope.reduce=function(id){
        var index=_this.findIndex(id);
        if(index!==-1){
            var item=$scope.cart[index];
            if(item.quantity>1){
                --item.quantity;
            }else{
                var returnKey=confirm('从购物车内删除该产品');
                if(returnKey){
                    $scope.remove(id);
                }
            }
        }
    }

    //找到该元素的索引
    this.findIndex=function(id){
        var index=-1;
        //angular里的forEach里的value对应的是循环遍历的每一个元素，而key对应的是索引值
        angular.forEach($scope.cart,function(item,key){
            if(item.id===id){
                console.log(key)
                index=key;
                return;
            }
        });
        return index;
    }

    //监听,当绑定的cart发生改变时就会触发Swatch脏检查 (但是这里没有处理修改数量先删除再写数字时)，这里加上第三个参数true，说明监控的第一个参数是'cart'是个数组，所以改变数组里的属性，没有改变引用，$watch当作没有看到，所以加个true,表明只要有一点变化就会触发脏检查，但是性能比较低
    $scope.$watch('cart',function(newValue,oldValue){
        console.log(JSON.stringify(newValue));
        console.log(JSON.stringify(oldValue));
        angular.forEach(newValue,function(item,key){
            //console.log('quantity='+item.quantity)
            if(item.quantity<1){
                var returnKey=confirm('是否删除该产品');
                if(returnKey){
                    $scope.remove(item.id);
                }else{
                    item.quantity=oldValue[key].quantity;
                }
            }
        });
    },true);
}

