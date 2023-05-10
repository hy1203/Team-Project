// 박스 클릭 이벤트
const boxes = document.querySelectorAll('.box');
let clickedBox;
let gameEnded = false;

boxes.forEach(box => {
  box.addEventListener('click', () => {
    if (gameEnded) {
      alert('이미 결과가 나왔습니다!');
      return;
    }
    // 박스 랜덤 선택
    const randomIndex = Math.floor(Math.random() * boxes.length);
    const selectedBox = boxes[randomIndex];
    // 결과 출력
    if (selectedBox === box) {
      box.style.backgroundColor = 'green';
      document.querySelector('#result').textContent = `축하합니다! 무료 아이스크림 쿠폰을 받으셨습니다!`;
    } else if (selectedBox !== box && selectedBox !== boxes[1]) {
      box.style.backgroundColor = 'red';
      document.querySelector('#result').textContent = '아쉽게도 꽝입니다. 다시 도전해주세요!';
    } else {
      box.style.backgroundColor = 'yellow';
      document.querySelector('#result').textContent = '할인권을 받으셨습니다. 쇼핑을 즐기세요!';
    }

    // 게임 종료
    gameEnded = true;
  });
});

// 팝업창을 띄울 버튼 요소를 가져옵니다.
const openPopupButton = document.querySelector('#open-popup');
// 버튼을 클릭하면 팝업창을 띄우는 이벤트를 추가합니다.
openPopupButton.addEventListener('click', () => {
    // 팝업창의 크기를 지정합니다.
    const width = 600;
    const height = 900;
    // 팝업창의 위치를 계산합니다.
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    // 팝업창을 띄웁니다.
    window.open('game.html', '게임', `width=${width}, height=${height}, left=${left}, top=${top}, resizable=no`);
});







