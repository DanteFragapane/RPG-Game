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


    for (let i = 0; i < characters.length; i++) {
        let character = characters[i];
        div = $("<div class='character'>") // Create the div.character
        div.attr("number", i);
        div.append($("<img>").attr('src', `assets/images/${character.name}.jpg`)) // Create ``img`` as child of ``div``
        div.append($("<text>", {
            text: character.fullname
        })); // Create ``text`` as child of ``div``
        $("#characters").append(div); // Actually add the ``div`` element as a child of ``#characters``
    };








    $(".character").click(function () {
        activeCharacter = characters[$(this).attr("number")];
        console.log(activeCharacter);
    })

})