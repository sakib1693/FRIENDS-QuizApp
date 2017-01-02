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
        rc.activeQuestion = 0;
        rc.numCorrect = QuizMatrics.numCorrect;
        rc.percentage = (rc.numCorrect/rc.quizService.quizQuestions.length)*100;

        rc.setActiveQuestion = function(index){
            rc.activeQuestion = index;
        }

        rc.getAnswerClass = function (index) {
            if(index === rc.quizMatrics.correctAnswers[rc.activeQuestion]){
                return "bg-success";
            }else if(index === rc.quizService.quizQuestions[rc.activeQuestion].selected){
                return "bg-danger";
            }
        }
    }
})();