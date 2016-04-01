var myApp=angular.module('myApp',[],['$compileProvider',function($compileProvider){
    console.log($compileProvider);
    $compileProvider.directive('customTags',function(){
        //restrict指令在模版中有4种风格，如果忽略restrict,默认为A
        //E:元素  <my-dir></my-dir>
        //C:样式类  <span class="my-dir:exp;"></span>
        //A 属性  <span my-dir="exp"></span>
        //M 注释  <!-- directive:my-dir exp-->
        //第一种如果是E风格，则如果和hmml的自定义的标签成功的话，使用template就会在该自定义的custom-tags标签内的内容替换成’<div>匹配成功</div>‘
        /*
        return{
            restrict:'E',
            template:'<div>匹配成功</div>'
        }
        */

        //第二种风格C，则如果在html定义的一个custom-tags类，在js中匹配成功，使用template就会在该有custom-tags类的div的内容替换成template的值
        /*return{
            restrict:'C',
            template:'<div>匹配成功</div>'
        }
         */
        //第三种风格A 直接在行间写custom-tags属性，在js中匹配成功，就会执行template语句
        /*
        return{
            restrict:'A',
            template:'<div>匹配成功</div>',
            compile:function(){
                console.log(1)
            }
        }
        */
        //第四种方法M 匹配注释里的custom-tags
        /*
        return{
            restrict:'M',
            template:'<div>匹配成功</div>',
            compile:function(){
                console.log(1);
            }
        }
        */

        //这种是混合写法  compile表示共执行了几次restrict
        //template是替换节点的内容 在原先的节点的内容将被替换，且template的值必须是有标签，否则报错，前提是replace:true
        //replace:true.则会把当前的节点元素替换，也就是没有了自定义的custom-tags标签，建议写true,如写false或不写则是只替换自定义标签里的内容
        return{
            restrict:'ECAM',
            template:'<p>匹配成功</p>',
            compile:function(){
                console.log(1);
            },
            replace:true
        }
    });
}])
//.directive('')
