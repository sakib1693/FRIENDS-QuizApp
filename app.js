/**
 * Created by Vishw on 12/30/2016.
 */

(function () {
    'use strict';

    var app = angular.module('quizApp',['ngRoute']);

    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl:'views/home.html',
                controller:'MainController'
            })
            .when('/quiz',{
                templateUrl:'views/quiz.view.html',
                controller:'QuizController'
            })
            .otherwise('/');
    }])
})();