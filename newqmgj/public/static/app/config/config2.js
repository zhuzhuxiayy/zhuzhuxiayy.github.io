var app2 = angular.module('qmgj_login',['ui.router','ui.bootstrap']);
app2.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'static/app/view/homeView.html',
		controller:'homeController'
	}).state('vip',{
		url:'/vip',
		templateUrl:'static/app/view/vipView.html',
		controller:'vipController'
	}).state('vip.main',{
		url:'/main',
		templateUrl:'static/app/view/vipMainView.html',
		controller:'vipMainController'
	}).state('vip.info',{
		url:'/info',
		templateUrl:'static/app/view/vipInfoView.html',
		controller:'vipInfoController'
	}).state('vip.record',{
		url:'/record',
		templateUrl:'static/app/view/vipRecordView.html',
		controller:'vipRecordController'
	}).state('list',{
		url:'/list',
		templateUrl:'static/app/view/listView.html',
		controller:'listController'
	}).state('list2',{
		url:'/list/:keyword',
		templateUrl:'static/app/view/listView.html',
		controller:'listController'
	})
}]);

app2.filter('getMoon',function(){
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

app2.filter('substr',function(){
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