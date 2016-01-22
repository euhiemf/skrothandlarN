angular.module('app', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
	//$urlRouterProvider.otherwise('/home');

	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'home.html'
	}).state('shop', {
		url: '/shop',
		templateUrl: 'shop.html'
	}).state('item', {
		url: '/item/:itemIndex',
		templateUrl: 'item.html'
	}).state('about', {
		url: '/about',
		templateUrl: 'about.html'
	})
	;
});
