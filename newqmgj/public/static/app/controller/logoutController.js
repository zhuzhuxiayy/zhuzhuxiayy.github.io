app2.controller('logoutController',['$scope','$http',function($scope,$http){
	$scope.userLogout = function(){
		$http({
			url:'/user/logout'
		}).then(function(res){
			// console.log('logout->',res);
			if (res.data.resultCode == '0000') {
				alert('退出成功');
				location.reload();
			}
		})
	}
}])