angular.module('starter.directives', [])

.directive('background' , function(){
	return {
		restrict : 'A',
		link : function(scope, element, att){

				scope.$watch(function(){
					
					element.css({
				    'background-image': 'url(' + att.background +')',
				    'background-size' : 'cover',
				    'background-repeat': 'no-repeat'
				});   


			}, true);
		}
	}
});