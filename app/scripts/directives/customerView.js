angular.module("MyApp").directive("customerView", function() {
	console.log("customerView directive loaded...");
	return {
		restrict : 'ACE',
		templateUrl: 'scripts/directives/CustomerView.html',
		scope : {
			'myVal1' : "@val1",
			'myVal2' : "@val2",
			'customer' : "=customer"
		},
		link : function(scope, elem, attrs) {
//			var foo = "foo";
//			setTimeout(function() { foo = "bar"; }, 1500);
			scope.$watch(function() { return scope.customer.firstName}, 
				function(val) {
				console.log("changed");
				elem.text("first: " + val);
			});
		}
	};
});