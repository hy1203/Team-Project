// //버튼 search 가져옴
const search=document.querySelector('#search');
const menu=document.querySelector('#menuBT');
const menuList = document.querySelector('.menuindex');
let isMenuVisible = false;
let table = document.getElementsByClassName('.table-data');
const pdnameInput = document.querySelector('#pdname');
const checkboxes = document.querySelectorAll('.checktext');

pdnameInput.addEventListener('input', function() {
  const searchKeyword = pdnameInput.value.trim();
  const rows = document.querySelectorAll('#table-data tbody tr');
  rows.forEach(row => {
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

  for(let i=0; i<=35; i++){ 
    const productName = tabletr[i].children[0].innerText;
    const allergy = tabletr[i].children[7].innerText;
    let shouldDisplay = true;

    if (productName.includes(pdname)) {
      checktext.forEach(checkbox => {
        if (checkbox.checked && !allergy.includes(checkbox.value)) {
          shouldDisplay = false;
        }
      });

      if (shouldDisplay) {
        result += tabletr[i].innerText + '<br>';
      }
    }
  }

  if (result === '') {
    searchval.innerHTML = '검색 결과가 없습니다.';
  } else {
    searchval.innerHTML = result;
  }
});


menu.addEventListener('click',function(){
  if (isMenuVisible) {
    menuList.innerHTML = ''; // 출력값 초기화
  } else {
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







