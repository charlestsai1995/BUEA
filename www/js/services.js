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

.factory('comments', function($http) {

  var feeds = [];

  return {
    getFeeds: function(){

      return $http.get("http://groupd.cs7141.comp.hkbu.edu.hk/comments/json")
        .then(function(response){
          feeds = response.data;
          return feeds;
      });
    }
  }
})

.factory('Upload', function($http) {

    return {

        postComment: function(username, content) {

          /*var data = {
            'comments[username]': username,
            'Comments[content]': content,
            'Comments[uid]': uid
          };
          return $http.post("http://groupd.cs7141.comp.hkbu.edu.hk/comments/create",
          'Comments[username]=welcome2&Comments[content]=sadf&Comments[uid]=1');*/
          return $http({
            method: 'POST',
            url: 'http://groupd.cs7141.comp.hkbu.edu.hk/comments/create',
            data: 'Comments[username]='+username+'&Comments[content]='+content+'&Comments[uid]=1',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          });

        }
    }
})

.factory('Door', function($http) {

    return {

        signin: function(userid, password) {

            var data = {
                userid: userid,
                password: password
            };

            return $http.post('http://simplelogin.cs7141.comp.hkbu.edu.hk/User/signin',
                data);

        },
        signup: function(userid, password) {

            var data = {
                userid: userid,
                password: password
            };

            return $http.post('http://simplelogin.cs7141.comp.hkbu.edu.hk/User/signup',
                data);

        }
    }

})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);
