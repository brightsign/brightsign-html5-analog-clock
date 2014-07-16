'use strict';

bsApp.service('bsUtils',
    function () {
        // See http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
        this.isNumber = function(n)
        {
            return !isNaN(parseFloat(n)) && isFinite(n);
        },
        // See http://stackoverflow.com/questions/646628/how-to-check-if-a-string-startswith-another-string
        this.startsWith = function(str, prefix) {
            return this.indexOf(str) == 0;
        },
        // See http://stackoverflow.com/questions/280634/endswith-in-javascript
        this.endsWith = function(str, suffix) {
            return str.indexOf(suffix, str.length - suffix.length) !== -1;
        }
    }
);
/*
 Expecting a string from Tightrope like:

 "format": "format=",
 */
bsApp.factory('clockFormat', function ($location) {
    var ret = {};
    var myArgs = $location.search();
    var myFormatArg = myArgs.format;
    if (! myFormatArg) {
        return ret;
    }
    var myArgsAry = myFormatArg.split(';');
    angular.forEach(myArgsAry, function (arg) {
        var myArgAry = arg.split('=');
        ret[myArgAry[0]] = myArgAry[1];
    });
    return ret;
});

// Creates message port singleton
bsApp.factory('msgPort',
    function () {
        console.log('Services: Creating msgPort');
        return new BSMessagePort();
    }
);
