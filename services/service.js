/**
 * Created by Vishw on 12/30/2016.
 */
(function(){
    'use strict';

    angular.module('quizApp')
        .factory('QuizService',QuizService);

    function QuizService() {

        var data = [
            {
                name : "Joey Tribbiani",
                image_url:"images/joey.jpg",
                realname :"Matt LeBlanc",
                birthdate:"1 Jan 1990",
                loves : "Food",
                description:"Joseph Francis \"Joey\" Tribbiani, Jr. (Matt LeBlanc): A good-natured but not-so-bright" +
                " struggling actor and food lover, who becomes famous for his role on a fictionalized version of Days " +
                "of Our Lives as Dr. Drake Ramoray. Joey is a womanizer, with many girlfriends throughout the series" +
                " (his usual pick-up line \"How you doin'?\"), and develops a crush on his friend Rachel in season eight." +
                " Prior to his role on Friends, LeBlanc appeared as a regular on the short-lived TV 101, " +
                "a minor character in the sitcom Married... with Children, and as a main character in its spin-offs, " +
                "Top of the Heap and Vinnie & Bobby. After Friends ended, LeBlanc portrayed Joey in a short-lived spin-off, Joey. "
            },
            {
                name : "Chandler Bing",
                image_url:"images/Chandler.jpg",
                realname :"Matthew Perry",
                birthdate:"1 Jan 1990",
                loves : "Sarcasm",
                description:" Chandler Muriel Bing (Matthew Perry): An executive in statistical analysis and data " +
                "reconfiguration for a large multi-national corporation. Chandler later quits his job and becomes a " +
                "junior copywriter at an advertising agency. Chandler is known for his sarcastic sense of humor, and, " +
                "an intelligent man at the end of the day despite all his goofy quirkiness, often mocks his good friend " +
                "Joey (though never with any malice, even while exasperated) for the latter's stupidity. Chandler is often " +
                "depicted as being somewhat of a hapless individual, suffering a lot of bad luck as he struggles through life" +
                " throughout early seasons and throughout all ten occasionally struggles with an on and off smoking addiction. " +
                "However, he eventually falls in deep mutual love with Monica; an emotional Chandler tells her that she " +
                "\"makes him happier than he ever thought he could be\" while proposing to her at the close of season six," +
                " with the two of them marrying at the close of season seven. By the end of the series, he and Monica adopt twins," +
                " whom they name Jack and Erica named after her father and the children's biological mother. Like Aniston, " +
                "Perry had already appeared in several unsuccessful sitcom pilots before being cast. He had also starred in " +
                "the TV series Second Chance and Sidney. "
            },
            {
                name : "Phoebe Buffay",
                image_url:"images/Phoebe.jpg",
                realname :"Lisa Kudrow",
                birthdate:"1 Jan 1990",
                loves : "Guitar",
                description:"Phoebe Buffay-Hannigan (Lisa Kudrow) is an odd, ditzy but nonetheless sweet-natured, kind-hearted masseuse" +
                " who was once homeless, and sometimes tells her friends outlandish tales of her days on the street. She is an aspiring" +
                " musician who plays the guitar and sings songs with somewhat unusual lyrics at the coffee shop. She has an identical twin" +
                " sister named Ursula, who is also played by Kudrow, just as odd as Phoebe and appeared as a recurring character in the " +
                "sitcom Mad About You. After a series of dates and relationships with a number of men, she meets Mike Hannigan (Paul Rudd) " +
                "in season nine, whom she eventually marries in season ten. She also became a surrogate mother for the child of her" +
                " half-brother Frank Jr. (Giovanni Ribisi), and gives birth to his triplets in the fifth season. "
            },
            {
                name : "Rachel Green",
                image_url:"images/Rachel.jpg",
                realname :"Jennifer Aniston",
                birthdate:"February 11, 1969",
                loves : "Shopping",
                description:"Rachel Karen Green (Jennifer Aniston) is the spoiled but warm-hearted and likeable daughter of" +
                " a rich vascular surgeon and his wife. Rachel is introduced into the series in the first episode after she" +
                " leaves her fiance Barry at the altar, and attempts to live independently without any financial support" +
                " from her parents.She flees from her almost-wedding to New York City, to find her friend from high school" +
                " Monica Geller. Rachel then moves into Monica's apartment and meets Phoebe Buffay, Chandler Bing and Joey " +
                "Tribbiani. Rachel already knows Ross Geller as he is Monica's brother and they all three went to the same " +
                "high school. Rachel's first job as an independent woman is as a waitress at the coffee house Central Perk," +
                " (which is the central hub of the six friends) but she later becomes an assistant buyer, then personal shopper" +
                " at Bloomingdale's, and a buyer at Polo Ralph Lauren. A great deal of Rachel's life throughout the series " +
                "revolves around her relationship with Ross Geller. At the end of season seven, during Monica's and Chandler's" +
                " wedding, it is revealed that Rachel is pregnant and that Ross is the father. The baby is the result of a" +
                " one-night stand between Rachel and Ross. Initially, Rachel is determined to raise the baby on her own until" +
                " she realizes she needs Ross's help. She makes the decision to move in with Ross (although the two are not " +
                "involved in a relationship and it is purely for the baby's benefit). Their baby girl named Emma, is born during" +
                " the eighth season finale. During the tenth season, Rachel is offered a job with Louis Vuitton in Paris. " +
                "She accepts and prepares to move herself and Emma. However, in the final episode of the series, \"" +
                "The Last One\", it is revealed that she ultimately declines the job offer and famously \"gets off the plane\". " +
                "Rachel and Ross get back together and reconcile in the final few moments of the series."
            },
            {
                name : "Ross Geller",
                image_url:"images/Ross.jpg",
                realname :"David Schwimmer",
                birthdate:"1 Jan 1990",
                loves : "Marriages!!",
                description:"Ross Eustace Geller, Ph.D. (David Schwimmer): A paleontologist working at a museum of prehistory," +
                " and later a professor of paleontology at New York University. The most intelligent of the six main characters" +
                " but at the same time a clumsy, and quirky individual, he is known for occasionally being a know-it-all and prides" +
                " himself on his rationality, despite his clear hopeless romanticism. Monica's older brother, Chandler's college" +
                " roommate and Rachel's on-again, off-again boyfriend, Ross has three failed marriages during the series, " +
                "and is involved in an on-off relationship with Rachel, much of which is a main feature throughout the series." +
                " He is also the father of his ex-wife Carol's son Ben and Rachel's daughter Emma. In the series finale, Ross" +
                " and Rachel finally reconcile, deciding to be together once and for all. Before being cast in Friends, " +
                "Schwimmer played minor characters in The Wonder Years and NYPD Blue; his first regular series role was in the " +
                "sitcom Monty. Schwimmer is the only cast member native to New York City."
            },
            {
                name : "Monica Geller",
                image_url:"images/Monica.jpg",
                realname :"Courteney Cox",
                birthdate:"1 Jan 1990",
                loves : "Cooking",
                description:"Monica E. Geller-Bing (Courteney Cox) is the mother hen of the group, who is known for her " +
                "obsessive-compulsive and competitive nature. Monica is often jokingly teased by the others for having " +
                "been an extremely overweight child, especially her brother Ross. In \"The One with the Football\", " +
                "Ross even says to her, \"Cheater, cheater, compulsive eater.\" Monica is an intelligent, kind-hearted " +
                "person who works primarily as a chef throughout the show. In the second season, Monica falls for her " +
                "father Jack's (Elliott Gould) friend, Richard Burke (Tom Selleck). Despite the twenty-one year " +
                "age difference, Monica and Richard are happy, and her parents accept their relationship. However, as a " +
                "result of Monica yearning for a family but Richard having already had one, they break up at the end of " +
                "season 2. Monica then pursues a chain of various men until she unexpectedly begins a relationship with her" +
                " longtime friend, Chandler Bing, at the end of the fourth season, during her brother Ross' wedding to" +
                " Emily Waltham. Monica and Chandler try to hide it from the rest of the friend group for the first half" +
                " of Season 5, but by the end of the season, everyone finds out. After their first year anniversary at " +
                "Vegas, they move in at the beginning of Season 6 and get engaged by the season finale. After their " +
                "marriage, Monica and Chandler try to conceive children, but after visiting the fertility clinic it is" +
                " revealed that Monica is infertile. In the final season of the series, they adopt two children - Erica " +
                "and Jack."
            }
        ]
        var fac = {};

        fac.getFriends = function(){
            return data;
        };
        return fac;

    }


})();