app2.controller('vipInfoController',['$scope',function($scope){
	$scope.cipArr = ['微电影','电视剧','话剧','电影','戏曲','书画','相声','戏剧','音乐剧'];
	$scope.fileNameChanged = function(event){
		console.log(event);
	}
	$scope.radio = function(e){
		var ngDom = angular.element(e.target);
		ngDom.parent().children().removeClass('active');
		ngDom.addClass('active');
	}
	$scope.checkbox = function(e){
		var ngDom = angular.element(e.target);
		ngDom.toggleClass('active');
	}
	$scope.submit = function(){
		var radioDom = angular.element(document.querySelectorAll('.info-radio.active'));
		console.log('性别->',radioDom.attr('data-value'));
		var checkboxDom = angular.element(document.querySelectorAll('.info-checkbox.active'));
		var arr = [];
		for (var i = 0; i < checkboxDom.length; i++) {
			arr.push(checkboxDom.eq(i).attr('data-value'));
		}
		console.log('关注的圈子->',arr.toString());
		var dataObj = {
			gender:radioDom.attr('data-value'),
			attention:arr.toString()
		}
	}
}])