

//service 只能返回对象，自定义 一个productData方法
//service的productData自定义方法的值就是return返回的数组，在下面的controller调用时把productData这个值做为controller的参数
angular.module('product',[]).service('productData',function(){
    return [
        {
            id:111,
            name:'iphone',
            price:5400
        },
        {
            id:222,
            name:'iphone5',
            price:3400
        },
        {
            id:333,
            name:'iphone6',
            price:6400
        },
        {
            id:444,
            name:'iphone7',
            price:7400
        },
        {
            id:555,
            name:'iphone8',
            price:8400
        }
    ]
})
.controller('productController',function($scope,productData){
    $scope.productData2=productData;
});
