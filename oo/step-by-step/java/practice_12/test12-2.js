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
        if(this.number===student.klass.number) {
            this.leader = student.id;
        }
        else
            console.log(`It is not one of us.`);
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
    appendTeacher(teachername){
        this.teachers=teachername;
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
        for(let cla of this.classes){
            cla.appendTeacher(this.name);
        }
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
let cla1=new Klass(1);
let cla2=new Klass(2);
let cla3=new Klass(3);

let tec1=new Teacher('t1', 'teacher1', 21, [cla2,cla3]);
let tec2=new Teacher('t2', 'teacher2', 21, [cla1]);
console.log(tec1.introduce());
console.log(tec2.introduce());

let cla=new  Klass(2);
let stu=new Student('001','Jerry',21);
cla.appendMember(stu);//让 Jerry 加入 2 班 ，2 班老师是 teacher1
console.log(stu.introduce());

cla.assignLeader(stu);//把Jerry设为班长
console.log(stu.introduce());