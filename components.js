'use strict';

bsApp.directive('analogClock', function ($interval) {
    return {
        restrict: 'E',
        scope: {
            x: '@',
            y: '@',
            r: '@',
            w: '@',
            h: '@',
            showSeconds: '@',
            showClockFace: '@'
        },
        templateUrl: 'analog-clock.html',
        link: function ($scope) {

            $scope.clockWidth = $scope.w;
            $scope.clockHeight = $scope.h;
            $scope.hrY2 = $scope.y-$scope.r*0.5;
            $scope.minY2 = $scope.y-$scope.r*0.75;
            $scope.secY2 = $scope.y-$scope.r*0.9;

            $scope.calculateRotation = function () {
                var now = new Date();
                $scope.hourRotation = 360 * now.getHours() / 12;
                $scope.minuteRotation = 360 * now.getMinutes() / 60;
                $scope.secondRotation = 360 * now.getSeconds() / 60;
            }

            $interval(function () {
                $scope.calculateRotation()
            }, 1000);
            $scope.calculateRotation();
        }
    };
});

