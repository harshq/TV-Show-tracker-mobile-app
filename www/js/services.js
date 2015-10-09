angular.module('starter.services' , ['ngResource'])

.factory('shows' , function($resource){

    return {
    	getTodayShows : $resource('http://localhost:3000/info/today/shows'),
    	getAllShows : $resource('http://localhost:3000/shows/'),
    	getShow : $resource('http://localhost:3000/shows/:showId',{showId: "@showId"})
    } 

});