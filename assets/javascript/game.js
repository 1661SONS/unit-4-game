$(document).ready(function(){
    console.log("jQuery is working!");

  $('.maul').click( function() {
      // when character is selected, move to Your Character div
      $('#selectedCharacter').addClass('maul');
      $('.characterImage').appendTo('enemyImageMaul');
    //   $('.maul').remove();
  });

//   $('#selecterCharcter').click( function(){
//     if ($('#selectedCharacter').hasClass('maul')) {
//         $('#selectedCharacter').addClass('hide');
//     }

//   });

    // luke attacks in factors of 5? when is selected character
    // obi-wan attacks in factors of 8 when is selecter character
    // maul attacks for 25
    // sidious attacks for 20














// closing ready function below
});