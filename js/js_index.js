window.onscroll = function() {scrollFunction()};
 
function scrollFunction() 
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        document.getElementById("top").style.display = "block";
    } 
    else {
        document.getElementById("top").style.display = "none";
    }
}
 
function topFunction() 
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let nav = document.getElementsByClassName('nav');
let tool_bar = document.getElementsByClassName('toolBar');
tool_bar.onclick = function () {tb_c()};
    function tb_c(){
            nav[0].style.display = 'flex';
            nav[0].style.opacity = '0.75';
            nav[0].classList.add('NAV_2-');
            nav[0].classList.remove('NAV_3-');

            setTimeout(function (){
                tool_bar[0].style.display = 'none';
            },500);
            tool_bar[0].style.opacity = '0';
            tool_bar[0].classList.add('NAV_3-');
            tool_bar[0].classList.remove('NAV_2-');
}
    function tb_cc(){
        setTimeout(function (){
            nav[0].style.display = 'none';
        },500);
        nav[0].style.opacity = '0';
        nav[0].classList.add('NAV_3-');
        nav[0].classList.remove('NAV_2-');

        tool_bar[0].style.display = 'flex';
        tool_bar[0].style.opacity = '0.75';
        tool_bar[0].classList.add('NAV_2-');
        tool_bar[0].classList.remove('NAV_3-');
}

var ture_or_false_1 = 0;
var ture_or_false_2 = 0;
var ture_or_false_3 = 0;
var ture_or_false_4 = 0;
var ture_or_false_5 = 0;
function my_music(x){
    let music =  document.getElementsByClassName('music');
    let sign1 = document.getElementsByClassName('my_icon_2_1');
    let sign2 = document.getElementsByClassName('my_icon_2_2');

        if(x == 1){
            if(ture_or_false_1 == 0){
                music[0].play();
                ture_or_false_1 = 1;
                sign1[0].style.display = 'none';
                sign2[0].style.display = 'flex';
            }
            else{
                music[0].pause();
                ture_or_false_1 = 0;
                sign1[0].style.display = 'flex';
                sign2[0].style.display = 'none';
            }
        }
        if(x == 2){
            if(ture_or_false_1 == 0){
                music[1].play();
                ture_or_false_1 = 1;
                sign1[1].style.display = 'none';
                sign2[1].style.display = 'flex';
            }
            else{
                music[1].pause();
                ture_or_false_1 = 0;
                sign1[1].style.display = 'flex';
                sign2[1].style.display = 'none';
            }
        }
        if(x == 3){
            if(ture_or_false_1 == 0){
                music[2].play();
                ture_or_false_1 = 1;
                sign1[2].style.display = 'none';
                sign2[2].style.display = 'flex';
            }
            else{
                music[2].pause();
                ture_or_false_1 = 0;
                sign1[2].style.display = 'flex';
                sign2[2].style.display = 'none';
            }
        }
        if(x == 4){
            if(ture_or_false_1 == 0){
                music[3].play();
                ture_or_false_1 = 1;
                sign1[3].style.display = 'none';
                sign2[3].style.display = 'flex';
            }
            else{
                music[3].pause();
                ture_or_false_1 = 0;
                sign1[3].style.display = 'flex';
                sign2[3].style.display = 'none';
            }
        }
        if(x == 5){
            if(ture_or_false_1 == 0){
                music[4].play();
                ture_or_false_1 = 1;
                sign1[4].style.display = 'none';
                sign2[4].style.display = 'flex';
            }
            else{
                music[4].pause();
                ture_or_false_1 = 0;
                sign1[4].style.display = 'flex';
                sign2[4].style.display = 'none';
            }
        }
}


function web(x){
    if(x == 1){
        location.href = "/index.html";
    }
    if(x == 2){
        location.href = "/html/lord.html";
    }
    if(x == 3){
        location.href = "/html/heji.html";
    }
    if(x == 4){
        location.href = "/html/szx.html";
    }
    if(x == 5){
        location.href = "/html/xmyrz.html";
    }
    if(x == 6){
        location.href = "/html/hzs.html";
    }
    if(x == 7){
        location.href = "/html/whyq.html";
    }
    if(x == 8){
        location.href = "/html/baogao.html";
    }
}