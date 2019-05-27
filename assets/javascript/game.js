$("document").ready(() => {

    function Player(health, attackPower, counterPower) {
        this.health = health;
        this.attackPower = attackPower;
        this.counterPower = counterPower;

        this.test = function() {
            return this.health
        }
    }

    function Enemy(health, counterPower) {
        this.health = health;
        this.counterPower = counterPower;
    }


    const obi = new Player(100, 6, 4);
    const luke = new Player(150, 8, 4);
    const sidious = new Enemy(100, 6);
    const maul = new Enemy(125, 6);

    characters = [""]


})