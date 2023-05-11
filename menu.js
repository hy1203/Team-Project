var products = [
    { id: 0, img: "./image/1.png", price: 7000, title: "나무에 달린 딸기" },
    { id: 1, img: "./image/2.png", price: 8000, title: "톰과 체리" },
    { id: 2, img: "./image/3.png", price: 6000, title: "닐라닐라 바닐라" },
    { id: 3, img: "./image/4.png", price: 6000, title: "꾸덕꾸덕 황치즈" },
    { id: 4, img: "./image/5.png", price: 6000, title: "바나나킥 갈아넣은 바나나" },
    { id: 5, img: "./image/6.png", price: 6000, title: "아메리카노 말고 바닐라라떼" },
    { id: 6, img: "./image/7.png", price: 6000, title: "요거트" },
    { id: 7, img: "./image/8.png", price: 6000, title: "녹차마루" }
];
products.forEach((a, i) => {var 템플릿 = `<div class="col-sm-3 font3" ><img src="${products[i].img}" class="w-78 menuimg openbtn${i}" style="width: 270px; border-radius: 30px 30px 30px 30px;"><h5 class="font4 name${i}">${products[i].title}</h5><p class="font4">가격 : ${products[i].price}</p></div>`;$('.row').append(템플릿)});
for (let i = 0; i < 8; i++) {
    $(`.openbtn${i}`).click(function () {
        $('.modal').removeClass('hidden');
        $('.modalBox').css('background-image', `url(./image/${i + 1}.png)`);
    })
}
$('.closeBtn').click(function () {
    $('.modal').addClass('hidden');
})
$('.move_cart').click(function () {
    $(location).attr('href', './shoppingcart.html');
})
var menunum =0;
$('.buy').click(function() {
    const num = $('.count').val();
    menunum = menunum+Number(num);
    alert(`${num}개가 정상적으로 담겼습니다.`);
    $('.count').val('1');
    $('.cart').attr('data-cart',`${menunum}`);
})

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
    if (imgCnt > 5) {                //배너 9개 이상이면 이동시킴
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
};
