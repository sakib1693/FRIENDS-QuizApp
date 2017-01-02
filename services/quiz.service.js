/**
 * Created by Vishw on 12/30/2016.
 */

(function () {
    'use strict';

    angular.module('quizApp')
        .factory('QuizService',QuizService);

    function QuizService() {

        var dataObj = {
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };
        return dataObj;
    }

    var correctAnswers = [3, 3, 0, 2, 1, 2, 1, 1, 1, 3];

    var quizQuestions  = [
        {
            type: "text",
            text: "What does Chandler grab from Janice when she breaks up with him?",
            possibilities: [
                {
                    answer: "Her bag"
                },
                {
                    answer: "Her jacket"
                },
                {
                    answer: "Her coffee"
                },
                {
                    answer: "Her shoe"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "According to Chandler what is Gunther's last name?",
            possibilities: [
                {
                    answer: "Sunshine Hair"
                },
                {
                    answer: "Rachel Lover"
                },
                {
                    answer: "Coffee Man"
                },
                {
                    answer: "Central Perk"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is Rachel's sister?",
            possibilities: [
                {
                    answer: "images/amy.jpg"
                },
                {
                    answer: "images/bonnie.jpg"
                },
                {
                    answer: "images/Dina.jpg"
                },
                {
                    answer: "images/x.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these was not Joey's girlfriend?",
            possibilities: [
                {
                    answer: "images/charlie.jpg"
                },
                {
                    answer: "images/Laura.jpg"
                },
                {
                    answer: "images/aurora.jpg"
                },
                {
                    answer: "images/kathy.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the name of the book that Rachel, Monica and Phoebe read?'",
            possibilities: [
                {
                    answer: "The Velveteen Rabbit"
                },
                {
                    answer: "Be Your Own Windkeeper"
                },
                {
                    answer: "The Shining"
                },
                {
                    answer: "Little Women"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the name of the Dutch girl in \"the one with the football\"?",
            possibilities: [
                {
                    answer: "Martha"
                },
                {
                    answer: "Heidi"
                },
                {
                    answer: "Margha"
                },
                {
                    answer: "Althea"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What was the Geller cup made of?",
            possibilities: [
                {
                    answer: "PAC man doll"
                },
                {
                    answer: "Troll doll"
                },
                {
                    answer: "Godzilla doll"
                },
                {
                    answer: "Barbie doll"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What did Rachel think Emma's first word was?",
            possibilities: [
                {
                    answer: "Mama"
                },
                {
                    answer: "Gleeba"
                },
                {
                    answer: "Dada"
                },
                {
                    answer: "Gleebo"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What was common between Mr.Heckles and Chandler?",
            possibilities: [
                {
                    answer: "Both had the same broom"
                },
                {
                    answer: "Both were awarded Class Clown"
                },
                {
                    answer: "Both were lead singers of their band"
                },
                {
                    answer: "Both had the same bathrobe"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What are Monica's last lines of the entire series?",
            possibilities: [
                {
                    answer: "Where?"
                },
                {
                    answer: "I promised Treeger we would leave our keys on the counter"
                },
                {
                    answer: "How about that time you lived with Grandma and tried to make it as a dancer?"
                },
                {
                    answer: "We have some time"
                }
            ],
            selected: null,
            correct: null
        }
    ];

})();