"use strict";

/**
 * CustomerForm.controller.js
 */
angular.module('MyApp').controller('CustomerFormController', function($scope, $http, $q, AddCustomerService, $state) {
	$scope.customer = new Customer();
	$scope.firstName = "TOP LEVEL FIRST NAME";

//	$scope.$watch('customer.firstName', function() {
//		console.log("Customer First Name changed: ");
//		console.log($scope.customer.firstName);
//	});
//	$scope.$watch('customer', function() {
//		console.log("Whole Customer changed: ");
//		console.log($scope.customer);
//	});
	
	$scope.save = function() {
		AddCustomerService.addCustomer($scope.customer);
		console.log("Saved..." + $scope.customer);
		$scope.customer = new Customer(); 
	};

	$scope.getCustomerService = function() {
		var deferred = $q.defer();
		for (var i = 0; i <= 7; i++) {
			setTimeout(function(x) {
				deferred.notify("Retrieving customers...." + x/7 * 100 + "%");
			}, 500 * i, i);
		}
		setTimeout(function() { 
			$http.get("data/customers.json")
			.success(function(data) { 
				// Additional post-processing of customer data goes here
				deferred.resolve(data);
			})
			.error(function() { 
				deferred.reject("Failed to retrieve customers...");
			});
		}, 3500);
		return deferred.promise;
	}
	
	$scope.demo = function() {
		var myPromise = $scope.getCustomerService();
		myPromise.then(
				function(data) {
					console.log(data);
				}, function(error) {
					console.log(error);
				}, function(notification) {
					console.log(notification);
				});
	};
	
	$scope.calOpened = false;
	
	$scope.calOpen = function($event) {
		$event.preventDefault();
	    $event.stopPropagation();
	    $scope.calOpened = true;
	    $state.go('viewState');
	};
	
	$scope.saveHomeAddress = function(addrForm) {
//		debugger;
//		console.log(addrForm);
	}
});

