angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', '$stateParams', 'Feeds',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Feeds) {

    Feeds.getFeeds().then(function(data){ //success callback
       console.log(data[0]); //you will have your data here.
       $scope.feeds = data;
   },function(error){ //error callback
       console.log(error);//error occurred here
   })
}])

.controller('destinationsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('forumCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('infoPageCtrl', ['$scope', '$stateParams', 'comments',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, comments) {
  comments.getFeeds().then(function(data){ //success callback
     console.log(data[0]); //you will have your data here.
     $scope.feeds = data;
  },function(error){ //error callback
     console.log(error);//error occurred here
  })

}])

.controller('threadCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('selectCtrl', ['$scope', '$stateParams', 'asiaUniversities',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, asiaUniversities) {

    asiaUniversities.getFeeds().then(function(data){ //success callback
       console.log(data[0]); //you will have your data here.
       $scope.feeds = data;
   },function(error){ //error callback
       console.log(error);//error occurred here
   })
}])

.controller('select2Ctrl', ['$scope', '$stateParams', 'usUniversities',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, usUniversities) {
	usUniversities.getFeeds().then(function(data){ //success callback
       console.log(data[0]); //you will have your data here.
       $scope.feeds = data;
   },function(error){ //error callback
       console.log(error);//error occurred here
   })

}])

.controller('select3Ctrl', ['$scope', '$stateParams', 'euUniversities',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, euUniversities) {
	euUniversities.getFeeds().then(function(data){ //success callback
       console.log(data[0]); //you will have your data here.
       $scope.feeds = data;
   },function(error){ //error callback
       console.log(error);//error occurred here
   })

}])

.controller('select4Ctrl', ['$scope', '$stateParams', 'auUniversities',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, auUniversities) {
	auUniversities.getFeeds().then(function(data){ //success callback
       console.log(data[0]); //you will have your data here.
       $scope.feeds = data;
   },function(error){ //error callback
       console.log(error);//error occurred here
   })

}])

.controller('newCommentCtrl', ['$scope', '$stateParams', '$state', 'Door',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup, $state, Door) {

    $scope.data = {};

    $scope.postcom = function() {
        Door.postComment($scope.data.username, $scope.data.content)
            .success(function(data) {
              $state.go('infoPage');
            })
            .error(function(err) {
            });
       }
}])
