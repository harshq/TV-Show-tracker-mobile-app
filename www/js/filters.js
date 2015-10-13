angular.module('remindme.filters', [])
.filter('removeBrackets' , function(){
	return function(val){

		var regExp = /\(([^)]+)\)/;
		var newVal = val.replace(regExp, "");
		return newVal;
	}
});