class Person {
    constructor(name,age,id){
        this.name=name;
        this.age=age;
        this.id=id;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Klass{
    constructor(number){
        this.number=number;
    }
    assignLeader(student){
        this.leader=student.id;
    }
}

class Student extends Person{
    constructor(name,age,id,klass){
        super(name,age,id);
        this.klass=klass;
    }
    introduce(){
        if(this.id===this.klass.leader)
            return super.introduce()+` I am a Student. I am Leader of Class ${this.klass.number}.`;
        else
            return super.introduce()+` I am a Student. I am at Class ${this.klass.number}.`;
    }
}

class Teacher extends Person{
    constructor(name,age,id,klass){
        super(name,age,id);
        this.klass=klass;
    }
    introduce(){
        if(this.klass===undefined)
            return super.introduce()+` I am a Teacher. I teach No Class`;
        else
            return super.introduce()+` I am a Teacher. I teach Class ${this.klass.number}.`;
    }
}
let per=new Person('Tom', 21);
console.log(per.introduce());

let cla=new Klass(2);
let stu=new Student('Tom',21,'001',cla);
cla.assignLeader(stu);//设Tom为班长
console.log(stu.introduce());
let stu2=new Student('Jerry',21,'002',cla);
console.log(stu2.introduce());

let tec1=new Teacher('Tom', 21,'t1', cla);
console.log(tec1.introduce());

let tec2=new Teacher('Tom', 21,'t2');
console.log(tec2.introduce());

