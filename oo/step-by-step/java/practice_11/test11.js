class Person{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    introduce(){
        return `My name is ${this.name}. I am 21 years old.`;
    }
}

class Klass{
    constructor(number){
        this.number=number;
    }
    assignLeader(student){
        if(this.number===student.klass.number)
            this.leader=student.id;
        else
            console.log(`It is not one of us.`)
    }
    appendMember(student){
        student.klass=this;
    }
    isIn(classes){
        for(let cla of classes)
            if(cla.number===this.number)
                return true;
        return false;
    }
}

class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
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
    constructor(id,name,age,classes=[]){
        super(id,name,age);
        this.classes=classes;
    }
    introduce(){
        if(this.classes.length===0)
            return super.introduce()+` I am a teacher. I teach No Class.`;
        else{
            let klasses=this.classes[0].number.toString();
            for (let i=1;i<this.classes.length;i++)
                klasses=klasses+' ,'+this.classes[i].number;
            return super.introduce()+` I am a teacher. I teach Class ${klasses}.`;
        }
    }
    isTeaching(student){
        if(student.klass.isIn(this.classes))
            return true;
        else
            return false;
    }
}

let per=new Person('p1','Tom',21);
console.log(per.introduce());


let cla1=new Klass(1);
let cla2=new Klass(2);
let stu=new Student('001','Tom',21,cla1);//Tom 是 1 班的
console.log(stu.introduce());

cla2.assignLeader(stu);

cla2.appendMember(stu);//把Tom 设为 2 班的
console.log(stu.introduce());

cla2.assignLeader(stu);
console.log(stu.introduce());


let tec1=new Teacher('t1', 'tec1', 21, [cla1,cla2]);
console.log(tec1.introduce());

let tec2=new Teacher('t2', 'tec2', 21,);
console.log(tec2.introduce());

console.log(tec1.isTeaching(stu));
console.log(tec2.isTeaching(stu));