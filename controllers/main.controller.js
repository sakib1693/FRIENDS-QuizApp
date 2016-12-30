/**
 * Created by Vishw on 12/30/2016.
 */

(function () {
    'use strict';
    angular.module('quizApp')
        .controller('MainController',MainController);

    function MainController() {
        var vm =this;
        var friendsData = [
            {
                name : "Joey Tribbiani",
                image_url:"images/joey.jpg",
                realname :"Matt LeBlanc",
                birthdate:"1 Jan 1990",
                loves : "Food"
            },
            {
                name : "Chandler Bing",
                image_url:"images/Chandler.jpg",
                realname :"Matthew Perry",
                birthdate:"1 Jan 1990",
                loves : "Sarcasm"
            },
            {
                name : "Phoebe Buffay",
                image_url:"images/Phoebe.jpg",
                realname :"Lisa Kudrow",
                birthdate:"1 Jan 1990",
                loves : "Guitar"
            },
            {
                name : "Rachel Green",
                image_url:"images/Rachel.jpg",
                realname :"Jennifer Aniston",
                birthdate:"February 11, 1969",
                loves : "Shopping"
            },
            {
                name : "Ross Geller",
                image_url:"images/Ross.jpg",
                realname :"David Schwimmer",
                birthdate:"1 Jan 1990",
                loves : "Marriges!!"
            },
            {
                name : "Monica Geller",
                image_url:"images/Monica.jpg",
                realname :"Courteney Cox",
                birthdate:"1 Jan 1990",
                loves : "Cooking"
            }
        ]
        vm.friends = friendsData;
        console.log(vm.friends);
    }

})();