/**
 * Created by ADCZ679 on 11/24/2014.
 */
angular.module("TestApp", ["ui.bootstrap"])
    .directive("splitBox", [function(){
        return {
            restrict: "C",
            templateUrl: "split-box.html",
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
;

angular.element(document).ready(function() {
    angular.bootstrap(angular.element("#application"), ['TestApp']);
});