/*适用标签:a input select textarea(官方api上说使用的标签是这些，我没明白a和select复制有啥子用。另外，我换个div实际上也能触发copy事件。一般常用的就是input和textarea。)
 *触发条件:复制,剪切,粘贴。鼠标右键和快捷键都会触发。
 * */
var LearnCtrl= function ($scope) {
    $scope.copy = function () {
        alert('copy');
    };
    $scope.cut = function () {
        alert('cut');
    };
    $scope.paste = function () {
        alert('paste');
    }
}