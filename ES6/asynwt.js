async function display(){
    let x=60,y=100;
    if(x<y){
        return result=await x+y;
    }
    else{
        throw new Error("this is an error");
    }}

let result=display();
result.then((data)=>{
    console.log(data)//true block is execute when condition is true
})
result.catch((data)=>{
    console.log(data);//false block is executed when condition false
})