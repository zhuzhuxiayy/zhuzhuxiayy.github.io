app2.controller('vipRecordController', ['$scope', '$http', function($scope, $http) {
    var Record = {
        init: function() {
        	$scope.type = 0; //0:全部 1：未支付 2：已支付
        	$scope.countAll = 0; //默认0条数据
        	$scope.maxSize = 10;
        	$scope.page = 1;
        	$scope.count = 5;

        	this.events();
        	this.getRecordData();
        },
        events: function() {
        	var that = this;
        	$scope.pageChanged = function(){
        		console.log($scopoe.page);
        		that.getRecordData();
        	}
        	$scope.changeType = function(index){
        		$scope.type = index;
        		that.getRecordData();
        	}
        },
        getRecordData: function() {
            $http({
                url: '/user/RecordList',
                method: 'post',
                data: {
                    type: $scope.type,
                    page: $scope.page,
                    count: $scope.count
                }
            }).then(function(res) {
                console.log(res);
                if (res.data.resultCode == '0000') {
                    $scope.recordData = res.data.result.list;
                    $scope.countAll = res.data.result.count;
                } else {
                    alert(res.data.resultMsg);
                }
            })
        }
    }
    Record.init();
}])
