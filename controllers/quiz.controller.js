/**
 * Created by Vishw on 12/30/2016.
 */

(function () {
    'use strict';

    angular.module('quizApp')
        .controller('QuizController',QuizController);

    QuizController.$inject=['QuizService'];

    function QuizController(QuizService) {
        console.log('inside QuizController');

        var qc = this;

        qc.quizData = QuizService;
    }
})();