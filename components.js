'use strict';

bsApp.directive('analogClock', function ($interval, bsUtils) {
    return {
        restrict: 'E',
        scope: {
            x: '@',
            y: '@',
            r: '@',
            w: '@',
            h: '@',
            backgroundStyle: '=',
            faceStyle: '=',
            hHandStyle: '=',
            mHandStyle: '=',
            sHandStyle: '=',
            tzOffset: '@',
            seconds: '@',
            drawFace: '@'
        },
        templateUrl: 'analog-clock.html',
        link: function ($scope) {

            $scope.radius = $scope.r;
            if ((!bsUtils.isNumber($scope.r)) && bsUtils.endsWith($scope.r, '%')) {
                // Radius was specified as percentage of the distance from the center to the nearest boundary
                var nearestBoundary = Math.min($scope.w, $scope.h) / 2;
                var percent = parseInt($scope.r);
                $scope.radius = nearestBoundary * percent / 100.0;
            }
            var halfWidth = parseInt($scope.w / 2);
            var halfHeight = parseInt($scope.h / 2);

            // Interpret x and y as being offsets from the centre of the clock in pixels
            $scope.x1 = halfWidth + parseInt($scope.x);
            $scope.y1 = halfHeight + parseInt($scope.y);
            // X2 is the same as X1
            $scope.x2 = halfWidth + parseInt($scope.x);
            // Y2 is the same as Y1
            $scope.y2 = halfHeight + parseInt($scope.y);
            // Hour hand is 60% of the radius
            $scope.hrY2 = $scope.y2 - $scope.radius * 0.6;
            // Minute hand is 80% of the radius
            $scope.minY2 = $scope.y2 - $scope.radius * 0.8;
            // Second hand is 100% of the radius
            $scope.secY2 = $scope.y2 - $scope.radius;

            $scope.calculateRotation = function () {
                var now = new Date();
                var date = new Date();
                // Convert to supplied timezone
                if ($scope.tzOffset) {
                    // Subtract the supplied timezone offset
                    now = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes() - $scope.tzOffset, date.getUTCSeconds());
                }
                // Hour hand position: eg 3:30 calculated as hrs/12=0.25 + mins/60/12=0.042 = 0.292
                var minuteFraction = now.getMinutes() / 60;
                $scope.hourRotation = 360 * (now.getHours() + minuteFraction) / 12;
                // Minute hand position: eg 30 mins and 30 secs =  calculated as mins/60=0.5 + secs/60/60=0.00833 = 0.50833
                var secondFraction = now.getSeconds() / 60;
                $scope.minuteRotation = 360 * (now.getMinutes() + secondFraction) / 60;
                $scope.secondRotation = 360 * secondFraction;
            };

            $interval(function () {
                $scope.calculateRotation()
            }, 1000);
            $scope.calculateRotation();
        }
    };
});

