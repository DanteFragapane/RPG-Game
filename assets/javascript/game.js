$("document").ready(() => {

    var activeCharacter = Character;


    // Character object constructor
    function Character(name, fullname, health, attackPower, counterPower) {
        this.name = name;
        this.fullname = fullname;
        this.health = health;
        this.attackPower = attackPower;
        this.increment = attackPower;
        this.counterPower = counterPower;

        this.attack = function (enemy) {
            this.health -= enemy.attacked();
            this.attackPower += this.increment;
        };

        this.attacked = function (damage) {
            this.health -= damage;
            return this.counterPower;
        };
    }


    const createEnemies = function (characterList, active) {
        for (let i = 0; i < characterList.length; i++) {
            if (characterList[i].name != active.name) {
                let character = characterList[i];
                div = $("<div class='character'>") // Create the div.character
                div.attr("number", i);
                div.append($("<img>").attr('src', `assets/images/${character.name}.jpg`)) // Create ``img`` as child of ``div``
                div.append($("<text>", {
                    text: character.fullname
                })); // Create ``text`` as child of ``div``
                $("#enemies").append(div); // Actually add the ``div`` element as a child of ``#characters``
            }
        };
    }

    const createDiv = function(character, i) {
        div = $("<div class='character'>") // Create the div.character
        div.attr("number", i);
        div.append($("<img>").attr('src', `assets/images/${character.name}.jpg`)) // Create ``img`` as child of ``div``
        div.append($("<text>", {
            text: character.fullname
        })); // Create ``text`` as child of ``div``
        return div;
    }

    // Creating the characters
    const obi = new Character("obi", "Obi Wan Kanobi", 100, 6, 4);
    const luke = new Character("luke", "Luke Skywalker", 150, 8, 4);
    const sidious = new Character("sidious", "Darth Sidious", 100, 25);
    const maul = new Character("maul", "Darth Maul", 125, 10);

    characters = [obi, luke, sidious, maul];

    // Quick tests for checking attack
    console.log(`${obi.health} ${obi.attackPower}`);
    obi.attack(luke);
    console.log(`${obi.health} ${obi.attackPower}`)


    var reset = function () {
        // FIXME: This oddly doesn't work? Please figure this out, developer!
        // for (let i = 0; i < characters.length; i++) {
        //     let character = characters[i];
        //     div = $("<div class='character'>") // Create the div.character
        //     div.attr("number", i);
        //     div.append($("<img>").attr('src', `assets/images/${character.name}.jpg`)) // Create ``img`` as child of ``div``
        //     div.append($("<text>", {
        //         text: character.fullname
        //     })); // Create ``text`` as child of ``div``
        //     $("#characters").append(div); // Actually add the ``div`` element as a child of ``#characters``
        // };
    }

    for (let i = 0; i < characters.length; i++) {
        let character = characters[i];
        let div = createDiv(character, i);
        $("#characters").append(div); // Actually add the ``div`` element as a child of ``#characters``
    };




    // Clicking a character in the character section sets it as active
    $(".character").click(function () {
        activeCharacter = characters[$(this).attr("number")];
        // Hiding all but the active character
        $(".character").each(function () { // jQuery's forEach
            if (characters[$(this).attr("number")] != activeCharacter) { // If the name of the character is NOT the active character's name
                $(this).css("display", "none");
            }
        });
        createEnemies(characters, activeCharacter)
    })


    reset();
})