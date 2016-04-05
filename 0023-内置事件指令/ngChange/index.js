/*适用标签:input
 *触发条件:model更新
 *注意事项:输入框的内容改变并不代表model的值更新。按我的理解，一般当两个状态互相切换时，model值会更新。两个状态我称之为合法状态和不合法状态。
 *不合法的状态：输入的内容不符合type类型，如email类型。输入的内容不符合校验条件，如ngMinlength。不合法的状态下，model会被更新成undefined。
 *合法的状态：输入的内容是符合类型和校验条件的。
 * */
var LearnCtrl= function ($scope) {
    $scope.tet='121113';
    $scope.change1 = function () {
        alert('change');
    }
}