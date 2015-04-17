/**
 * CustomerLocalStorage Service
 * Saves, Updates, Deletes, Finds customers using window.localStorage
 */
angular.module('MyApp').service('CustomerLocalStorage', function($rootScope) {
	
	$rootScope.$on('CustomerAddedEvent', function(event, data) {
//		console.log("Customer Added Event in CustomerLocalStorage... ");
		addCustomer(data);
	});
	
	var customers = [ ];
	
	if (window.localStorage.getItem("customers")) {
		try {
			customers = JSON.parse(window.localStorage.getItem("customers"));
		} catch (e) {
			console.log("Blech parsing local customers! " + e);
		}
	}
	
	var addCustomer = function(customer) {
//		console.log("CustomerLocalStorage.addCustomer: " + customer);
		customers.push(customer);
		window.localStorage.setItem("customers", JSON.stringify(customers));
	}
	
	this.findAll = function() {
		return customers;
	}
});


