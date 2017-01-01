/**
 * Created by Vishw on 12/31/2016.
 */

(function () {
    'use strict';

    angular.module('quizApp')
        .factory('QuizMatrics',QuizMatrics);

    QuizMatrics.$inject = ['QuizService'];

    function QuizMatrics() {
        var quizObj = {
            quizActive: false,
            chnageState: changeState,
            markQuiz: markQuiz,
            correctAnswers: [],
            numCorrect: 0
        };

        return quizObj;
        
        function changeState(metric,state) {
            if(metric == "quiz"){
                quizObj.quizActive = state;
            }else if(metric == "result"){
                quizObj.resultActive = state;
            }else{
                return false;
            }
        }
        
        function markQuiz() {
            quizObj.correctAnswers = QuizService.correctAnswers;
            for(var i=0 ; i < QuizService.quizQuestions.length; i++){
                if(QuizService.correctAnswers[i] === QuizService.quizQuestions[i].selected){
                    QuizService.quizQuestions[i].correct = true;
                    quizObj.numCorrect++;
                }else {
                    QuizService.quizQuestions[i].correct = false;
                }
            }
        }
    }
})();