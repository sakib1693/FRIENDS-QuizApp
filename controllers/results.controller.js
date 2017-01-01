/**
 * Created by Vishw on 12/31/2016.
 */
(function () {
    'use strict';

    angular.module('quizApp')
        .controller('ResultsController',ResultsController);

        ResultsController.$inject = ['QuizMatrics','QuizService'];

    function ResultsController(QuizMatrics,QuizService) {
        var rc = this;

        rc.quizMatrics = QuizMatrics;
        rc.quizService = QuizService;
    }
})();