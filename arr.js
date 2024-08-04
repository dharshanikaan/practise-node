const fruits=['apple','oranges','','mango','','lemon'];
const tran=fruits.map((item=>item===''?'empty string':item));
console.log(tran)

//const obj1={'key1':1};
//const obj2={...obj1};
//if(obj1==obj2)
{
    //console.log('same');
}
//else{
   // console.log('notsame');}
   
const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}



console.log(obj1)

console.log(obj2)