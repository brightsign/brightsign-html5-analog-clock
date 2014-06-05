bsApp.controller('bsController', function ($scope, clockFormat) {

    // Defaults for styles

    // Background image
    $scope.backgroundStyle = {
        'background-repeat': 'no-repeat'
    };
    // Clock face (if drawn)
    $scope.faceStyle = {
        'fill': 'black'
    };
    // Hour hand
    $scope.hHandStyle = {
        'stroke-width': '24px',
        'stroke': '#333',
        'stroke-linecap': 'round',
        opacity: 0.9
    };
    // Minute hand
    $scope.mHandStyle = {
        'stroke-width': '14px',
        stroke: '#888',
        'stroke-linecap': 'round',
        opacity: 0.9
    };
    // Second hand
    $scope.sHandStyle = {
        'stroke-width': '10px',
        stroke: '#bb0000',
        'stroke-linecap': 'round',
        opacity: 0.9
    };

    // Clock face background image, can be specified using 'path', 'face' or 'backgroundImage'. If none specified, draw a face
    $scope.drawFace = true;
    if (clockFormat.path || clockFormat.face || clockFormat.backgroundImage) {
        var backgroundImage = clockFormat.path || clockFormat.face || clockFormat.backgroundImage;
        $scope.backgroundStyle['background-image'] = 'url(' + backgroundImage + ')';
        $scope.drawFace = false;
    }
    // Face color (if drawn)
    if (clockFormat.fColor) {
        $scope.faceStyle['fill'] = clockFormat.fColor;
    }
    // Hand color
    if (clockFormat.color) {
        $scope.hHandStyle['stroke'] = clockFormat.color;
        $scope.mHandStyle['stroke'] = clockFormat.color;
        $scope.sHandStyle['stroke'] = clockFormat.color;
    }
    // Hour hand color
    if (clockFormat.hColor) {
        $scope.hHandStyle['stroke'] = clockFormat.hColor;
    }
    // Minute hand color
    if (clockFormat.mColor) {
        $scope.mHandStyle['stroke'] = clockFormat.mColor;
    }
    // Second hand color
    if (clockFormat.sColor) {
        $scope.sHandStyle['stroke'] = clockFormat.sColor;
    }
    // Hour hand width
    if (clockFormat.hWidth) {
        $scope.hHandStyle['stroke-width'] = clockFormat.hWidth;
    }
    // Minute hand width
    if (clockFormat.mWidth) {
        $scope.mHandStyle['stroke-width'] = clockFormat.mWidth;
    }
    // Second hand width
    if (clockFormat.sWidth) {
        $scope.sHandStyle['stroke-width'] = clockFormat.sWidth;
    }
    // Show second hand
    $scope.seconds = true;
    if (clockFormat.seconds) {
        $scope.seconds = clockFormat.seconds;
    }

    // Hand style: 'round' or 'square' or 'butt'
    if (clockFormat.lineCap) {
        $scope.hHandStyle['stroke-linecap'] = clockFormat.lineCap;
        $scope.mHandStyle['stroke-linecap'] = clockFormat.lineCap;
        $scope.sHandStyle['stroke-linecap'] = clockFormat.lineCap;
    }
    if (clockFormat.opacity) {
        $scope.hHandStyle['opacity'] = clockFormat.opacity;
        $scope.mHandStyle['opacity'] = clockFormat.opacity;
        $scope.sHandStyle['opacity'] = clockFormat.opacity;
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
    if (clockFormat.tzOffset) {
        $scope.tzOffset = parseInt(clockFormat.tzOffset);
    }
});