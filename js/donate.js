var donateApp = angular.module('donateApp', []);
CAUSES = [
    {'name': 'Medha padkar - Door to door campaigning', 'photo': 'img/medha-padkar.jpg', 'amount': '2 lakhs', 'short_desc':'Medha padkar needs 2 lakhs for door to door campaigner foods', 'url':'https://donate.aamaadmiparty.org/'},
    {'name': 'Mayank Gandhi - Radio Ad', 'photo': 'img/mayank-gandhi.jpg', 'amount': '10 lakhs', 'short_desc': 'Lorem ispum  see how the money will be used. A UI like above with a picture, descriptive text, call to action and progress should go a long way in pushing people of the edge to donate or urge existing donors to put a little bit more.', 'url':'https://donate.aamaadmiparty.org/'}
];
donateApp.controller('DonateCtrl', function($scope) {
    $scope.causes = CAUSES;
});
