/*适用标签:a input select textarea(官方api上说使用的标签是这些，我没明白a和select复制有啥子用。另外，我换个div实际上也能触发copy事件。一般常用的就是input和textarea。)
 *触发条件:复制。鼠标右键复制和快捷键Ctrl+C都会触发。
 *注意事项:
 * 引发事件的按键
 * 非字符键不会引发 KeyPress 事件，但非字符键却可以引发 KeyDown 和 KeyUp 事件。
 *
 * 事件引发的时间
 * KeyDown 和 KeyPress 事件在按下键时发生，KeyUp 事件在释放键时发生。
 *
 * 事件发生的顺序
 * KeyDown -> KeyPress -> KeyUp。如果按一个键很久才松开，发生的事件为：KeyDown -> KeyPress -> KeyDown -> KeyPress -> KeyDown -> KeyPress -> ... -> KeyUp。
 *
 * KeyDown触发后，不一定触发KeyUp，当KeyDown 按下后，拖动鼠标，那么将不会触发KeyUp事件。
 * KeyPress主要用来捕获数字(注意：包括Shift+数字的符号)、字母（注意：包括大小写）、小键盘等除了F1-12、SHIFT、Alt、Ctrl、Insert、Home、PgUp、Delete、End、PgDn、ScrollLock、Pause、NumLock、{菜单键}、{开始键}和方向键外的ANSI字符。
 * KeyDown 和KeyUp 通常可以捕获键盘除了PrScrn所有按键(这里不讨论特殊键盘的特殊键）。
 * KeyPress 只能捕获单个字符。
 * KeyDown 和KeyUp 可以捕获组合键。
 * KeyPress 可以捕获单个字符的大小写。
 * KeyDown和KeyUp 对于单个字符捕获的KeyValue 都是一个值，也就是不能判断单个字符的大小写。
 * KeyPress 不区分小键盘和主键盘的数字字符。
 * KeyDown 和KeyUp 区分小键盘和主键盘的数字字符。
 * 其中PrScrn 按键KeyPress、KeyDown和KeyUp 都不能捕获。
 * */
var LearnCtrl= function ($scope) {
    $scope.keydown = function ($event) {
        alert($event.keyCode);
    };
    $scope.keyup = function ($event) {
        alert($event.keyCode);
    };
    $scope.keypress = function ($event) {
        alert($event.keyCode);
    }
}