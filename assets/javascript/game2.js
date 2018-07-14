$(document).ready( function(){

    // luke attacks in factors of 5? when is chosen offender
    // obi-wan attacks in factors of 8 when is chosen offender
    // maul attacks for 25
    // sidious attacks for 20

    // global variables
    let characters = {
        'obiWan': {
            name: 'Obi-Wan Kenobi',
            health: 120,
            attack: 8,
            imageUrl: '../images/obi-wan.jpg',
            defenderAttack: 8
        },
        'luke': {
            name: 'Luke Skywalker',
            health: 100,
            attack: 5,
            imageUrl: '../images/luke.jpeg',
            defenderAttack: 5
        },
        'sidious': {
            name: 'Darth Sidious',
            health: 150,
            attack: 20,
            imageUrl: '../images/sidious.jpg',
            defenderAttack: 20
        },
        'maul': {
            name: 'Darth Maul',
            health: 180,
            attach: 25,
            imageUrl: '../images/sidious.jpg',
            defenderAttack: 25
        }
    };

    var offender;
    var defender;
    var enemies = [];
    var offenderIndex;
    var attackResult;
    var round = 1;
    var killmonger = 0;

    var renderOne = function(character, renderArea, makeChar) {
        var charDiv = $("<div class='character' 'data-name'" + character.name + "'>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img class='characterImage' alt='character photo'>").attr('src',character.imageUrl);
        var charHealth = $("<div class='characterHealth'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(renderArea).append(charDiv);
        
        // conditional render
        if (makeChar == 'enemy') {
            $(charDiv).addClass('enemyImage');
        }else if (makeChar == 'defender') {
            defender = character;
            $(charDiv).addClass('chosenDefender');
        }
    };

    // create function to render game message to DOM
    var renderMessage = function(message) {
        var gameMessageSet = $('#gameMessage');
        var newMessage = $('<div>').text(message);
        gameMessageSet.append(newMessage);

        if (message == 'clearMessage') {
            gameMessageSet.text('');
        }
    };

    var renderCharacters = function(charObj, areaRender) {
        // render all characters
        if (areaRender == '.characters') {
            $(areaRender).empty();
            for (var key in charObj) {
                if (charObj.hasOwnProperty(key)) {
                    renderOne(charObj[key], areaRender, '');
                }
            }
        }

        // render ofender
        if (areaRender == '#chosenOffender') {
            // $('#chosenOffender').prepend("Your Character");
            renderOne(charObj, areaRender, '');
            // made attack button visible here
        }

        // render enemies
        if (areaRender == '.enemies') {
            // $('.enemies').prepend("Choose your next opponent");
            for (var i = 0; i < charObj.length; i++) {
                renderOne(charObj[i], areaRender, 'enemy');
            }
            // render one enemy to defender area
            $(document).on('click', '.enemy', function(){
                // select a defender
                name = ($(this).data('name'));
                if ($('#defender').children().length === 0) {
                    renderCharacters(name, '#defender');
          $(this).hide();
          renderMessage("clearMessage");
        }
      });
    }
    //render defender
    if (areaRender == '#defender') {
      $(areaRender).empty();
      for (var i = 0; i < enemies.length; i++) {
        //add enemy to defender area
        if (enemies[i].name == charObj) {
          $('#defender').append("Your selected opponent")
          renderOne(enemies[i], areaRender, 'defender');
        }
      }
    }
    //re-render defender when attacked
    if (areaRender == 'playerDamage') {
      $('#defender').empty();
      $('#defender').append("Your selected opponent")
      renderOne(charObj, '#defender', 'defender');
      lightsaber.play();
    }
    //re-render player character when attacked
    if (areaRender == 'enemyDamage') {
      $('#selected-character').empty();
      renderOne(charObj, '#selected-character', '');
    }
    //render defeated enemy
    if (areaRender == 'enemyDefeated') {
      $('#defender').empty();
      var gameStateMessage = "You have defeated " + charObj.name + ", you can choose to fight another enemy.";
      renderMessage(gameStateMessage);
      blaster.play();
    }
  };
  //this is to render all characters for user to choose their computer
  renderCharacters(characters, '#characters-section');
  $(document).on('click', '.character', function() {
    name = $(this).data('name');
    //if no player char has been selected
    if (!offender) {
        offender = characters[name];
      for (var key in characters) {
        if (key != name) {
            enemies.push(characters[key]);
        }
      }
      $("#characters-section").hide();
      renderCharacters(offender, '#selected-character');
      //this is to render all characters for user to choose fight against
      renderCharacters(enemies, '#available-to-attack-section');
    }
  });

  // ----------------------------------------------------------------
  // Create functions to enable actions between objects.
  $("#attack-button").on("click", function() {
    //if defernder area has enemy
    if ($('#defender').children().length !== 0) {
      //defender state change
      var attackMessage = "You attacked " + defender.name + " for " + (offender.attack * round) + " damage.";
      renderMessage("clearMessage");
      //combat
      defender.health = defender.health - (offender.attack * round);

      //win condition
      if (defender.health > 0) {
        //enemy not dead keep playing
        renderCharacters(defender, 'playerDamage');
        //player state change
        var counterAttackMessage = defender.name + " attacked you back for " + defender.enemyAttackBack + " damage.";
        renderMessage(attackMessage);
        renderMessage(counterAttackMessage);

        offender.health = offender.health - defender.enemyAttackBack;
        renderCharacters(offender, 'enemyDamage');
        if (offender.health <= 0) {
          renderMessage("clearMessage");
          restartGame("You have been defeated...GAME OVER!!!");
          force.play();
          $("#attack-button").unbind("click");
        }
      } else {
        renderCharacters(defender, 'enemyDefeated');
        killmonger++;
        if (killmonger >= 3) {
          renderMessage("clearMessage");
          restartGame("You Won!!!! GAME OVER!!!");
          jediKnow.play();
          // The following line will play the imperial march:
          setTimeout(function() {
          audio.play();
          }, 2000);

        }
      }
      turnCounter++;
    } else {
      renderMessage("clearMessage");
      renderMessage("No enemy here.");
      rtwoo.play();
    }
  });

//Restarts the game - renders a reset button
  var restartGame = function(inputEndGame) {
    //When 'Restart' button is clicked, reload the page.
    var restart = $('<button class="btn">Restart</button>').click(function() {
      location.reload();
    });
    var gameState = $("<div>").text(inputEndGame);
    $("#gameMessage").append(gameState);
    $("#gameMessage").append(restart);
  };

// closing ready function below
});