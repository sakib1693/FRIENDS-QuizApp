/**
 * Created by Vishw on 12/30/2016.
 */

(function () {
    'use strict';
    angular.module('quizApp')
        .controller('MainController',MainController);

        MainController.$inject = ['QuizService'];

    function MainController(QuizService) {
        var vm =this;
        vm.friend = "";
        vm.activeFriend = {};
        vm.detailFriend = detailFriend;
        function detailFriend(index) {
            vm.activeFriend = index;
        }

        vm.friends = QuizService.getFriends();

        vm.searchFriend = "";

        console.log(vm.friends);

    }

})();