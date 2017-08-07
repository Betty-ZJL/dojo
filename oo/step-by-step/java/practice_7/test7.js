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
        return super.introduce()+` I am a Student. I am at Class ${this.klass}.`;
    }
}

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        if(this.klass===undefined)
            return super.introduce()+` I am a Teacher. I teach No Class`;
        else
            return super.introduce()+` I am a Teacher. I teach Class ${this.klass}.`;
    }

}

let per=new Person('Tom', 21);
console.log(per.introduce());

let stu=new Student('Tom', 21, 2);
console.log(stu.introduce());

let tec1=new Teacher('Tom', 21, 2);
console.log(tec1.introduce());

let tec2=new Teacher('Tom', 21);
console.log(tec2.introduce());