let Pharmacist = function (id, name, age, address) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;

    this.getId = function () {
        return this.id;
    };
    this.getName = function () {
        return this.name;
    };

    this.getAge = function () {
        return this.age;
    };

    this.getAddress = function () {
        return this.address;
    };

    this.setId = function () {
        this.id = id;
    };
    this.setName = function () {
        this.name = name;
    };

    this.setAge = function () {
        this.age = age;
    };

    this.setAdress = function () {
        this.address = address;
    };


};