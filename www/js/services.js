angular.module('app.services', [])

.factory('Feeds', function($http) {

  var feeds = [];

  return {
    getFeeds: function(){

      return $http.get("http://groupd.cs7141.comp.hkbu.edu.hk/events/json")
        .then(function(response){
          feeds = response.data;
          return feeds;
      });
    }
  }
})

.factory('asiaUniversities', function($http) {

  var feeds = [];

  return {
    getFeeds: function(){

      return $http.get("http://groupd.cs7141.comp.hkbu.edu.hk/universities/jsonLocation?location=AS")
        .then(function(response){
          feeds = response.data;
          return feeds;
      });
    }
  }
})

.factory('usUniversities', function($http) {

  var feeds = [];

  return {
    getFeeds: function(){

      return $http.get("http://groupd.cs7141.comp.hkbu.edu.hk/universities/jsonLocation?location=US")
        .then(function(response){
          feeds = response.data;
          return feeds;
      });
    }
  }
})

.factory('euUniversities', function($http) {

  var feeds = [];

  return {
    getFeeds: function(){

      return $http.get("http://groupd.cs7141.comp.hkbu.edu.hk/universities/jsonLocation?location=EU")
        .then(function(response){
          feeds = response.data;
          return feeds;
      });
    }
  }
})

.factory('auUniversities', function($http) {

  var feeds = [];

  return {
    getFeeds: function(){

      return $http.get("http://groupd.cs7141.comp.hkbu.edu.hk/universities/jsonLocation?location=AU")
        .then(function(response){
          feeds = response.data;
          return feeds;
      });
    }
  }
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);