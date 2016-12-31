/**
 * Created by Vishw on 12/30/2016.
 */

(function () {
    'use strict';
    angular.module('quizApp')
        .controller('MainController',MainController);

        MainController.$inject = ['HomeService'];

    function MainController(HomeService) {
        var vm =this;
        vm.friend = "";
        vm.activeFriend = {};
        vm.detailFriend = detailFriend;

        vm.friends = HomeService.getFriends();


        function detailFriend(index) {
            vm.activeFriend = index;
        }

        vm.searchFriend = "";

        console.log(vm.friends);

    }

})();