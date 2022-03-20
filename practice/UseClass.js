class Animal {
  constructor(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say(){
    console.log(this.sound);
  }
}

class Dog extends Animal{
  constructor(name, sound){
    super('개', name, sound);
  }
}

class Cat extends Animal{
  constructor(name, sound){
    super('고양이',name,sound);
  }
}

class Food{
  constructor(name){
    this.name = name;
    this.brands = [];
  }
  addBrand(brand){
    this.brands.push(brand);
  }
  print(){
    console.log(`${this.name}을 파는 음식점들:`);
    console.log(this.brands.join(' '));
  }
}

const dog1 = new Dog('popo','mongmong');
const dog2 = new Dog('choco','walwal');
const cat1 = new Cat('mimi' , 'miyao');

const chicken = new Food('chicken');

chicken.addBrand('bbq');
chicken.addBrand('bhc');

chicken.print();

dog1.say();
dog2.say();
cat1.say();