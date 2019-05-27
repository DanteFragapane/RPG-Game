$("document").ready(() => {

    function Player(health, attackPower, counterPower) {
        this.health = health;
        this.attackPower = attackPower;
        this.counterPower = counterPower;

        this.attack = function(enemy) {
            this.health -= enemy.attacked();
        }

        this.attacked = function(damage) {
            this.health -= damage;
            return this.counterPower;
        }
    }

    function Enemy(health, counterPower) {
        this.health = health;
        this.counterPower = counterPower;
    }


    const obi = new Player(100, 6, 4);
    const luke = new Player(150, 8, 4);
    const sidious = new Enemy(100, 25);
    const maul = new Enemy(125, 10);

    console.log(obi.health);
    obi.attack(luke);
    console.log(obi.health);

    characters = [];


})