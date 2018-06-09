$(document).ready(function(){

    var characters = ['obiWan', 'luke', 'sidious', 'maul'];

    $('.obiWan').click( function() {
        // when obiWan is selected, move him to Your Character div
        // $('#selectedCharacter').addClass('obiWan');
        $('.obiWan').prependTo('#yourCharacter');
        
        var yourCharacter = this;
        console.log(this);

        $('.luke').prependTo('.enemyImageLuke');
        $('.sidious').prependTo('.enemyImageSidious');
        $('.maul').prependTo('.enemyImageMaul');
        
    });

    $('.luke').click( function() {
        // when luke is selected, move him to Your Character div
        $('#selectedCharacter').addClass('luke');
        $('#selectedCharacter').appendTo('yourCharacter');
        
        var yourCharacter = this;
        console.log(this);
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