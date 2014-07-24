//var app = angular.module()
var mainControl = ['$scope', '$rootScope', function mainControl($scope, $rootScope) {

}];
var livenessControl = ['$scope', '$rootScope','$http' ,function livenessControl($scope, $rootScope, $http) {
	$http({method: 'GET', url: '/liveness'}).
		success(function(data, status, headers, config) {
			$scope.mydata = data;

		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});


}];
//test data

var shopSaleControl = ['$scope', '$rootScope', '$http' ,function shopSaleControl($scope, $rootScope, $http) {
	$http({method: 'GET', url: '/shopSale'}).
		success(function(data, status, headers, config) {
			$scope.showData = data;
			console.log(data);

		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});



}];
var saleDetailControl = ['$scope', '$rootScope','$http' ,function saleDetailControl($scope, $rootScope, $http) {


	$http({method: 'GET', url: '/saleDetail'}).
		success(function(data, status, headers, config) {
			$scope.showData = data;
			console.log(data);

		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});



}];
var goodsDetailControl = ['$scope', '$rootScope','$http' ,function goodsDetailControl($scope, $rootScope, $http) {


	$http.post('/goodsDetail',{'goodsname':$rootScope.goodsName}).
		success(function(data, status, headers, config) {
			$scope.showData = data;
			console.log(data);

		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});



}];