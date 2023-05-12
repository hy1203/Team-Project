//dom으로 요소 가져오기
const search=document.querySelector('#search');
const menu=document.querySelector('#menuBT');
const menuList = document.querySelector('.menuindex');
let isMenuVisible = false;
let table = document.getElementsByClassName('.table-data');
const pdnameInput = document.querySelector('#pdname');
const checkboxes = document.querySelectorAll('.checktext');

//입력값 input이 눌리면 이벤트 시작
pdnameInput.addEventListener('input', function() {
  const searchKeyword = pdnameInput.value.trim(); //이름값을 공백없이 가져온다.
  
  const rows = document.querySelectorAll('#table-data tbody tr'); //row에 tr값을 모두 가져온다.
  rows.forEach(row => { //row의 값만큼 반복
    const productName = row.querySelector('.title').innerText;
    const allergy = row.querySelector('.Allergic').innerText;
    const shouldDisplay = productName.includes(searchKeyword);    
    if (shouldDisplay) {
      const allergyList = allergy.split(', ');
      let output = `${productName}: `;
      allergyList.forEach(item => {
        output += `${item}, `;
      });
      output = output.slice(0, -2); // 마지막 쉼표 및 공백 제거
      const resultContainer = document.createElement('div');
      resultContainer.innerText = output;
      row.appendChild(resultContainer);
    } else {
      const resultContainer = row.querySelector('div');
      if (resultContainer) {
        row.removeChild(resultContainer);
      }
    }
  });
});

//체크박스를 처리해주는 forEach
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const checkedValues = [];
    
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkedValues.push(checkbox.value);
      }
    });
    
    const rows = document.querySelectorAll('#table-data tbody tr');
    
    rows.forEach(row => {
      const productName = row.querySelector('.title').innerText;
      const allergy = row.querySelector('.Allergic').innerText;
      const allergyList = allergy.split(', ');
      let shouldDisplay = true;
      
      checkedValues.forEach(value => {
        if (!allergyList.includes(value)) {
          shouldDisplay = false;
        }
      });
      
      const resultContainer = row.querySelector('div');
      
      if (shouldDisplay) {
        if (resultContainer) {
          resultContainer.style.display = 'block';
        } else {
          const newResultContainer = document.createElement('div');
          newResultContainer.innerText = `${productName}: ${allergy}`;
          row.appendChild(newResultContainer);
        }
      } else {
        if (resultContainer) {
          resultContainer.style.display = 'none';
        }
      }
    });
  });
});

//serch버튼을 눌렀을때 이벤트 실행.
search.addEventListener('click',function(){
  const pdname=document.getElementById('pdname').value;
  console.log(pdname);
  const checktext=document.querySelectorAll('.checktext');
  const table = document.querySelector('table');
  console.log(table);
  const tablebody=document.querySelector('tbody'); 
  console.log(tablebody);
  const tabletr=document.querySelectorAll('tr');
  const tabletd= document.querySelectorAll('td'); 
  const searchval =document.querySelector('.searchval');
  let result = '';

  for(let i=0; i<=35; i++){ //row의 전체 길이가 35이다. table의 row의 길이만큼 돌려준다.
    const productName = tabletr[i].children[0].innerText; //모든 row를 탐색하며 테이블 row안의 0번째===아이스크림 이름을 가져옴.
    const allergy = tabletr[i].children[7].innerText;//모든 row를 탐색하며 테이블 row안의 7번째===성분값을 가져옴.
    let shouldDisplay = true; 

    if (productName.includes(pdname)) { //row를 탐색하며 pdname(아이스크림 이름)이 포함되어있다면
      checktext.forEach(checkbox => { //모든 체크박스의 값을 탐색 
        if (checkbox.checked && !allergy.includes(checkbox.value)) { //체크박스 값이 선택됐을때고, 성분값안에 체크박스의 내용(값)이 없을 경우에만 false
          shouldDisplay = false; 
        }
      });

      if (shouldDisplay) {//체크박스 값이 선택됐을때고, 성분값안에 체크박스의 내용(값)이 있을 경우에
        result += tabletr[i].innerText + '<br>'; //tr의 td값을 text로 가져온다. 여러개가 있을 수도 있으니 +=사용
      }
    }
  }

  if (result === '') { //값이 입력되지 않았다면
    searchval.innerHTML = '검색 결과가 없습니다.';
  } else {
    searchval.innerHTML = result;
  }
});


//메뉴가 클릭됐을떄 이벤트
//html에 작성되어있는 table의 값을 메뉴를 클릭했을때 순차적으로 뽑아 tr,td의값  넣어주기.
menu.addEventListener('click',function(){

  if (isMenuVisible) {
    menuList.innerHTML = ''; // 출력값 초기화
  } else {
    //html으로 작성되어있는 기존 table을 가져온다.
    const table = document.getElementById('table-data'); 
    const tableHeaders = table.querySelectorAll('th');
    const tableRows = table.querySelectorAll('tr');
    let output = '';

    // 테이블헤더값가져오기
    let headerRow = '<table>';
    headerRow += '<tr>';
    for (let i = 0; i < tableHeaders.length; i++) {
      headerRow += '<th>' + tableHeaders[i].innerText + '</th>';
    }
    headerRow += '</tr>';
    output += headerRow;

    // 데이터 row테이블 만들기
    for (let i = 1; i < tableRows.length; i++) {
      const tableData = tableRows[i].querySelectorAll('td');
      let rowData = '<tr>';
      for (let j = 0; j < tableData.length; j++) {
        rowData += '<td>' + tableData[j].innerText + '</td>';
      }
      rowData += '</tr>';
      output += rowData;
    }

    output += '</table>';

    menuList.innerHTML = output;
  }

  isMenuVisible = !isMenuVisible; // 상태 변경
});
