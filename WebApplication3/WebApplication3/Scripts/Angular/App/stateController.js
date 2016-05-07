/// <reference path="D:\Visual Studio 2015\Projects\Arati\WebApplication\MVC\WebApplication3\WebApplication3\Views/Login/login.html" />
app.config(['$stateProvider', '$urlRouterProvider','$locationProvider',function($stateProvider, $urlRouterProvider,$locationProvider){
	$urlRouterProvider.otherwise('login');
	$stateProvider	
	.state('login', {
		url: '/login',
		templateUrl: '/Login/login',
		controller: 'loginController'
	})
	.state('home', {
		url: '/home',
		templateUrl: '/stateParent/stateParent',
		controller : 'stateParentController'
	})
}]);
