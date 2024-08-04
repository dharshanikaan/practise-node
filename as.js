console.log('a');
console.log('b');
const f1=()=>{
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve('c');
       
     },3000);
    });
}
const f2=()=>{
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve('d');
    },0);
    });
}

async function execute(){
    try{
        const a1=await f1();
        console.log(a1);
        const a2=await f2();
        console.log(a2);
        await console.log('e')

    }catch(error){
        console.log(error);
    }
}
 execute();