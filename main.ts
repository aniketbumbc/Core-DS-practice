class Animal {
  age: number;
  breed: string;

  constructor(dogAge: number, breed: string) {
    this.age = dogAge;
    this.breed = breed;
  }

  printInfo(): void {
    console.log(this.age, this.breed);
  }

  makeSound(sound: string): void {
    console.log(sound);
  }
}

class Dog extends Animal {
  playWithBall: boolean;

  constructor(age: number, dogBreed: string, playWithBall: boolean) {
    super(age, dogBreed);
    this.playWithBall = playWithBall;
  }
  makeSound(): void {
    super.makeSound('woof woof');
  }
}

let dog = new Dog(43, 'black', false);
dog.printInfo();
dog.makeSound();

class Cat extends Animal {
  color: string;
  constructor(age: number, breed: string, color: string) {
    super(age, breed);
    this.color = color;
  }

  makeSound(): void {
    super.makeSound('maaau maaau');
  }
}

let cat = new Cat(2, 'green', 'brown');

cat.makeSound();
cat.printInfo();
