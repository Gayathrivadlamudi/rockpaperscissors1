let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
choices.forEach((choicy)=>{
    console.log(choicy); 
    choicy.addEventListener("click",()=>{
        const userchoice=choicy.getAttribute("id");
        console.log(":choice was clicked",userchoice);
       const pg= userchoice;
        const cg=compgame();
        console.log("comp choice",cg);
        if(pg===cg){
            draw();
        }
        else{
            let userwin=true;
            if(pg==="rock"){
                //cg:scisccors paper
                userwin=cg==="scissors"?true:false;
            }
            else if(pg==="scissors"){
                userwin=cg==="paper"?true:false;
            }
            else{
                userwin=cg==="rock"?true:false;
            }
            showwin(userwin);
        }
        

    }) ;

});
const draw=()=>{
    console.log("game is draw");
    msg.innerText="Game was draw";
    msg.style.background="blue";
}

const compgame=()=>{
    const options=["rock","paper","scissors"];
    const compchoice=Math.floor(Math.random() *3);
    return options[compchoice];
}
const showwin=(userwin)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText="you win!";
        msg.style.background="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you loose"); 
        msg.innerText="you loose!"; 
        msg.style.background="red"; 
    }
}