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
var Animal = /** @class */ (function () {
    function Animal(dogAge, breed) {
        this.age = dogAge;
        this.breed = breed;
    }
    Animal.prototype.printInfo = function () {
        console.log(this.age, this.breed);
    };
    Animal.prototype.makeSound = function (sound) {
        console.log(sound);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(age, dogBreed, playWithBall) {
        var _this = _super.call(this, age, dogBreed) || this;
        _this.playWithBall = playWithBall;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        _super.prototype.makeSound.call(this, 'woof woof');
    };
    return Dog;
}(Animal));
var dog = new Dog(43, 'black', false);
dog.printInfo();
dog.makeSound();
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(age, breed, color) {
        var _this = _super.call(this, age, breed) || this;
        _this.color = color;
        return _this;
    }
    Cat.prototype.makeSound = function () {
        _super.prototype.makeSound.call(this, 'maaau maaau');
    };
    return Cat;
}(Animal));
var cat = new Cat(2, 'green', 'brown');
cat.makeSound();
cat.printInfo();
