angular.module("MyApp").directive("customerView", function() {
	return {
		restrict : 'ACE',
		templateUrl: 'scripts/directives/CustomerView.html',
		scope : {
			'myVal1' : "@val1",
			'myVal2' : "@val2",
			'customer' : "=customer"
		},
		link : function(scope, elem, attrs) {
//			scope.customer = scope.customer || {};
			scope.customer.firstName = "Ginny";
//			var foo = "foo";
//			setTimeout(function() { foo = "bar"; }, 1500);
//			scope.$watch(function() { return scope.customer.firstName}, 
//					function(val) {
//				console.log("changed");
//				elem.text("first: " + val);
//			});
			scope.$watch("customer.firstName",
				function(val) {
					console.log("In directive: firstname change to: " + scope.customer.firstName);
//					elem.text("first: " + val);
			}, true);
		}, 
		transclude : true
	};
});