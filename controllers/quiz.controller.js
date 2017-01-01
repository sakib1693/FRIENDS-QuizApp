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
        qc.error = false;
        qc.finalise = false;

        qc.setActiveQuestion = function (index) {
            if(index === undefined){
                var breakout = false;
                var quizLength = QuizService.quizQuestions.length - 1;

                while(!breakout){
                    qc.activeQuestion = qc.activeQuestion < quizLength ?++qc.activeQuestion:0;

                    if(qc.activeQuestion === 0){
                        qc.error = true;
                    }

                    if(QuizService.quizQuestions[qc.activeQuestion].selected == null){
                        breakout = true;
                    }
                }
            }
            else{
                qc.activeQuestion = index;
            }
        }

        qc.questionAnswered = function (){
            var quizLength = QuizService.quizQuestions.length;
            if(QuizService.quizQuestions[qc.activeQuestion].selected !== null){
                numQuestionsAnswered++;
                if(numQuestionsAnswered >= quizLength){
                    //finalize quiz
                    for(var i = 0; i < quizLength; i++){
                        if(QuizService.quizQuestions[i].selected === null){
                            setActiveQuestion(i);
                            return;
                        }
                    }
                    qc.error = false;
                    qc.finalise = true;
                    return;
                }
            }
            qc.setActiveQuestion();
        }
        
        qc.selectAnswer = function (index) {
            QuizService.quizQuestions[qc.activeQuestion].selected = index;
        }

    }
})();