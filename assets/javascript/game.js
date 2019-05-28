$("document").ready(() => {


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


    characters.forEach(character => {
        div = $("<div class='character'>") // Create the div.character
        div.append($("<img>").attr('src', `assets/images/${character.name}.jpg`))
        div.append($("<text>", {text: character.fullname}));
        
        $("#characters").append(div);
    });



})