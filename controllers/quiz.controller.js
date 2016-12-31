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
        qc.activeQuestion = 0;
        var numQuestionsAnswered = 0;

        qc.setActiveQuestion = function () {
            var breakout = false;
            var quizLength = QuizService.quizQuestions.length - 1;

            while(!breakout){
                qc.activeQuestion = qc.activeQuestion < quizLength ?++qc.activeQuestion:0;
                if(QuizService.quizQuestions.selected == null){
                    breakout = true;
                }
            }
        }

        qc.questionAnswered = function (){
            var quizLength = QuizService.quizQuestions.length;
            if(QuizService.quizQuestions[qc.activeQuestion].selected !== null){
                numQuestionsAnswered++;
                if(numQuestionsAnswered >= quizLength){
                    //finalize quiz
                }
            }
            qc.setActiveQuestion();
        }
        
        qc.selectAnswer = function (index) {
            QuizService.quizQuestions[qc.activeQuestion].selected = index;
        }

    }
})();