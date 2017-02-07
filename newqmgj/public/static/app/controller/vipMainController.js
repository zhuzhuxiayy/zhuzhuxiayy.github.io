app2.controller('vipMainController',['$scope','$http',function($scope,$http){
	$http({
		url:'static/app/json/procare.json'
	}).then(function(res){
		if (res.data.resultCode == '0000') {
			$scope.careData = res.data.result.procare;
			$scope.hotData = res.data.result.prohot;
		}
	})
}])