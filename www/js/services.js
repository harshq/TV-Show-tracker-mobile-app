angular.module('starter.services' , ['ngResource'])

.factory('shows' , function($resource){

    return {
    	getTodayShows : $resource('http://localhost:3000/info/today/shows'),
    	getAllShows : $resource('http://localhost:3000/shows/'),
    	getShow : $resource('http://localhost:3000/shows/:showId',{showId: "@showId"})
    } 

})
.factory('searchBar' , function(){
	var active = false;
	var obj = {};

	obj.toggle = function(){
		active = !active;
	};

	obj.getStatus = function(){
		return active;
	};

	return obj;
})
.factory('selectedShow' , function(){
	var selectedShow;
	var obj = {};
	
	obj.setShow = function(show){
		selectedShow = show;
	};

	obj.getShow = function(){
		return selectedShow;
	};

	return obj;

});

