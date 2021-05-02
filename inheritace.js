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
    function Student(age, name) {
        this.age = age;
        this.name = name;
    }
    Student.prototype.printInfo = function () {
        console.log(this.age, this.name);
    };
    return Student;
}());
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board(age, name, bname, bEDate) {
        var _this = _super.call(this, age, name) || this;
        _this.boardExamDate = bEDate;
        _this.boardName = bname;
        return _this;
    }
    Board.prototype.printBoardDetails = function () {
        _super.prototype.printInfo.call(this);
        console.log(this.boardExamDate, this.boardName);
    };
    return Board;
}(Student));
var board1 = new Board(23, 'Bunny', 'SSC', 2020);
board1.printBoardDetails();
