/**
 * Created by Star on 14-3-20.
 */

var app = angular.module('dataPlatform', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/liveness', {
            templateUrl: 'view/liveness.html',
            controller: 'livenessControl'
        }).
		when('/shopSale', {
			templateUrl: 'view/shopSale.html',
			controller: 'shopSaleControl'
		}).
		when('/saleDetail', {
			templateUrl: 'view/saleDetail.html',
			controller: 'saleDetailControl'
		}).
		when('/goodsDetail', {
			templateUrl: 'view/goodsDetail.html',
			controller: 'goodsDetailControl'
		}).
        otherwise({redirectTo: '/liveness'})
}]);




