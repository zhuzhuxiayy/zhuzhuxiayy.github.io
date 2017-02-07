app.controller('listController', ['$scope', '$http', '$stateParams', myListController]);
app2.controller('listController', ['$scope', '$http', '$stateParams', myListController]);

function myListController($scope, $http, $stateParams) {
    var List = {
        init: function() {
        	// console.log($stateParams.keyword);
            $scope.cipArr = ['全部', '微电影', '电视剧', '话剧', '电影', '戏曲', '书画', '相声', '戏剧', '音乐剧', '其它'];
            $scope.cip2Arr = ['筹资中', '已结束', '成功'];
            $scope.cip3Arr = ['最新', '热门', '结束时间'];

            $scope.type = 0;
            $scope.status = 0;
            $scope.timeStatus = 0;

            $scope.countAll = 0;
            $scope.maxSize = 10;
            $scope.page = 1;
            $scope.count = 3;
            $scope.keyword = '';

            if ( $stateParams.keyword != undefined) {
            	$scope.keyword = $stateParams.keyword;
            }

            this.events();
            this.getListData();
        },
        events: function() {
        	var that = this;
            $scope.changeType = function(index) {
                $scope.type = index;
                $scope.page = 1;
                that.getListData();
            }
            $scope.changeStatus = function(index) {
                $scope.status = index;
                $scope.page = 1;
                that.getListData();
            }
            $scope.checkTimeStatus = function(index) {
                $scope.timeStatus = index;
                $scope.page = 1;
                that.getListData();
            }
            $scope.pageChanged = function() {
                console.log($scope.page);
                that.getListData();
            }
        },
        getListData: function() {
            $http({
                url: '/prolist',
                method: 'get',
                params: {
                    keyword: $scope.keyword, // 关键字搜索， 选填
                    cid: $scope.type ,// 数组下标 ['全部','微电影','电视剧','话剧','电影','戏曲','书画','相声','戏剧','音乐剧','其它']
                    status: $scope.status ,// 0 筹资中  1已结束  2成功
                    timeStatus: $scope.timeStatus ,// 0最新  1热门  2结束时间
                    page: $scope.page ,// 第1页数据  默认第1页
                    count: $scope.count // 一页9条数据
                }
            }).then(function(res) {
                // console.log('list---', res);
                if (res.data.resultCode == '0000') {
                	$scope.listData = res.data.result.list;
                	$scope.countAll = res.data.result.countAll;
                	$scope.count = res.data.result.count;
                }
            })
        }
    }
    List.init();
}
