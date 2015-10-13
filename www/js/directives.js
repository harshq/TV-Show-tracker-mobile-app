angular.module('remindme.directives', [])

.directive('background' , function(){
	return {
		restrict : 'A',
		link : function(scope, element, att){

				scope.$watch(function(){
					
					var link = att.background;
					var fixedLink = link.replace('original','thumb');

					element.css({
				    'background-image': 'url(' + fixedLink +')',
				    'background-size' : 'cover',
				    'background-repeat': 'no-repeat'
				});   


			}, true);
		}
	}
})
.directive('backgroundParallax' , function($ionicScrollDelegate){
	return {
		restrict : 'A',
		link : function(scope, element, att){

			var link = att.backgroundParallax;
			var fixedLink = link.replace('original','thumb');
			element.css({
				    'background-image': 'url(' + fixedLink +')',
				    'background-size' : '100% auto'
				    

			});  

					
		var $content = angular.element(document.querySelector('#more-page'));
		
		$content.off('scroll');

		$content.on('scroll', function(){

			var newYPos = 0;
			var top = 0;
			// var top =+ $ionicScrollDelegate._instances[3].getScrollPosition().top;
			var top =+ $ionicScrollDelegate.$getByHandle('mainScroll').getScrollPosition().top;

			if(top >= 0){
				newYPos =  -( top + top/3 );
			}else{
				newYPos = 0;
			}
	 
			element.css({
				'background-position': '0px '+ newYPos +'px',
			});  
	   });

			
		}
	}
})
.directive('episodeItem' , function(){
	return {
		restrict: 'E',
		scope : {
			episode : '='
		},
		templateUrl : 'templates/episode-item-template.html'

	}
});