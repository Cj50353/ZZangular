/*适用标签:a input select textarea
*触发条件:失去/获得焦点
* */

angular.module('learnModule', [])

    .controller('LearnCtrl', function ($scope) {
        $scope.blur = function () {
            alert('blur');
        }
        $scope.focus= function () {
            alert('focus');
        }
    });




