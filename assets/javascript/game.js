$('document').ready(() => {
  var activeCharacter = Character
  var activeEnemy = Character

  // Character object constructor
  function Character (name, fullname, health, attackPower, counterPower) {
    this.name = name
    this.fullname = fullname
    this.health = health
    this.attackPower = attackPower
    this.increment = attackPower
    this.counterPower = counterPower

    this.attack = function (enemy) {
      this.health -= enemy.attacked(enemy.attackPower)
      this.attackPower += this.increment
    }

    this.attacked = function (damage) {
      this.health -= damage
      return this.counterPower
    }
  }

  const createDiv = function (character, className, i) {
    let div = $(`<div class='${className} characterObject'>`) // Create the div.character
    div.attr('number', i)
    div.append($('<img>').attr('src', `assets/images/${character.name}.jpg`)) // Create ``img`` as child of ``div``
    div.append($('<text>', {
      class: 'name',
      text: character.fullname
    })) // Create ``text`` as child of ``div``
    div.append($('<text>', {
      class: 'health',
      text: character.health
    })) // Create text as child of div, class of health.
    return div
  }

  const updateCharacterHealth = function (characters) {
    let objectArray = $('#characterObject')
    for (let i = 0; i < characters.length; i++) {
      let character = characters[i]
      // objectArray[i]
      console.log(character[i])
      console.log(objectArray[i])
    }
  }

  // Creating the characters
  const obi = new Character('obi', 'Obi Wan Kanobi', 100, 6, 4)
  const luke = new Character('luke', 'Luke Skywalker', 150, 8, 4)
  const sidious = new Character('sidious', 'Darth Sidious', 100, 25, 25)
  const maul = new Character('maul', 'Darth Maul', 125, 10, 10)

  const characters = [obi, luke, sidious, maul]

  var reset = function () {
    // FIXME: This oddly doesn't work? Please figure this out, developer!
    // for (let i = 0; i < characters.length; i++) {
    //     let character = characters[i];
    //     div = $("<div class='character'>") // Create the div.character
    //     div.attr("number", i);
    //     div.append($("<img>").attr('src', `assets/images/$,{character.name}.jpg`)) // Create ``img`` as child of ``div``
    //     div.append($("<text>", {
    //         text: character.fullname
    //     })); // Create ``text`` as child of ``div``
    //     $("#characters").append(div); // Actually add the ``div`` element as a child of ``#characters``
    // };
  }

  for (let i = 0; i < characters.length; i++) {
    let character = characters[i]
    let div = createDiv(character, 'character', i)
    $('#characters').append(div) // Actually add the ``div`` element as a child of ``#characters``
  };

  // Clicking a character in the character section sets it as active
  $('.character').click(function () {
    if (!characters.includes(activeCharacter)) {
      activeCharacter = characters[$(this).attr('number')]
      // Hiding all but the active character
      $('.character').each(function () { // jQuery's forEach
        if (characters[$(this).attr('number')] !== activeCharacter) { // If the name of the character is NOT the active character's name
          $(this).css('display', 'none')
        }
      })
      for (let i = 0; i < characters.length; i++) {
        if (characters[i].name !== activeCharacter.name) {
          let character = characters[i]
          let div = createDiv(character, 'enemy', i)
          $('#enemies').append(div) // Actually add the ``div`` element as a child of ``#characters``
        }
      };

      // Selecting enemy
      $('.enemy').click(function () {
        activeEnemy = characters[$(this).attr('number')]
        let div = createDiv(activeEnemy, 'attack', 1) // Create the image div
        let button = $("<button id='attackButton'>").text('Attack')
        $('#attacking').empty().append(div)
        $('#attacking').append(button)

        // Attacking functions
        $('#attackButton').click(function () {
          console.log(activeCharacter.health)
          activeCharacter.attack(activeEnemy)
          console.log(activeCharacter.health)
          updateCharacterHealth(characters)
        })
      })
    }
  })

  reset()
})
