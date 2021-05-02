var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.getDetails = function () {
        console.log('The student name is ' + this.name);
    };
    return Student;
}());
var Boy = /** @class */ (function (_super) {
    __extends(Boy, _super);
    function Boy(name, gender) {
        var _this = _super.call(this, name) || this;
        _this.gender = gender;
        return _this;
    }
    Boy.prototype.getDetails = function () {
        console.log('This gender ', this.gender);
    };
    return Boy;
}(Student));
var boy1 = new Boy('Bunny', 'M');
boy1.getDetails();
console.log('Method Overloading and overriding');
function getInfo(name, city, contactNo) {
    console.log("The user name is " + name + "  and city is " + city + " You can Contact on " + contactNo);
}
getInfo('Bunny');
getInfo('Maggi', 'New York');
getInfo('Mike', 'London', 34353543);
