/**
 * Created by Vishw on 12/31/2016.
 */

(function () {
    'use strict';

    angular.module('quizApp')
        .factory('QuizMatrics',QuizMatrics);
    
    function QuizMatrics() {
        var quizObj = {
            quizActive: false,
            chnageState: changeState
        };

        return quizObj;
        
        function chnageState(metric,state) {
            if(metric == "quiz"){
                quizObj.quizActive = state;
            }else if(metric == "result"){
                quizObj.resultActive = state;
            }else{
                return false;
            }
        }
    }
})();