/**
 * Created by Star on 14-3-26.
 */


app.directive('typeSelect', ['$rootScope', function ($rootScope) {
	return {
		restrict: 'AE',
		link: function (scope, elem, attrs) {
			var flag = elem.text();
			elem.on('click', function () {
				elem.parent().siblings().find('span').text(flag);
			});
		}
	};
}]);

app.directive('goodsName', ['$rootScope', function ($rootScope) {
	return {
		restrict: 'AE',
		link: function (scope, elem, attrs) {
			elem.on('click', function () {
				$rootScope.goodsName = attrs.goodsName;
			});
		}
	};
}]);
app.directive('trSelect', function () {
	return {
		restrict: 'AE',
		link: function (scope, elem, attrs) {
			elem.on('click', function () {
				elem.toggleClass('info');
			});
		}
	};
});