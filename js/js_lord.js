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

function web(x){
    if(x == 1){
        location.href = "../index.html";
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

// window.onscroll = function() {
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     b1.style.opacity='1';
//     setTimeout(function(){
//         b1.style.opacity='0';
//     },'1');
    
//   }