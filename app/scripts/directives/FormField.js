angular.module("MyApp").directive("infbFf", function() {
	return {
		restrict : 'ACE',
		templateUrl: 'scripts/directives/FormField.html',
		scope : {
			'model' : '=model',
			'fieldName' : '@fieldName',
			'label' : '@label',
			'required' : '@required',
			'min' : '@min',
			'max' : '@max'
		}
	}
});