$(document).ready(function() {

    var characters = ['obiWan', 'luke', 'sidious', 'maul'];

    $('.obiWan').click( function() {
        // when obiWan is selected, move him to Your Character div
        $('.obiWan').prependTo('#selectedCharacter');
        $('.obiWan').removeClass('characterImage');
        
        var yourCharacter = this;
        console.log(this);

        // move Luke to enemies section and give him a red enemy border
        $('.luke').prependTo('.enemyImageLuke');
        $('.luke').removeClass('characterImage');
        $('.luke').addClass('enemyImage');
        // move Sidious to enemies section and give him a red enemy border
        $('.sidious').prependTo('.enemyImageSidious');
        $('.sidious').removeClass('characterImage');
        $('.sidious').addClass('enemyImage');
        // move Maul to enemies section and give him a red enemy border
        $('.maul').prependTo('.enemyImageMaul');
        $('.maul').removeClass('characterImage');
        $('.maul').addClass('enemyImage');

        // hide the characters section
        $('.characters').addClass('hide');
    
    // close funtion for obiWan below
    });

    $('.luke').click( function() {
        // when luke is selected, move him to Your Character div
        $('.luke').prependTo('#selectedCharacter');
        
        var yourCharacter = this;
        console.log(this);
    
    // close function for luke below
    });

    $('.sidious').click( function() {
        // when sidious is clicked, move him to Your Character div
        $('#selectedCharacter').addClass('sidious');
        $('#selectedCharacter').appendTo('yourCharacter');

        var yourCharacter = this;
        console.log(this);
    });

    $('.maul').click( function(){
        // when maul is clicked, move him to Your Character div
        $('#selectedCharacter').addClass('maul');
        $('#selectedCharacter').appendTo('yourCharacter');

        var yourCharacter = this;
        console.log(this);
    });





    // luke attacks in factors of 5? when is selected character
    // obi-wan attacks in factors of 8 when is selecter character
    // maul attacks for 25
    // sidious attacks for 20














// closing ready function below
});