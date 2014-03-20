var donateApp = angular.module('donateApp', []);
CAUSES = [
    {
        'amount': 100, 
        'candidate': 'Medha Padkar', 
        'pitch': 'buys lunch for Medha tai\'s 2 volunteers for 1 day', 
        'need': '5000 volunteers X 1 lunch = Rs. 10,000 needed', 
        'photo': 'img/medha-padkar.jpg',
        'url': 'https://donate.aamaadmiparty.org',
    }, 
    {
        'amount': 10000, 
        'candidate': 'Meera Sanyal', 
        'pitch': 'buys a 30 sec radio ad for Meera Sanyal', 
        'need': '100s of such ads needed for creating impact', 
        'photo': 'img/meera-sanyal.jpg',
        'url': 'https://donate.aamaadmiparty.org',
    }
];
donateApp.controller('DonateCtrl', function($scope) {
    $scope.causes = CAUSES;
});
