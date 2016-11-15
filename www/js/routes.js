angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('destinations', {
    url: '/page3',
    templateUrl: 'templates/destinations.html',
    controller: 'destinationsCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('about', {
    url: '/page5',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('tabsController.login', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.forum', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/forum.html',
        controller: 'forumCtrl'
      }
    }
  })

  .state('infoPage', {
    url: '/page8',
    templateUrl: 'templates/infoPage.html',
    controller: 'infoPageCtrl'
  })

  .state('tabsController.thread', {
    url: '/page9',
    views: {
      'tab2': {
        templateUrl: 'templates/thread.html',
        controller: 'threadCtrl'
      }
    }
  })

  .state('select', {
    url: '/page10',
    templateUrl: 'templates/select.html',
    controller: 'selectCtrl'
  })

  .state('select2', {
    url: '/page12',
    templateUrl: 'templates/select2.html',
    controller: 'select2Ctrl'
  })

  .state('select3', {
    url: '/page13',
    templateUrl: 'templates/select3.html',
    controller: 'select3Ctrl'
  })

  .state('select4', {
    url: '/page14',
    templateUrl: 'templates/select4.html',
    controller: 'select4Ctrl'
  })

  .state('newComment', {
    url: '/page11',
    templateUrl: 'templates/newComment.html',
    controller: 'newCommentCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});