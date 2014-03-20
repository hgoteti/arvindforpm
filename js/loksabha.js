var loksabhaApp = angular.module('loksabhaApp', []);
 
loksabhaApp.filter('unique', function() {
	return function(input, key) {
	    var unique = {};
	    var uniqueList = [];
	    for(var i = 0; i < input.length; i++){
		if(typeof unique[input[i][key]] == "undefined"){
		    unique[input[i][key]] = "";
		    uniqueList.push(input[i]);
		}
	    }
	    return uniqueList;
	};
    });



loksabhaApp.controller('LoksabhaCtrl', function ($scope) {
	$scope.candidates = AAP_CANDIDATES;
	$scope.selectedState = "";
	$scope.tags = function (a) {
	    var o = {};
	    for (var i = 0; i < a.length; i++) {
		if (($scope.selectedState == "") || (a[i].State == $scope.selectedState)) {
		    var tag = a[i].tags;
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
	    for (var k in o) {
		ret.push({label:k, count:o[k]});
	    }
	    return ret;
	};
});