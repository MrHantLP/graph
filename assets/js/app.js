var app = angular.module("MyApp", [
  'sails.io',
  'ui.router',
  'ui.bootstrap'


]);
app.config( function myAppConfig( $stateProvider, $urlRouterProvider, $locationProvider ){
  $stateProvider.state('root',{
    url: '',
    views: {
      'main': {
        template: '<h1> some content </h1>'
      }
    }
  });
  $urlRouterProvider.when('/', '/');

  /*$urlRouterProvider.otherwise(function ($injector, $location ) {
   if($location.$$url === '/login' || $location.$$url === '/register' || $location.$$url === '/logout'){
   // pass through to let the web server handle this request
   window.location = $location.$$absUrl;
   }else{
   //window.location = '/';
   }
   });*/

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
