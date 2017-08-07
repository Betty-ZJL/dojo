class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.klass}.`
    }
}

class Worker extends Person{
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I am a Worker. I have a job.`;
    }
}

let per=new Person('Tom', 21);
console.log(per.introduce());

let stu=new Student('Tom', 21, 2);
console.log(stu.introduce());

let wor=new Worker('Tom', 21);
console.log(wor.introduce());