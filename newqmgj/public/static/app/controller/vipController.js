app2.controller('vipController',['$scope','$http',function($scope,$http){
	$http({
		url:'static/app/json/userinfo.json'
	}).then(function(res){
		if (res.data.resultCode == '0000') {
			$scope.vipData = res.data.result;
		}
	})
}])