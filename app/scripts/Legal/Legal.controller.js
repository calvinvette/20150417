angular.module('MyApp').controller('LegalController', function($scope) {
	$scope.copyrightYear = new Date().getYear() + 1900;
});