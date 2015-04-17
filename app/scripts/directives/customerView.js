angular.module("MyApp").directive("customerView", function() {
	console.log("customerView directive loaded...");
	return {
		template: 'Customer: {{customer.firstName}} '
			+ '{{customer.lastName}}' 
			+ 'Phone: {{customer.phoneNumber}}'
			+ 'Email: {{customer.email}}'
	};
});