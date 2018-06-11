$(document).ready(function() {

    var characters = ['obi-wan', 'luke', 'sidious', 'maul'];
    
    function chooseDefender() {

        var defender;
    
        // when Obi-Wan is clicked, make him the Defender
        $('.obiWan').click( function() {
            defender = characters[0];
            console.log("the defender is " + defender);
    
            $('.obiWan').appendTo('#chosenDefender');
        });
    
        // when Luke is clicked, make him the defender
        $('.luke').click( function() {
            defender = characters[1];
            console.log("the defender is " + defender);
    
            $('.luke').appendTo('#chosenDefender');
        
        });
    
        // when Luke is clicked, make him the defender
        $('.sidious').click( function(){
            defender = characters[2];
            console.log("the defender is " + defender);
    
            $('.sidious').appendTo('#chosenDefender');
    
        });
    
        // when Maul is clicked, make him the defender
        $('.maul').click( function(){
            defender = characters[3];
            console.log("the defender is " + defender);
    
            $('.maul').appendTo('#chosenDefender');
    
        });
    }
    chooseDefender();

    var offender;

    function chooseOffender() {

        $('.obiWan').click( function() {
            // set the offender to Obi-Wan
            offender = characters[0];
            console.log("your character is " + offender);
            
            // when obiWan is selected, move him to Your Character div
            $('.obiWan').appendTo('#chosenOffender');

            // move all other characters to enemies section and give them a red border
            $('.luke, .sidious, .maul').appendTo('.enemyCharacters').addClass('enemyImage');
        });

        $('.luke').click( function() {
            // set the offender to Luke
            offender = characters[1];
            console.log("your character is " + offender);
            
            // when luke is selected, move him to Your Character div
            $('.luke').appendTo('#chosenOffender');

            // move all other characters to enemies section and give them a red border
            $('.obiWan, .sidious, .maul').appendTo('.enemyCharacters').addClass('enemyImage');
        });

        $('.sidious').click( function() {
            // set offender to Sidious
            offender = characters[2];
            console.log("your character is " + offender);
            
            // when Luke is selected, move him to Your Character div
            $('.sidious').appendTo('#chosenOffender');

            // move all other characters to enemies section and give them a red border
            $('.obiWan, .luke, .maul').appendTo('.enemyCharacters').addClass('enemyImage');
        });

        $('.maul').click( function(){
            // set yourCharacter to Sidious
            offender = characters[2];
            console.log("your character is " + offender);
            
            // when Maul is selected, move him to Your Character div
            $('.maul').appendTo('#chosenOffender');

            // move all other characters to enemies section and give them a red border
            $('.obiWan, .luke, .sidious').appendTo('.enemyCharacters').addClass('enemyImage');
        });
    }
    chooseOffender();






    // luke attacks in factors of 5? when is selected character
    // obi-wan attacks in factors of 8 when is selecter character
    // maul attacks for 25
    // sidious attacks for 20

    // add button that either forces page refresh or restarts shit














// closing ready function below
});