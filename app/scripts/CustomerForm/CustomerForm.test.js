"use strict";

/**
 *
 * CustomForm Controller
 *
 */

describe("Customer Form Controller Tests", function() {
	var scope, controller;
	
	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		controller = $controller('CustomerFormController', {
			'$scope' : scope
		})
	}));
	
	
	it("should populate the view after setting the customer model", function() {
		console.log(controller);
		console.log(controller.customer);
		console.log($scope);
		controller.customer = new Customer("Harry", "Potter" /*, ...*/);
		
		expect($scope.myCustomerForm.txtFirstName.$viewValue)
			.toBeEqual("Harry");
		expect(controller.customer.lastName)
		.toBeEqual($scope.myCustomerForm.txtLastName.$viewValue);
	});


	it("should populate the customer table after retrieving customers", function() {


	});

});
