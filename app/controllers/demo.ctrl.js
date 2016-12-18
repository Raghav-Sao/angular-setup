demo.controller('demoCtrl', ['$scope', 'calculateWeightService', function($scope, calculateWeightService){
	$scope.dataSet = [
					{
						"name": "Animesh",
						"height": 7,
						"weight": null
					},
					{
						"name": "Ankit",
						"height": 6,
						"weight": null
					},
					{
						"name": "Animo",
						"height": 5,
						"weight": null
					},
					{
						"name": "Aniko",
						"height": 4,
						"weight": null
					}
				]
	$scope.salaryDataSet = [
					{
						"name": "Animesh",
						"salary": 70000,
						"rupees": null
					},
					{
						"name": "Ankit",
						"salary": 60000,
						"rupees": null
					},
					{
						"name": "Animo",
						"salary": 50000,
						"rupees": null
					},
					{
						"name": "Aniko",
						"salary": 40000,
						"rupees": null
					}
				]

	$scope.getWeight = function(height, dataSet) {
		var weight = calculateWeightService.calculateWeight(height);
		dataSet.weight = weight;
	}

	
}])