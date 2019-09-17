let listPharmacist = [];

let PharmacistManager = function () {
    this.addPharmacist = function (id, name, age, address) {
        let object = [];
        object['id'] = id;
        object['name'] = name;
        object['age'] = age;
        object['address'] = address;
        listPharmacist.push(object);
    };
    this.displayPharmacist = function () {
        for(let i = 0; i < listPharmacist.length; i++){
             console.log(listPharmacist[i]);
    }
    };
};

let pharmacistManager = new PharmacistManager();
let pharmacist = new Pharmacist(1, 'Pharmacist 1', 18, 'HaNoi');
let pharmacist2 = new Pharmacist(2, 'Pharmacist 2', 19, 'Saigon');

let id1 = pharmacist.getId();
let name1 = pharmacist.getName();
let age1 = pharmacist.getAge();
let address1 = pharmacist.getAddress();


let id2 = pharmacist2.getId();
let name2 = pharmacist2.getName();
let age2 = pharmacist2.getAge();
let address2 = pharmacist2.getAddress();


pharmacistManager.addPharmacist(id1, name1, age1, address1);
pharmacistManager.addPharmacist(id2,name2, age2, address2);

pharmacistManager.displayPharmacist();















// let PharmacistManager = function (id, name) {
//     this.id = [];
//     this.name = [];
//     this.id.push(id);
//     this.name.push(name);
//     this.addPharmacist = function (id, name) {
//         this.id.push(id);
//         this.name.push(name);
//     };
//     this.getName = function () {
//         return this.name;
//     };
//     this.getId = function () {
//         return this.id;
//     }
//
//
//
//
// };
// function addPharmacist() {
//     for (let i = 0; i < pharmacistID.length; i++) {
//         console.log(pharmacistID[i] +',');
//         document.getElementById("result").innerHTML += pharmacistName[i] + '<br>';
//     }
//
// }
// let pharmacist = new Pharmacist(1,'Phar1',10,'Ha Noi');
// let pharmacistManager = new PharmacistManager(1, 'Pharmacist 1');
// pharmacistManager.addPharmacist(2, 'Pharmacist 2');
// pharmacistManager.addPharmacist(3, 'Pharmacist 3');
// let pharmacistName =pharmacistManager.getName();
// let pharmacistID =  pharmacistManager.getId();
//
//

/*
let PharmacistManager = function (id, name) {
    this.id = [];
    this.name = [];
    this.id.push(id);
    this.name.push(name);
    this.addPharmacist = function (id, name) {
        this.id.push(id);
        this.name.push(name);
    };
    this.getNameManager = function () {
        return this.name;
    };
    this.getIDManager = function () {
        return this.id;
    }
};
function inputPharmacist() {
    for (let i = 0; i < arrayID.length; i++) {
        document.getElementById("result").innerHTML += arrayID[i] + ',';
        document.getElementById("result").innerHTML += arrayName[i] + '<br>';
    }
}
    let TramAnh = new Pharmacist(1, 'TramAnh', 20, 'Hà Nội');
    let NgocTrinh = new Pharmacist(2, 'NgocTrinh', 25, 'Thái Bình');
    let VietNam = new PharmacistManager(1, 'TramAnh');
    VietNam.addPharmacist(2, 'NgocTrinh');
    VietNam.addPharmacist(3, 'NgocMai');
    let arrayName =VietNam.getNameManager();
    let arrayID =  VietNam.getIDManager();

 */