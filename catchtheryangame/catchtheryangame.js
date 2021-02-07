const startBtn = document.querySelector(".start-btn");
const countDown = document.querySelector(".count-down");
const numberOfBug = document.querySelector(".number-bug");
const resetBtn = document.querySelector(".reset-btn");


function getRandomPosition(element) {
	const x = document.body.offsetHeight-element.clientHeight;
	const y = document.body.offsetWidth-element.clientWidth;
	const randomX = Math.floor(Math.random()*x);
	const randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}

startBtn.addEventListener('click', ()=>{
    for (let i = 0; i <= 7; i++) {    
    const imgRyan = document.createElement('img');
    imgRyan.classList.add("ryan");
	imgRyan.setAttribute("style", "position:absolute;");
	imgRyan.setAttribute("src", "img/ryan.png");
    document.body.appendChild(imgRyan);

    const positionRyan = getRandomPosition(imgRyan);
    imgRyan.style.top = positionRyan[0] + 'px';
    imgRyan.style.left = positionRyan[1] + 'px';

    numberOfRyan = 0;
    /*함수 시작 전 밖으로 빼주고 0부터 시작, 변수 지정하지 않는다*/
    imgRyan.addEventListener('click', ()=>{
    imgRyan.style.visibility = "hidden"
    
    numberOfRyan += 1;
    numberOfBug.innerHTML = numberOfRyan;
    if(numberOfRyan == "8"){
        alertWin();
    }
    });
};

    for (let i = 0; i <= 10; i++) {    
    const imgAppeach = document.createElement('img');
    imgAppeach.classList.add("appeach");
	imgAppeach.setAttribute("style", "position:absolute;");
	imgAppeach.setAttribute("src", "img/appeach.png");
	document.body.appendChild(imgAppeach);
	const positionAppeach = getRandomPosition(imgAppeach);
	imgAppeach.style.top = positionAppeach[0] + 'px';
    imgAppeach.style.left = positionAppeach[1] + 'px';

    imgAppeach.addEventListener('click', alertOver)
    } 

    
},{once: true}
);


let timeleft = 10;
let myInterval = -1;
startBtn.addEventListener('click', ()=>{
    startBtn.innerHTML = '<i class="fas fa-pause"></i>';
    if(myInterval == -1){
        myInterval = setInterval(function(){
            timeleft -= 1 ; /* timeleft -- 같은 말 */
        if(timeleft <= 0){
            clearInterval(myInterval);
            countDown.innerHTML = "Finished";
            alertOver();
        }else{
        countDown.innerHTML =  `0:${timeleft <10 ? `0${timeleft}` : timeleft}`;};
        },1000);

    }else{
        startBtn.innerHTML = "►";
        clearInterval(myInterval);
        myInterval = -1; /*다시 처음상태로 돌려주는 것*/
        }
});

resetBtn.onclick = ()=>{
location.reload();
}

function alertOver(){
clearInterval(myInterval);
const alertUserBox = document.createElement("div");
document.body.appendChild(alertUserBox);
alertUserBox.classList.add("alert-user");
alertUserBox.innerHTML =`
<div class= "msg-container">  
Click here to replay again
<button class = "replay-btn">
    <i class="fas fa-reply"></i>
</button>
<span>You Lost!🔥</span>
</div>`;

const replayBtn = document.querySelector(".replay-btn");
replayBtn.addEventListener('click', ()=>{
    location.reload();
})
};


function alertWin(){
    clearInterval(myInterval);
    const alertUserBox = document.createElement("div");
    document.body.appendChild(alertUserBox);
    alertUserBox.classList.add("alert-user");
    alertUserBox.innerHTML =`
    <div class= "msg-container">  
    Click here to replay again
    <button class = "replay-btn">
        <i class="fas fa-reply"></i>
    </button>
    <span>You Won!🏆</span>
    </div>`;
    
    const replayBtn = document.querySelector(".replay-btn");
    replayBtn.addEventListener('click', ()=>{
        location.reload();
})
};


// let timeleft = 10; /*전역변수로 꺼내줘야함. 안에넣으면 9에서 멈춤 */

//     function showLeftTime(){
//     timeleft -= 1; 
//          /*let으로 안바꿔주면 숫자가 변하지 않는다*/
//     if(timeleft <= 0){
//     countDown.innerHTML = "Finished";
//     alertOver();
//     } else {
//     countDown .innerHTML = `0:${timeleft <10 ? `0${timeleft}` : timeleft}`;
//           };
//         };

 
// function countDownTimer () {
//     let handleInterval;
//     if(startBtn.innerHTML === "►"){
//         startBtn.innerHTML = "◼︎";
//         /* ===와 =는 확실히 해주기ㅠㅠ */
     
//      let handleInterval = setInterval(showLeftTime, 1000);
// } else {
//         startBtn.innerHTML = "►";
//         clearInterval(handleInterval);
//         // location.reload();
//     }   
// };



// function countDownTimer () {
//     if(startBtn.innerHTML === "►"){
//         startBtn.innerHTML = "◼︎";
//         /* ===와 =는 확실히 해주기ㅠㅠ */
//         let timeleft = 10; 
//         /*전역변수로 꺼내줘야함. 안에넣으면 9에서 멈춤 */
//         const downloadTimer = setInterval(function(){
//          timeleft -= 1; 
//          /*let으로 안바꿔주면 숫자가 변하지 않는다*/
//           if(timeleft <= 0){
//           clearInterval(downloadTimer);
//           countDown.innerHTML = "Finished";
//           alertOver();
//           } else {
//          countDown .innerHTML = `0:${timeleft <10 ? `0${timeleft}` : timeleft}`;
//          }
//         }, 1000);

//     }else{
//         startBtn.innerHTML = "►";
//         clearInterval(downloadTimer);
//     }   
// };
