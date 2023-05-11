
//client rolling banner
window.onload = function () {
    var bannerLeft = 0;
    var first = 1;
    var last;
    var imgCnt = 0;
    var $img = $(".banner_wraper img");
    var $first;
    var $last;
    $img.each(function () {   // 5px 간격으로 배너 처음 위치 시킴
        $(this).css("left", bannerLeft);
        bannerLeft += $(this).width() + 5;
        $(this).attr("id", "banner" + (++imgCnt));  // img에 id 속성 추가
    });
    if (imgCnt > 5) { //배너 9개 이상이면 이동시킴
        last = imgCnt;
        setInterval(function () {
            $img.each(function () {
                $(this).css("left", $(this).position().left - 1); // 1px씩 왼쪽으로 이동
            });
            $first = $("#banner" + first);
            $last = $("#banner" + last);
            if ($first.position().left < -200) {    // 제일 앞에 배너 제일 뒤로 옮김
                $first.css("left", $last.position().left + $last.width() + 5);
                first++;
                last++;
                if (last > imgCnt) { last = 1; }
                if (first > imgCnt) { first = 1; }
            }
        }, 50);   //여기 값을 조정하면 속도를 조정할 수 있다.(위에 1px 이동하는 부분도 조정하면 
        //깔끔하게 변경가능하다           
    }
}

$('.closeBtn').click(function () {
    $('.modal').addClass('hidden');
})
$('.bg').click(function () {
    $('.modal').addClass('hidden');
})
$('.move_cart').click(function () {
    $(location).attr('href', './shoppingcart.html');
})
var menunum =0;
$('.buy').click(function() {
    const num = $('.count').val();
    if(num >5){
        alert('담을 수 있는 갯수를 초과하였습니다.');
        $('.count').val('1');
    }
    else{
        menunum = menunum+Number(num);
        if(menunum >15){
            alert('구매하실 수 있는 갯수를 초과했습니다.');
            menunum = menunum-Number(num);
        }else{
            alert(`${num}개가 정상적으로 담겼습니다.`);
        $('.count').val('1');
        $('.cart').attr('data-cart',`${menunum}`);
        } 
    } 
})
