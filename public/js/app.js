/**
 * Created by ADCZ679 on 11/24/2014.
 */
angular.module("TestApp", [])
    .directive("splitBox", [function(){
        return {
            replace: true,
            restrict: "E",
            templateUrl: "/templates/split-box.html",
            scope: {
                type: "@",
                title: "@",
                text: "@",
                img: "@"
            }
        }
    }]);