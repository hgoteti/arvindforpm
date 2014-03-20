var loksabhaApp = angular.module('loksabhaApp', [ 'ui.router' ]);

function loksabhaRouteConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/list?state=");

	$stateProvider.state("home", {
		controller : "HomeController",
		url : "/list?state",
		templateUrl : "loksabha-list.html"
	}).state("candidate", {
		controller : "CandidateController",
		url : "/candidate/:name",
		templateUrl : "loksabha-candidate.html"
	});
}

loksabhaApp.config(loksabhaRouteConfig);

loksabhaApp.filter('unique', function() {
	return function(input, key) {
		var unique = {};
		var uniqueList = [];
		for (var i = 0; i < input.length; i++) {
			if (typeof unique[input[i][key]] == "undefined") {
				unique[input[i][key]] = "";
				uniqueList.push(input[i]);
			}
		}
		return uniqueList;
	};
});

loksabhaApp.controller('HomeController',
		function($scope, $state, $stateParams) {
			$scope.candidates = AAP_CANDIDATES;
			$scope.selectedState = $stateParams.state;
			$scope.selectedStateTags = {};
			$scope.getMap = function(state) {
				if (state == "")
					return MAP["All India"];
				return MAP[state];
			};
			$scope.tags = function(state) {
				if ($scope.selectedStateTags[state])
					return $scope.selectedStateTags[state];
				var o = {};
				for (var i = 0; i < AAP_CANDIDATES.length; i++) {
					if (($scope.selectedState == "")
							|| (AAP_CANDIDATES[i].State == state)) {
						var tag = AAP_CANDIDATES[i].tags;
						if (tag) {
							var s = tag.split(",");
							for (var j = 0; j < s.length; j++) {
								if (o[s[j]])
									o[s[j]]++;
								else
									o[s[j]] = 1;
							}
						}
					}
				}
				var ret = [];
				for ( var k in o) {
					ret.push({
						label : k,
						count : o[k]
					});
				}
				$scope.selectedStateTags[state] = ret;
				return ret;
			};
			$scope.$on('$viewContentLoaded', function() {
				$("#ls-state").val("" + $scope.selectedState);
				$("#ls-state").change(function() {
					$state.go("home", {
						state : $("#ls-state").val()
					});
				});
			});
		});

function getCandidateByName(n) {
	for (var i = 0; i < AAP_CANDIDATES.length; i++) {
		if (AAP_CANDIDATES[i].name == n) {
			return AAP_CANDIDATES[i];
		}
	}
	return null;
}


loksabhaApp.controller('CandidateController',
		function($scope, $state, $stateParams) {
	$scope.candidate = getCandidateByName($stateParams.name);
});


function RootController($scope) {
}

// <option value='{{candidate.State}}' ng-repeat="candidate in candidates|unique:'State'">{{candidate.State}}</option>

