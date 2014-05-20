bsApp.controller('bsController', function ($scope, clockFormat) {

    // Defaults for styles

    // Background image
    $scope.background = {
        'background-repeat': 'no-repeat'
    };
    // Clock face (if drawn)
    $scope.face = {
        'fill': 'black'
    };
    // Hour hand
    $scope.hHand = {
        'stroke-width': '24px',
        'stroke': '#333',
        'stroke-linecap': 'round',
        opacity: 0.9
    };
    // Minute hand
    $scope.mHand = {
        'stroke-width': '14px',
        stroke: '#888',
        'stroke-linecap': 'round',
        opacity: 0.9
    };
    // Second hand
    $scope.sHand = {
        'stroke-width': '10px',
        stroke: '#bb0000',
        'stroke-linecap': 'round',
        opacity: 0.9
    };

    // Clock face background image, can be specified using 'path', 'face' or 'backgroundImage'. If none specified, draw a face
    $scope.drawFace = true;
    if (clockFormat.path || clockFormat.face || clockFormat.backgroundImage) {
        var backgroundImage = clockFormat.path || clockFormat.face || clockFormat.backgroundImage;
        $scope.background['background-image'] = 'url(' + backgroundImage + ')';
        $scope.drawFace = false;
    }
    // Face color (if drawn)
    if (clockFormat.fColor) {
        $scope.face['fill'] = clockFormat.fColor;
    }
    // Hand color
    if (clockFormat.color) {
        $scope.hHand['stroke'] = clockFormat.color;
        $scope.mHand['stroke'] = clockFormat.color;
        $scope.sHand['stroke'] = clockFormat.color;
    }
    // Hour hand color
    if (clockFormat.hColor) {
        $scope.hHand['stroke'] = clockFormat.hColor;
    }
    // Minute hand color
    if (clockFormat.mColor) {
        $scope.mHand['stroke'] = clockFormat.mColor;
    }
    // Second hand color
    if (clockFormat.sColor) {
        $scope.sHand['stroke'] = clockFormat.sColor;
    }
    // Show second hand
    $scope.seconds = true;
    if (clockFormat.seconds) {
        $scope.seconds = clockFormat.seconds;
    }

    // Hand style: 'round' or 'square' or 'butt'
    if (clockFormat.style || clockFormat.strokeLinecap) {
        $scope.hHand['stroke-linecap'] = clockFormat.style || clockFormat.strokeLinecap;
        $scope.mHand['stroke-linecap'] = clockFormat.style || clockFormat.strokeLinecap;
        $scope.sHand['stroke-linecap'] = clockFormat.style || clockFormat.strokeLinecap;
    }
    if (clockFormat.opacity) {
        $scope.hHand['opacity'] = clockFormat.opacity;
        $scope.mHand['opacity'] = clockFormat.opacity;
        $scope.sHand['opacity'] = clockFormat.opacity;
    }

    $scope.x = 0;
    if (clockFormat.x) {
        $scope.x = parseInt(clockFormat.x);
    }
    $scope.y = 0;
    if (clockFormat.y) {
        $scope.y = parseInt(clockFormat.y);
    }
    $scope.w = 900;
    if (clockFormat.w) {
        $scope.w = parseInt(clockFormat.w);
    }
    $scope.h = 900;
    if (clockFormat.h) {
        $scope.h = parseInt(clockFormat.h);
    }
    // Radius, can be pixels or %
    $scope.r = '100%';
    if (clockFormat.r) {
        $scope.r = clockFormat.r;
    }
    // Timezone
    if (clockFormat.timezone) {
        $scope.tzOffset = parseInt(clockFormat.timezone);
    }
});