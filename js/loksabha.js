var loksabhaApp = angular.module('loksabhaApp', []);
 
loksabhaApp.controller('LoksabhaCtrl', function ($scope) {
  $scope.candidates = [
		       {'name': 'Nexus S',
		    'snippet': 'Fast just got faster with Nexus S.'},
		   {'name': 'Motorola XOOM™ with Wi-Fi',
		    'snippet': 'The Next, Next Generation tablet.'},
		   {'name': 'MOTOROLA XOOM™',
		    'snippet': 'The Next, Next Generation tablet.'}
		   ];
    });