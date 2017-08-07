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
        if(student.klass.number===this.number)
            this.leader=student.id;
        else
            console.log(`It is not one of us.`);
    }
    appendMember(student){
        student.klass=this;
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

let cla1=new Klass(1);
let cla2=new Klass(2);
let stu=new Student('Tom',21,'001',cla1);//Tom 是 1 班的
console.log(stu.introduce());

cla2.assignLeader(stu);

cla2.appendMember(stu);//把Tom 设为 2 班的
console.log(stu.introduce());

cla2.assignLeader(stu);
console.log(stu.introduce());

let tec1=new Teacher('Tom', 21,'t1', cla1);
console.log(tec1.introduce());

let tec2=new Teacher('Tom', 21,'t2');
console.log(tec2.introduce());
