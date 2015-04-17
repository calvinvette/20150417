angular.module("MyApp").directive("customerView", function() {
	console.log("customerView directive loaded...");
	return {
		
		templateUrl: 'scripts/directives/CustomerView.html' 
	};
});