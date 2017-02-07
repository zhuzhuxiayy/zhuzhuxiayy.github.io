app.controller('searchController',['$scope','$state',dealSearch]);
app2.controller('searchController',['$scope','$state',dealSearch]);
function dealSearch($scope,$state){
	$scope.myKeyUp = function(e){
		var keycode = window.event ? e.keyCode : e.which;
		if (keycode == 13) {
			// 可用两种方式获取input的value值
			console.log($scope.inputValue);
			console.log(angular.element(e.target).val());
			$state.go('list2',{keyword:$scope.inputValue});
		}
	}
}