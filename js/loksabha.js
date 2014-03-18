var loksabhaApp = angular.module('loksabhaApp', []);
 
var GLOBAL_CANDIDATES = [
			 {'name' : 'Ashutosh', 'snippet' : 'Lorem Ipsum Lorem Ipsum Lorem Ipsum', 'photo' : 'img/ashutosh.jpg','occupation': 'journalist', 'education' : 'btech', 'constituency' : 'Delhi North', 'state' : 'Delhi'},
 			 {'name' : 'Hemant Goteti', 'snippet' : 'Lorem Ipsum Lorem Ipsum Lorem Ipsum', 'photo' : 'img/ashutosh.jpg','occupation': 'journalist', 'education' : 'btech', 'constituency' : 'Delhi North', 'state' : 'Delhi'},
			 {'name' : 'Harsh Jain', 'snippet' : 'Lorem Ipsum Lorem Ipsum Lorem Ipsum', 'photo' : 'img/ashutosh.jpg','occupation': 'journalist', 'education' : 'btech', 'constituency' : 'Delhi North', 'state' : 'Delhi'},
			 {'name' : 'Ashutosh', 'snippet' : 'Lorem Ipsum Lorem Ipsum Lorem Ipsum', 'photo' : 'img/ashutosh.jpg','occupation': 'journalist', 'education' : 'btech', 'constituency' : 'Delhi North', 'state' : 'Delhi'},
			 {'name' : 'Ashutosh', 'snippet' : 'Lorem Ipsum Lorem Ipsum Lorem Ipsum', 'photo' : 'img/ashutosh.jpg','occupation': 'journalist', 'education' : 'btech', 'constituency' : 'Delhi North', 'state' : 'Delhi'},
			 {'name' : 'Ashutosh', 'snippet' : 'Lorem Ipsum Lorem Ipsum Lorem Ipsum', 'photo' : 'img/ashutosh.jpg','occupation': 'journalist', 'education' : 'btech', 'constituency' : 'Delhi North', 'state' : 'Delhi'}
			 ];


loksabhaApp.controller('LoksabhaCtrl', function ($scope) {
	$scope.candidates = GLOBAL_CANDIDATES;
    });