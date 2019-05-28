$("document").ready(() => {


    // Character object constructor
    function Character(name, health, attackPower, counterPower) {
        this.name = name;
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
    const obi = new Character("obi", 100, 6, 4);
    const luke = new Character("luke", 150, 8, 4);
    const sidious = new Character("sidious", 100, 25);
    const maul = new Character("maul", 125, 10);

    characters = [obi, luke, sidious, maul];

    // Quick tests for checking attack
    console.log(`${obi.health} ${obi.attackPower}`);
    obi.attack(luke);
    console.log(`${obi.health} ${obi.attackPower}`)


    characters.forEach(character => {
        div = $("<div class='character'>").append($("<img>").attr('src', `assets/images/${character.name}.jpg`)) // Create the div, append a <img> with attributes of 'src' being the headshot
        $("#characters").append(div);
    });



})