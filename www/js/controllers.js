angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, searchBar) {
  var vm = this;

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  vm.isSearchActive = false;

  vm.showSearch = function(){
    searchBar.toggle();
    vm.isSearchActive = !vm.isSearchActive

  };

 
  // // Form data for the login modal
  // $scope.loginData = {};

  // // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  // // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };
})

.controller('HomeCtrl' , function($scope, shows){
  var vm = this;
  
  var events = shows.getTodayShows.query(function(){
    

    var data = events.map(function(event){
        var obj = {};
        obj.name = event.name;
        obj.network = event.network;
        obj.airsTime = event.airsTime;
        obj.fanart = event.fanart;

        obj.episode = event.episodes.filter(function(episode){
            var today = new Date().toISOString().substring(0,10) + 'T00:00:00.000Z';
            return episode.firstAired === today;
        });
        return obj;

    });
    console.log(data);
    vm.events = data;
  });

  vm.activateTab = function(index){

    if(index === vm.activatedTab){
      vm.activatedTab = null;
    }else{
      vm.activatedTab = index;
    }
    
  };

})

.controller('BrowseCtrl', function($scope, shows, searchBar,$ionicScrollDelegate , selectedShow) {
  var vm = this;
  vm.showSearch = function(){
    var isSearchActive = searchBar.getStatus();
      if(!isSearchActive){
        vm.search = "";
      }
      return isSearchActive;
  }; 

  vm.scrollTop = function() {
    $ionicScrollDelegate.scrollTop();
    vm.activatedTab = null;
  }

  vm.setSelectedShow = function(show){
      selectedShow.setShow(show);
  };

  
  var events = shows.getAllShows.query(function(){

    var data = events.map(function(event){
        var obj = {};
        obj.name = event.name;
        obj.network = event.network;
        obj.airsTime = event.airsTime;
         obj.fanart = event.fanart;
         obj._id = event._id;
         obj.airsDayOfWeek = event.airsDayOfWeek;
    //     obj.firstAired: event.firstAired;
    //     obj.contentRating: event.contentRating;
        obj.overview = event.overview;
    //     obj.rating: event.rating;
    //     obj.imdbId: event.imdbId;
    //     obj.runtime: event.runtime;
         obj.status = event.status;
    //     obj.poster: event.poster;

        return obj;

    });
  
    vm.events = data;
  });



  vm.activateTab = function(index){

    if(index === vm.activatedTab){
      vm.activatedTab = null;
    }else{
      vm.activatedTab = index;
    }

  };




})
.controller('MoreCtrl' , function(selectedShow) {
  var vm = this;
  vm.show = selectedShow.getShow();



});
