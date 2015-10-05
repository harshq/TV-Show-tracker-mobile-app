angular.module('starter.directives', [])

.directive('background' , function(){
	return {
		restrict : 'A',
		link : function(scope, element, att){
			element.css({
			    'background-image': 'url(' + att.background +')',
			    'background-size' : '100% auto'
			});           
		}
	}
});