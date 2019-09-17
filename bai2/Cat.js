

let Cat = function (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.maxSpeed = speed;

    this.say = function () {
        return console.log(this.name + ": Meo meo");
    };
    this.chaseRat = function () {

        if (this.maxSpeed > jerry.speed) {

            return true;
        }
    };

    this.eat = function () {
        if (this.chaseRat()) {
            console.log("Eating");
            jerry.status = false;
            this.weight += jerry.weight;
        } else {
            console.log("Jerry was gone !! huhu")
        }
    }

};
