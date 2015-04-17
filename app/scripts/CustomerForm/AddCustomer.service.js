/**
 * AddCustomer Service
 * Registers to listen for CustomerAdd events
 * Saves them to LocalStorage (initially)
 * TODO - version 2 - switch to REST
 * 	version 3 - dynamically detect/synch between local & REST
 */

angular.module('MyApp').service('AddCustomerService', function($rootScope, CustomerLocalStorage) {
	//var customers = [];
	
	this.addCustomer = function(customer) {
		//customers.push(customer);
		//CustomerLocalStorage.addCustomer(customer); // Hard wiring is bad, umkay?
		$rootScope.$broadcast('CustomerAddedEvent', customer);
		//console.log(customers);
	};
});