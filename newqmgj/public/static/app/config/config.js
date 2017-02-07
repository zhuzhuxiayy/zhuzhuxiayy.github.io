var app = angular.module('qmgj_unlogin',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/login');
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'static/app/view/homeView.html',
		controller:'homeController'
	}).state('reg',{
		url:'/reg',
		templateUrl:'static/app/view/regView.html',
		controller:'regController'
	}).state('login',{
		url:'/login',
		templateUrl:'static/app/view/loginView.html',
		controller:'loginController'
	})
}]);

app.filter('getMoon',function(){
	return function(input){
		var curH = new Date(parseInt(input)).getHours();
		var moon = '';
		if (curH>6 && curH<12) {
			moon = '早上';
		}
		else if (curH>=12 && curH<14) {
			moon = '中午';
		}
		else if (curH>=14 && curH<18) {
			moon = '下午';
		}
		else if (curH>=18 && curH<24) {
			moon = '晚上';
		}
		else{
			moon = '凌晨';
		}
		return moon;
	}
})

app.filter('substr',function(){
	return function(){
		var val = arguments[0] || '',
		start = arguments[1],
		count = arguments[2];
		if (count == undefined) {
			count = arguments[1];
			start = 0;
		}
		if (start == undefined) {
			start = 0;
			count = val.length;
		}
		return val.substr(start,count);
	}
})