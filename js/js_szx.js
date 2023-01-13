// window.onscroll = function() {side_Bar()};
// function side_Bar(){
//     var a = document.getElementById('简介').clientHeight;
//     if(a< 100)
//     {
//         document.getElementById('side_简介').style.background="black";
//         document.getElementById('side_简介').style.borderLeft="aquamarine";
//     }
//     else
//     {
//         document.getElementById('side_简介').style.background="none";
//     }
// }
// const catalogTrack = () => {
// 	let $currentHeading = $('h1');
// 	for (let heading of $('简介,剧情概要,制作成员,CV,票房,获奖,传送门')) {
// 		const $heading = $(heading);
// 		if ($heading.offset().top - $(document).scrollTop() > 20) {
// 			break;
// 		}
// 		$currentHeading = $heading;
        
// 	}
// };
// const anchorName = $currentHeading.attr('side_简介,side_剧情概要,side_制作成员,side_CV,side_票房,side_获奖,side_传送门');
// const $catalog = $(`.catalog[name="${anchorName}"]`);
// if (!$catalog.hasClass('catalog-active')) {
// 	$('.catalog-active').removeClass('catalog-active');
// 	$catalog.addClass('catalog-active');
// }
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