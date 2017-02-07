app.controller('loginController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.loginClick = function() {
        if ($scope.myform.$valid) {
            $http({
                url: '/user/login',
                method: 'post',
                data: {
                    phone: $scope.phone,
                    password: $scope.pwd
                }
            }).then(function(res) {
                console.log(res);
                if (res.data.resultCode == '0000') {
                    alert('登陆成功');
                    location.reload();
                }else{
                	console.log(res.data.resultMsg);
                }
            })
        }
    }

}])
