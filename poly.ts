class Student {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  getDetails(): void {
    console.log('The student name is ' + this.name);
  }
}

class Boy extends Student {
  gender: string;
  constructor(name: string, gender: string) {
    super(name);
    this.gender = gender;
  }

  getDetails(): void {
    console.log('This gender ', this.gender);
  }
}

let boy1 = new Boy('Bunny', 'M');
boy1.getDetails();

console.log('Method Overloading and overriding');

function getInfo(name: string);
function getInfo(name: string, city: string);
function getInfo(name: string, city: string, contactNo: number);

function getInfo(name: string, city?: string, contactNo?: number) {
  console.log(
    `The user name is ${name}  and city is ${city} You can Contact on ${contactNo}`
  );
}

getInfo('Bunny');
getInfo('Maggi', 'New York');
getInfo('Mike', 'London', 34353543);
