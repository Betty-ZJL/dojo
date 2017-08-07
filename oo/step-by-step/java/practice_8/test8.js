class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Klass{
    constructor(number){
        this.number=number;
    }
}

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return super.introduce()+` I am a Student. I am at Class ${this.klass.number}.`;
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
            return super.introduce()+` I am a Teacher. I teach Class ${this.klass.number}.`;
    }
    introduceWith(student){
       if(student.klass.number===this.klass.number)
           return super.introduce()+` I am a Teacher. I teach ${student.name}.`;
       else
           return super.introduce()+` I am a Teacher. I don't teach ${student.name}.`
    }

}

let per=new Person('Tom', 21);
console.log(per.introduce());

let cla1=new Klass(1);
let cla2=new Klass(2);

let stu1=new Student('Jerry', 21, cla1);
let stu2=new Student('Tom', 21, cla2);
console.log(stu1.introduce());
console.log(stu2.introduce());

let tec1=new Teacher('Tom', 21, cla1);
console.log(tec1.introduce());
console.log(tec1.introduceWith(stu1));
console.log(tec1.introduceWith(stu2));

let tec2=new Teacher('Tom', 21);
console.log(tec2.introduce());
