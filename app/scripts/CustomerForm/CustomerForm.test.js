"use strict";

/**
 *
 * CustomForm Controller
 *
 */

describe("Customer Form Controller Tests", function() {
	var scope, customerFormController;
	var $controller, $rootScope;
	
	beforeEach(module('MyApp'));

	beforeEach(inject(function(_$rootScope_, _$controller_) {
	/*
		scope = $rootScope.$new();
		//console.log("local scope in beforeEach: " + scope);
	*/
		$controller = _$controller_;
		$rootScope = _$rootScope_;
	/*
		customerFormController = _$controller_('CustomerFormController', {
			$scope : scope
		})
		console.log("CustomerFormController $scope in beforeEach: " + customerFormController.$scope);
	*/
	}));
	
	
	it("should populate the view after setting the customer model", function() {
		customerFormController = $controller('CustomerFormController', {
			$scope : $rootScope.$new()
		});
		console.log("CustomerFormController $scope in it#1: " + customerFormController.$scope);
		customerFormController.customer = new Customer("Harry", "Potter" /*, ...*/);
		
		expect(customerFormController).toBeDefined(); //.because("couldn't find customerFormController!!");
		expect(customerFormController.$scope).toBeDefined(); //.because("couldn't find customerFormController's $scope!!");
		/*
		expect(customerFormController.$scope.myCustomerForm).toBeDefined();
		expect(customerFormController.$scope.myCustomerForm.txtFirstName.$viewValue)
			.toBeEqual("Harry");
		expect(customerFormController.customer.lastName)
			.toBeEqual(scope.myCustomerForm.txtLastName.$viewValue);
			*/
	});

	/** 
	 * If we use the Customer Service, this is technically an integration test 
	 */
	it("should populate the customer table after retrieving customers", function() {


	});

});
