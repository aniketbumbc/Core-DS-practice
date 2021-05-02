class Student {
  age: number;
  name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  printInfo(): void {
    console.log(this.age, this.name);
  }
}

class Board extends Student {
  boardName: string;
  boardExamDate: number;

  constructor(age: number, name: string, bname: string, bEDate: number) {
    super(age, name);
    this.boardExamDate = bEDate;
    this.boardName = bname;
  }

  printBoardDetails(): void {
    super.printInfo();
    console.log(this.boardExamDate, this.boardName);
  }
}

let board1 = new Board(23, 'Bunny', 'SSC', 2020);
board1.printBoardDetails();
