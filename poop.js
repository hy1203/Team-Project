var canvas=document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width=window.innerWidth - 100;
canvas.height=window.innerHeight - 100;

ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 100, 100);

var img2=new Image();
img2.src='./image/man.png';

var dino={
    x : 500,
    y: 150,
    width: 200,
    height: 160,
    draw(){
        ctx.fillStyle='green';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img2, this.x, this.y, this.width, this.height)
    }
}

// dino.x += 1;
// dino.draw()

var img1=new Image();
img1.src='./image/virus.png';

// src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js">
// <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_ivjl6k5z.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player>
// var img1=new Image();
// img1.src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";

class Cactus
{
    constructor(){
        this.x=1100;
        this.y=350;
        this.width=60;
        this.height=60;
    }
    draw(){
        ctx.fillStyle='red';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img1, this.x, this.y, this.width, this.height)
    }
}

// var cactus = new Cactus();
// cactus.draw();

var timer =0;
var cactus여러개=[];
var 점프timer=0;
var animation;
var result=0;


function 프레임마다실행할거(){
    animation= requestAnimationFrame(프레임마다실행할거);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(timer % 300 === 0){
        var cactus=new Cactus();
        cactus여러개.push(cactus);
    }

    cactus여러개.forEach((a, i, o)=>{
        //x좌표가 0미만이면 제거
        if(a.x<500){
            o.splice(i, 1)
            result++;
        }
        a.x-=4;
        충돌하냐(dino, a);
        a.draw();
        if((result==3) && (dino.y=200)){
            alert("축하합니다.");
            cancelAnimationFrame(animation)
        }
       
    })

    //점프기능
    if(점프중==true) {
        dino.y-=2 ;//dino가 점프하는 속도
        점프timer++;
    }
    if(점프중 == false){
        if(dino.y < 300){
        dino.y+=2;
        }
    }
    if(점프timer > 100){
        점프중=false;
        점프timer=0;
    }

    dino.draw()

}

프레임마다실행할거();

//충돌확인
function 충돌하냐(dino, cactus){
    var x축차이= cactus.x - (dino.x +dino.width);
    var y축차이=cactus.y - (dino.y + dino.height);
    if(x축차이 < 0 && y축차이<0){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animation)
    }

}

var 점프중 = false;
document.addEventListener('keydown', function(e){
    if(e.code==='Space'){
        점프중=true;
    }
})
