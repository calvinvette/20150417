/**
 * CustomerTable Controller
 * Uses the CustomerLocalStorage Service to retrieve local customers
 * and displays them in the HTML table 
 * TODO - version 2 - add inline table row Edit capabilities 
 */

angular.module('MyApp').controller('CustomerTableController', function($scope, CustomerLocalStorage) {
	$scope.customers = CustomerLocalStorage.findAll();
	$scope.workingCustomer = new Customer();
	// Toggle the edit state for a given customer
	$scope.edit = function(cust) { 
		angular.copy(cust, $scope.workingCustomer);
	}
	// Return true if we are currently editing the specified customer
	$scope.isEditing = function(cust) {
		return cust.customerId == $scope.workingCustomer.customerId;
	};
	$scope.revertToOriginal = function() {
		$scope.workingCustomer = new Customer();
	};
	$scope.keyHandler = function(evt, cust) {
		if (evt.keyCode == 27) { // ESCAPE KEY
			$scope.revertToOriginal();
		} else if (evt.keyCode == 13) { // ENTER key
			console.log("ENTER PRESSED");
			angular.copy($scope.workingCustomer, cust); //
			$scope.revertToOriginal();
		}
	};
	$scope.deleteCustomer = function(theRecord) {
		console.log("Deleting " + theRecord);
		console.log(theRecord);
	};
});