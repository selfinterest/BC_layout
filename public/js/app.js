/**
 * Created by ADCZ679 on 11/24/2014.
 */
angular.module("TestApp", ["ui.bootstrap"])
    .directive("splitBox", [function(){
        return {
            restrict: "C",
            templateUrl: "split-box.html",
            transclude: true,
            scope: {
                type: "@",
                title: "@",
                text: "@",
                img: "@",

            },
	        link: function(scope, element, attr){
		        scope.collapse = true;

	        }
        }
    }])
    .directive("secondaryDisplayControls", [function(){
        return {
            restrict: "C",
            scope: true,
            templateUrl: "secondary-display-controls.html",
            link: function(scope, element, attr){
                scope.collapse = true;
            }
        }

    }])
    .directive('dotdotdot', ["$timeout", function($timeout){
        return {
            restrict: 'A',
            link: function(scope, element, attributes) {
                $timeout(function(){
                    scope.$watch(function() {
                        element.dotdotdot({watch: true});
                    });
                }, 0);

            }
        }
    }])
;

angular.element(document).ready(function() {
    angular.bootstrap(angular.element("#application"), ['TestApp']);
});