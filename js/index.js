!function (){
    var outer = document.getElementById('outer');
    var inner = document.getElementById('inner');
    var tip = document.getElementById('tip');
    var oLis = tip.getElementsByTagName('li');



    //Í¼Æ¬ï¿½Ó³Ù¼ï¿½ï¿½ï¿½
/*    var oLis = inner.getElementsByTagName('li');
    function delayImg() {
        for(var i=0; i<imgList.length; i++){
            ~function (){
                var curImg = imgList[i];
                var oImg = new Image();
                oImg.src = curImg.getAttribute('trueImg');
                oImg.onload = function (){
                    curImg.src = this.src;
                    curImg.style.display = 'block';
                    //Êµï¿½ï¿½Í¸ï¿½ï¿½ï¿½È´ï¿½0ï¿½ï¿½1
                    zhufengAnimate(curImg,{opacity:1},500);
                    oImg = null;
                }
            }(i);
        }
    }
    window.setTimeout(delayImg,1000);*/
   count=null;


    var autoTimer = window.setInterval(autoMove,2000);
    var step = 0;
    function autoMove(){
        if(step >= 9){
            step = -1;
            utils.setCss(inner,'left',0);
        }
        step++;
       // setCss(inner,"left", -step*1348)
        zhufengAnimate(inner,{left: -step*1348},0);
        changeTip();
    }


    function changeTip(){
        var tempStep = step > oLis.length-1 ? 0 : step;
        for(var i=0; i<oLis.length; i++){
            var cur = oLis[i];
            i === tempStep ? cur.className = 'bg' : cur.className = '';
        }
    }


    ~function (){
        for(var i=0; i<oLis.length; i++){
            var cur = oLis[i];
            cur.index = i;
            cur.onmouseover = function (){
                step = this.index;
                changeTip();
                zhufengAnimate(inner,{left: -step*1348},0);
            }
        }
    }();
    inner.onmouseover= function () {
        window.clearInterval(autoTimer);
    }
    inner.onmouseout = function () {
        autoTimer = window.setInterval(autoMove, 2000);
    }
}()
/*Ö÷ÂÖ²¥Í¼Íê±Ï*/
/****µÚ¶þÆÁÂÖ²¥Í¼******/
!function (){
    var banner2 = document.getElementById('banner2');
    var inner2 = document.getElementById('inner2');
    var bannerLeft = document.getElementById('bannerLeft');
    var bannerRight = document.getElementById('bannerRight');



  count=null;
    var autoTimer = window.setInterval(autoMove,2000);
    var step = 0;
    function autoMove(){
        if(step >= 2){
            step = 0;
            utils.setCss(inner2,'left',0);

        }
        step++;
        zhufengAnimate(inner2,{left: -step*380},0);
    }


    banner2.onmouseover= function (){
        window.clearInterval(autoTimer);
        bannerLeft.style.display = 'block';
        bannerRight.style.display = 'block';
    }
    banner2.onmouseout = function (){
        autoTimer = window.setInterval(autoMove,2000);
        bannerLeft.style.display = 'none';
        bannerRight.style.display = 'none';
    }


    //?????????
    bannerRight.onclick = autoMove;
    bannerLeft.onclick = function (){
        if(step <= 0){
            step = 2;
            utils.setCss(inner2,'left',-step*380);
        }
        step--;
        zhufengAnimate(inner2,{left:-step*380},0);
    }

}()
/****µÚÈýÆÁÂÖ²¥Í¼******/
!function (){
    var banner3 = document.getElementById('banner3');
    var inner3 = document.getElementById('inner3');
    var outerLeft = document.getElementById('outerLeft');
    var outerRight = document.getElementById('outerRight');



    count=null;
    var autoTimer = window.setInterval(autoMove,2000);
    var step = 0;
    function autoMove(){
        if(step >= 2){
            step = 0;
            utils.setCss(inner3,'left',0);

        }
        step++;
        zhufengAnimate(inner3,{left: -step*400},0);
    }


    banner3.onmouseover= function (){
        window.clearInterval(autoTimer);
        outerLeft.style.display = 'block';
        outerRight.style.display = 'block';
    }
    banner3.onmouseout = function (){
        autoTimer = window.setInterval(autoMove,2000);
        outerLeft.style.display = 'none';
        outerRight.style.display = 'none';
    }


    //?????????
    outerRight.onclick = autoMove;
    outerLeft.onclick = function (){
        if(step <= 0){
            step = 2;
            utils.setCss(inner3,'left',-step*400);
        }
        step--;
        zhufengAnimate(inner3,{left:-step*400},0);
    }

}()
/****µÚËÄÆÁÂÖ²¥Í¼******/
!function (){
    var banner4 = document.getElementById('banner4');
    var inner4 = document.getElementById('inner4');
    var outerLeft4 = document.getElementById('outerLeft4');
    var outerRight4 = document.getElementById('outerRight4');



    count=null;
    var autoTimer = window.setInterval(autoMove,2000);
    var step = 0;
    function autoMove(){
        if(step >= 2){
            step = 0;
            utils.setCss(inner4,'left',0);

        }
        step++;
        zhufengAnimate(inner4,{left: -step*400},0);
    }


    banner4.onmouseover= function (){
        window.clearInterval(autoTimer);
        outerLeft4.style.display = 'block';
        outerRight4.style.display = 'block';
    }
    banner4.onmouseout = function (){
        autoTimer = window.setInterval(autoMove,2000);
        outerLeft4.style.display = 'none';
        outerRight4.style.display = 'none';
    }


    //?????????
    outerRight4.onclick = autoMove;
    outerLeft4.onclick = function (){
        if(step <= 0){
            step = 2;
            utils.setCss(inner4,'left',-step*400);
        }
        step--;
        zhufengAnimate(inner4,{left:-step*400},0);
    }

}()
/*µÚ5ÆÁÂÖ²¥Í¼*/
!function (){
    var banner5 = document.getElementById('banner5');
    var inner5 = document.getElementById('inner5');
    var outerLeft5= document.getElementById('outerLeft5');
    var outerRight5 = document.getElementById('outerRight5');



    count=null;
    var autoTimer = window.setInterval(autoMove,2000);
    var step = 0;
    function autoMove(){
        if(step >= 2){
            step = 0;
            utils.setCss(inner5,'left',0);

        }
        step++;
        zhufengAnimate(inner5,{left: -step*400},0);
    }


    banner5.onmouseover= function (){
        window.clearInterval(autoTimer);
        outerLeft5.style.display = 'block';
        outerRight5.style.display = 'block';
    }
    banner5.onmouseout = function (){
        autoTimer = window.setInterval(autoMove,2000);
        outerLeft5.style.display = 'none';
        outerRight5.style.display = 'none';
    }


    outerRight5.onclick = autoMove;
    outerLeft5.onclick = function (){
        if(step <= 0){
            step = 2;
            utils.setCss(inner5,'left',-step*400);
        }
        step--;
        zhufengAnimate(inner5,{left:-step*400},0);
    }

}()
/*µÇÂ¼Ò³*/
var signIn=document.getElementById("signIn");
var inter=document.getElementById("inter");
var close=document.getElementById("close");
signIn.onclick=function(){
    utils.setCss(inter,"display",'block')
}
close.onclick=function(){
    utils.setCss(inter,"display","none")
}
/*×¢²áÒ³*/
var register=document.getElementById("register");
var registerIn=document.getElementById("registerIn");
var shut=document.getElementById("shut");
register.onclick=function(){
    utils.setCss(registerIn,"display",'block')
}
shut.onclick=function(){
    utils.setCss(registerIn,"display","none")
}




































