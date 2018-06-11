$(document).ready(function() {

    var characters = ['obi-wan', 'luke', 'sidious', 'maul'];
    var offender;
    var defender;

    $('.obiWan').click( function() {
        // set the offender to Obi-Wan
        offender = characters[0];
        console.log("your character is " + offender);
        
        // when obiWan is selected, move him to Your Character div
        $('.obiWan').appendTo('#chosenOffender');
        $('.obiWan').removeClass('characterImage');

        // move all other characters to enemies section and give them a red border
        $('.luke, .sidious, .maul').appendTo('.enemyCharacters');
        $('.luke, .sidious, .maul').removeClass('characterImage');
        $('.luke, .sidious, .maul').addClass('enemyImage');
    });

    $('.luke').click( function() {
        // set the offender to Luke
        offender = characters[1];
        console.log("your character is " + offender);
        
        // when luke is selected, move him to Your Character div
        $('.luke').appendTo('#chosenOffender');
        $('.luke').removeClass('characterImage');

        // move all other characters to enemies section and give them a red border
        $('.obiWan, .sidious, .maul').appendTo('.enemyCharacters');
        $('.obiWan, .sidious, .maul').removeClass('characterImage');
        $('.obiWan, .sidious, .maul').addClass('enemyImage');
    });

    $('.sidious').click( function() {
        // set offender to Sidious
        offender = characters[2];
        console.log("your character is " + offender);
        
        // when Luke is selected, move him to Your Character div
        $('.sidious').appendTo('#chosenOffender');
        $('.sidious').removeClass('characterImage');

        // move all other characters to enemies section and give them a red border
        $('.obiWan, .luke, .maul').appendTo('.enemyCharacters');
        $('.obiWan, .luke, .maul').removeClass('characterImage');
        $('.obiWan, .luke, .maul').addClass('enemyImage');
    });

    $('.maul').click( function(){
        // set yourCharacter to Sidious
        offender = characters[2];
        console.log("your character is " + offender);
        
        // when Maul is selected, move him to Your Character div
        $('.maul').appendTo('#chosenOffender');
        $('.maul').removeClass('characterImage');

        // move all other characters to enemies section and give them a red border
        $('.obiWan, .luke, .sidious').appendTo('.enemyCharacters');
        $('.obiWan, .luke, .sidious').removeClass('characterImage');
        $('.obiWan, .luke, .sidious').addClass('enemyImage');
    });

    // if the offender is not Obi-Wan, that means Obi-Wan is an ememy
    if (offender != characters[0]) {
        // when Obi-Wan is clicked, make him the Defender
        $('.obiWan').click( function() {
            defender = characters[0];
            console.log(defender);

        
        });
        
    }





    // luke attacks in factors of 5? when is selected character
    // obi-wan attacks in factors of 8 when is selecter character
    // maul attacks for 25
    // sidious attacks for 20














// closing ready function below
});