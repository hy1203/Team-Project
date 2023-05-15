function checkHtml(){
    const html = document.querySelector('.href');
}

const tasteCombLinks = document.querySelectorAll('.taste-comb a');
const currentUrl = window.location.href;

for (let i = 0; i < tasteCombLinks.length; i++) {
  const link = tasteCombLinks[i];
  if (link.href === currentUrl) {
    link.parentElement.classList.add('active');
    break;
  }else{
    link.parentElement.classList.remove('active');
  }
}

const tasteLink = document.querySelectorAll('.taste-link');
for (const i of tasteLink) {
  if (i) {
    i.addEventListener('click', event => {
      event.preventDefault(); // 링크의 기본 동작을 막음

      const currentUrl = window.location.href;
      const targetUrl = i.href;

      if (currentUrl !== targetUrl) {
        const tasteSection = document.getElementById('taste');
        const tasteSectionHeight = tasteSection.offsetHeight;

        // 스타일 변경
        tasteSection.style.transition = 'transform 1s ease-in-out';
        tasteSection.style.transform = `translateY(${tasteSectionHeight}px)`;

        // 페이지 이동
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 1000);
      }
    });
  }
}
const downBtn = document.querySelector('#taste-btn');
if (downBtn) {
  downBtn.addEventListener('click', () => {
    const iceCreams = document.querySelectorAll('.ice-img');
    const selectedIceCreams = [];
    while (selectedIceCreams.length < 3) {
      const randomIndex = Math.floor(Math.random() * 18) + 1;
      if (!selectedIceCreams.includes(randomIndex)) {
        selectedIceCreams.push(randomIndex);
      }
    }
    for (let i = 0; i < iceCreams.length; i++) {
      const iceCreamIndex = selectedIceCreams[i];
      const iceCreamImg = `/image/ice_${iceCreamIndex}.png`;
      const iceCreamTitle = products[iceCreamIndex - 1].title;
      iceCreams[i].setAttribute('src', iceCreamImg);
      const navLink = document.querySelectorAll('.ice-text')[i];
      navLink.textContent = iceCreamTitle;
    }
  });
}


var products = [
    {id: 1, img: "/image/1.png", price: 5000, title: "나무에 달린 딸기"}, 
    {id: 2, img: "/image/2.png", price: 5500, title: "톰과 체리"}, 
    {id: 3, img: "/image/3.png", price: 6000, title: "닐라닐라 바닐라"},
    {id: 4, img: "/image/4.png", price: 6000, title: "꾸덕꾸덕 황치즈"},
    {id: 5, img: "/image/5.png", price: 5000, title: "바나나킥 갈아넣은 바나나"},
    {id: 6, img: "/image/6.png", price: 5000, title: "아메리카노 말고 바닐라 라떼"},
    {id: 7, img: "/image/7.png", price: 5000, title: "요거트"},
    {id: 8, img: "/image/8.png", price: 5000, title: "녹차마루"},
    {id: 9, img: "/image/9.png", price: 6000, title: "누룽지"},
    {id: 10, img: "/image/10.png", price: 6000, title: "캐러멜 많이 주세요"},
    {id: 11, img: "/image/11.png", price: 5000, title: "진짜 초코"},
    {id: 12, img: "/image/12.png", price: 6000, title: "상큼 터지는 레몬"},
    {id: 13, img: "/image/13.png", price: 6500, title: "홍시 맛이 나서.."},
    {id: 14, img: "/image/14.png", price: 6000, title: "초코시럽 많이 주세요"},
    {id: 15, img: "/image/15.png", price: 7000, title: "콕콕콕 체리콕~"},
    {id: 16, img: "/image/16.png", price: 6000, title: "깨 떨어지는"},
    {id: 17, img: "/image/17.png", price: 7000, title: "바닐라에 뿌려진 초코"},
    {id: 18, img: "/image/18.png", price: 7000, title: "겨자맛"}
    
];