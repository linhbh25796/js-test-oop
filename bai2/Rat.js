let Rat = function (name, weight, speed, status) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = status;
    this.status = true;

    this.say = function () {
        return console.log(this.name + ": Chit chit ");
    };
    this.showStatus = function () {
        if (this.status === true) {
            console.log("Jerry is living");
        } else {
            console.log("Jerry is deathhhhh");
        }
    }


};