/**
 * Created by cljin on 2016/3/25.
 */
angular.module('app',['ngCookies'])
    .service('svc', function ($cookieStore) {
        this.setPerson= function (person) {
            $cookieStore.put('person',person);
        };
        this.getPerson= function () {
            return $cookieStore.get('person');
        }
    })
    .controller('ctrl1', function ($scope,svc) {
        //初始化数值
        $scope.name='jim1';
        $scope.age='22';
        //使用事件改变数据
        $scope.setPerson= function () {
            var person={name:$scope.name,age:$scope.age};
            svc.setPerson(person)
        };
        $scope.getPerson= function () {
            var person=svc.getPerson('person');
            console.log(person);
            $scope.name=person['name'];
            $scope.age=person['age'];
        }
    })
    .controller('ctrl2', function ($scope,svc) {
        //初始化数值
        $scope.name='jim2';
        $scope.age='23';
        //使用事件改变数据
        $scope.setPerson= function () {
            var person={name:$scope.name,age:$scope.age};
            svc.setPerson(person);
        };
        $scope.getPerson= function () {
            var person=svc.getPerson('person');
            $scope.name=person['name'];
            $scope.age=person['age'];
        }
    })
    .controller('ctrl3', function ($scope,svc) {
        //初始化数值
        //使用事件改变数据
        $scope.show= function () {
            var person=svc.getPerson();
            $scope.name=person.name;
            $scope.age=person.age;
        }
    })