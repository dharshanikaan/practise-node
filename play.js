const student = {
    name:'John',
    age:15,
    marks:230,
    school(){
     console.log('Wind School' + this.name);
    }
};


student.school();
const mul=(a,d)=>a*d;
console.log(mul(2,5));