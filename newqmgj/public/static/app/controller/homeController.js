app.controller('homeController', ['$scope', '$http', '$interval', dealHome]);
app2.controller('homeController', ['$scope', '$http', '$interval', dealHome]);

function dealHome($scope, $http, $interval) {
    $scope.hotNav = ['', '微电影', '电视剧', '话剧', '电影', '戏曲', '书画', '相声', '戏剧', '音乐剧'];
    $scope.tvData = [];
    var Home = {
        init: function() {
            var that = this;
            $http({
                url: '/IndexInfo',
                method: 'get'
            }).then(function(res) {
                if (res.data.resultCode == '0000') {
                    that.dealSlide(res.data.result.slides); //轮播图处理
                    that.dealHot(res.data.result.hot); // 热门项目
                    that.dealTV(res.data.result.new); // 卫视主推
                    that.dealUnit(res.data.result.unit); // 合作单位
                }
            })
        },
        dealSlide: function(slideData) {
            $scope.slideData = slideData;
            $scope.showIndex = 0;
            var inter = $interval(function() {
                $scope.showIndex++;
                if ($scope.showIndex == $scope.slideData.length) {
                    $scope.showIndex = 0;
                }
            }, 1500);

            $scope.pauseSlide = function(index) {
                $interval.cancel(inter);
                $scope.showIndex = index;
            }

            $scope.playSlide = function() {
                inter = $interval(function() {
                    $scope.showIndex++;
                    if ($scope.showIndex == $scope.slideData.length) {
                        $scope.showIndex = 0;
                    }
                }, 1500);
            }
        },
        dealHot: function(hotData) {
            $scope.hotData = hotData;
            $scope.hotItem = hotData[0];
            $scope.hotIndex = 0;
            $scope.showHotItem = function(index) {
                $scope.hotIndex = index;
                $scope.hotItem = res.data.result.hot[index];
            }
        },
        dealTV: function(tvData) {
        	$scope.tvData = tvData;
        },
        dealUnit: function(unitData) {
        	$scope.unitData = unitData;
        }
    }
    Home.init();
}
