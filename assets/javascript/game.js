$(document).ready( function() {

    var characters = ['obi-wan', 'luke', 'sidious', 'maul'];
    var offender;
    var defender;
    var offenderDamage = $('#offenderDamage').text(0);
    var defenderDamage = $('#defenderDamage').text(0);


    // $('.noDefender, .offenderAttack, .defenderAttack').addClass('hide');
    
    if (defender = []) {
        $('.btn').click( function(){
            $('.noDefender').removeClass('hide');

        });
    }
    
    
    function chooseDefender() {
    
        // when Obi-Wan is clicked, make him the Defender
        $('.obiWan').click( function() {
            defender = characters[0];
            console.log("the defender is " + defender);
    
            $('.enemyobiWan').appendTo('#chosenDefender');
        });
    
        // when Luke is clicked, make him the defender
        $('.luke').click( function() {
            defender = characters[1];
            console.log("the defender is " + defender);
    
            $('.enemyLuke').appendTo('#chosenDefender');
        });
    
        // when Luke is clicked, make him the defender
        $('.sidious').click( function() {
            defender = characters[2];
            console.log("the defender is " + defender);
    
            $('.enemySidious').appendTo('#chosenDefender');
        });
    
        // when Maul is clicked, make him the defender
        $('.maul').click( function(){

            defender = characters[3];
            console.log("the defender is " + defender);
    
            $('.enemyMaul').appendTo('#chosenDefender');
        });
    }
   

   function chooseOffender() {

        $('.obiWan').click( function() {
            // set the offender to Obi-Wan
            offender = characters[0];
            console.log("your character is " + offender);
            
            // when obiWan is selected, move him to Your Character div
            $('.obiWan').appendTo('#chosenOffender');

            // move all other characters to enemies section and replace their white border with a red one
            $('.luke').appendTo('.enemyLuke').addClass('enemyImage');
            $('.sidious').appendTo('.enemySidious').addClass('enemyImage');
            $('.maul').appendTo('.enemyMaul').addClass('enemyImage');
            
            $('.enemyObiWan').detach();
        });
           
        $('.luke').click( function() {
            // set the offender to Luke
            offender = characters[1];
            console.log("your character is " + offender);
            
            // when luke is selected, move him to Your Character div
            $('.luke').appendTo('#chosenOffender');

            // move all other characters to enemies section and replace their white border with a red one
            $('.obiWan').appendTo('.enemyObiWan').addClass('enemyImage');
            $('.sidious').appendTo('.enemySidious').addClass('enemyImage');
            $('.maul').appendTo('.enemyMaul').addClass('enemyImage');

            $('.enemyLuke').detach();
        });
        
        $('.sidious').click( function() {
            // set offender to Sidious
            offender = characters[2];
            console.log("your character is " + offender);
            
            // when Luke is selected, move him to Your Character div
            $('.sidious').appendTo('#chosenOffender');

            // move all other characters to enemies section and replace their white border with a red one

            $('.obiWan').appendTo('.enemyObiWan').addClass('enemyImage');
            $('.luke').appendTo('.enemyLuke').addClass('enemyImage');
            $('.maul').appendTo('.enemyMaul').addClass('enemyImage');

            $('.enemySidious').detach();
        });
            
        $('.maul').click( function(){

            // set yourCharacter to Sidious
            offender = characters[2];
            console.log("your character is " + offender);
            
            // when Maul is selected, move him to Your Character div
            $('.maul').appendTo('#chosenOffender');

            // move all other characters to enemies section and replace their white border with a red one
            $('.obiWan').appendTo('.enemyObiWan').addClass('enemyImage');
            $('.luke').appendTo('.enemyLuke').addClass('enemyImage');
            $('.sidious').appendTo('.enemySidious').addClass('enemyImage');

            $('.enemyMaul').detach();
        });
    }
   chooseDefender();
   chooseOffender();
    

    // left to do:
    // 1. stop chooseOffender function from running when an offender has already been chosen so that chooseDefender runs and the chosen defender from the enemies will be appended to the defender div instead of added onto the offender div (i could not get this to work - even with one() and toggle()).

        // A. name all anonymous click functions within click functions and use .off() to turn off the click event for the remaining characters so that they don't get appended to the offender div after one has already been selected

    // 2. create attacking functions using offender and defender variables to dynamically change health points and render on attackSection div in html

   





    // luke attacks in factors of 5? when is chosen offender
    // obi-wan attacks in factors of 8 when is chosen offender
    // maul attacks for 25
    // sidious attacks for 20














// closing ready function below
});