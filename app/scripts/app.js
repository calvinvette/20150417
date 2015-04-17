var myApp = angular.module('MyApp', [ /*'ngRoute',*/ 'ui.bootstrap', /*'ui.utils', 'ngMask',*/ 'ui.router' ]);

myApp.config(/*['$routeProvider','$stateProvider', */
	function(/*$routeProvider, */$stateProvider) {
		$stateProvider
			.state('viewState', {
				url : "/SaveCustomer",
				views : {
					"main" : {
						templateUrl : "scripts/CustomerForm/CustomerView.html",
						controller : "CustomerFormController"
					},
					"legal" : {
						templateUrl : "scripts/Legal/LegalView.html",
						controller : "LegalController"
					}, 
					"accountOverview" : {
						templateUrl : "scripts/AccountOverview/AccountView.html",
						controller : "AccountOverviewController"
					}
				}
			})
			.state('editState', {
				url : "/SaveCustomer",
				views : {
					"main" : {
						templateUrl : "scripts/CustomerForm/CustomerForm.html",
						controller : "CustomerFormController"
					},
					"legal" : {
						templateUrl : "scripts/Legal/LegalView.html",
						controller : "LegalController"
					}, 
					"accountOverview" : {
						templateUrl : "scripts/AccountOverview/AccountForm.html",
						controller : "AccountOverviewController"
					}
				}

			});
		/*
	
		$routeProvider
			.when('/SaveCustomer', {
				templateUrl : 'CustomerForm/CustomerForm.html',
				controller : 'CustomerFormController'
			})
			.when('/OrderManagement', {
				templateUrl : 'OrderManagement/OrderManagement.html',
				controller : 'OrderManagementController'
			});
			*/
	}
//]
);

