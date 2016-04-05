/*适用标签:a input select textarea(官方api上说使用的标签是这些，我没明白a和select复制有啥子用。另外，我换个div实际上也能触发copy事件。一般常用的就是input和textarea。)
 *触发条件:复制。鼠标右键复制和快捷键Ctrl+C都会触发。
 *注意事项:
 *mouseover - 鼠标指针经过任何子元素都会触发绑定在父元素上的mouseover事件
 *mouseout - 鼠标指针离开任何子元素时都会触发父元素上的mouseout事件
 *mouseenter - 鼠标指针经过绑定的元素时触发事件，经过其子元素时，不会触发事件
 *mouseleave - 只有当鼠标离开绑定的元素时才会触发该事件
 *hover != mouseover+mouseout
 *hover == mouseenter + mouseleave
 * */
var LearnCtrl = function ($scope) {
    $scope.mousedown = function ($event) {
        alert($event.which);//左键1 中键2 右键3
    };
    $scope.mouseup = function ($event) {
        alert($event.which);
    };
    $scope.mouseenter = function () {
        alert('mouseenter');
    };
    $scope.mouseleave = function () {
        alert('mouseleave');
    };
    $scope.mousemove = function () {
        alert('mousemove');
    };
    $scope.mouseover = function () {
        alert('mouseover');
    }
}