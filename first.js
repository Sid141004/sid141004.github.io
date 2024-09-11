let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let newgame = document.querySelector(".newgame");
let msg = document.querySelector(".text");
let container = document.querySelector(".winningscreen");
let turn0=true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turn0)
        {
            box.innerText = "O";
            turn0=false;
        }
        else{
            box.innerText = "X";
            turn0=true;
        }
        box.disabled = true;
        checkwinner();
    })
})

const dissablebttns = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const ennablebttns = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
}
const resetbttn = () =>{
    turn0 = true;
    ennablebttns();
    container.classList.add("hide");
    resetbtn.classList.remove("hide");
}
const showwinner = (winner) =>{
    msg.innerText = `Congratulations, vansh maa chuda Winner is ${winner} !!`;
    container.classList.remove("hide");
    resetbtn.classList.add("hide");
    dissablebttns();

}
const checkwinner = () =>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showwinner(pos1);
            }
        }
    }
}

newgame.addEventListener("click",resetbttn);
resetbtn.addEventListener("click",resetbttn);


