// //버튼 search 가져옴
const search=document.querySelector('#search');


const menu=document.querySelector('#menuBT');
const menuList = document.querySelector('.menuindex');
let isMenuVisible = false;
let table = document.getElementsByClassName('.table-data');




// //modal 가져오기
// const modal = document.querySelector('.mol');

// //close 가져오기
// const close = document.querySelector('.modla_closeBtn');

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


//클릭시 값 가져오기
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
for(let i=0; i<=35; i++){ 
  rowval=tabletr[i].innerText;
  for(let j=0; j<11; j++){
            let serchvalist='';
              checkval=checktext[j].value;
                if(((tabletr[i].children[0].innerText)==pdname && checktext[j].checked)){ 

                  console.log(`${searchval}`);
                  

                  if((tabletr[i].children[7].innerText).includes(checkval)){
                    // searchval.innerHTML=rowval.toString();
                    // console.log(searchval.innerHTML);
                    console.log(rowval.toString());
                    
                  }else if(!((tabletr[i].children[7].innerText).includes(checkval))){ //입력한 제목과 체크한 성분이 일치하지 않다면 x
                    
                    
                    console.log( searchval.innerHTML='성분이 포함되지 않았습니다!');
    
                
                  }
                }else if(((tabletr[i].children[0].innerText)==pdname)){
                  let serchvalist='';
                  searchval.innerHTML=rowval.toString()+'</br>';
                  serchvalist=searchval.innerHTML;
                  console.log(serchvalist);

                }else if(checktext[j].checked){

                    if((tabletr[i].children[7].innerText).includes(checkval)){
                      let serchvalist='';
                        searchval.innerHTML+=rowval.toString()+'</br>';
                        console.log(searchval.innerHTML)
                        serchvalist+=searchval.innerHTML;
                        console.log(serchvalist);


                   
                    }
                }
          }
  }
});

menu.addEventListener('click',function(){

  // const tabletr=document.querySelectorAll('tr');
  // for(let i=0; i<=35; i++){ 
  //      //입력한 이름의 제품명
  //     //  let trname= tabletr[i].children[0].innerText;
  //      //tr의 모든 영양 성분값
  //     //  let tringredient= tabletr[i].children[7].innerText;
  //         // table의  해당 row값 출력
          
  //         rowval=tabletr[i].innerText;

  //         console.log(rowval);
  //         // <button id="menuBT">
  //         // 메뉴판
  //         // <div class="menuindex">

  //           let menuList=document.querySelector('.menuindex');
  //           console.log(menuList.innerText+=rowval);
    
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


  //거의 확정코드!
//   const table = document.getElementById('table-data');
//   const tableHeaders = table.querySelectorAll('th');
//   const tableRows = table.querySelectorAll('tr');
//   let output = '';

//   // Create table header row
//   let headerRow = '<table>';
//   headerRow += '<tr>';
//   for (let i = 0; i < tableHeaders.length; i++) {
//     headerRow += '<th>' + tableHeaders[i].innerText + '</th>';
//   }
//   headerRow += '</tr>';
//   output += headerRow;

//   // Create table data rows
//   for (let i = 1; i < tableRows.length; i++) {
//     const tableData = tableRows[i].querySelectorAll('td');
//     let rowData = '<tr>';
//     for (let j = 0; j < tableData.length; j++) {
//       rowData += '<td>' + tableData[j].innerText + '</td>';
//     }
//     rowData += '</tr>';
//     output += rowData;
//   }

//   output += '</table>';

//   let menuList = document.querySelector('.menuindex');
//   menuList.innerHTML = output;
// });




  // var chunkSize = 8; // 잘라낼 크기
  // var slicedArray = [];
  // for (var k = 0; k < cellValues.length; k += chunkSize) {
  //   var chunk = cellValues.slice(k, k + chunkSize);
  //   slicedArray.push(chunk);
  // }
  
  // let trid=document.getElementById('name');
  // trid.innerText=(`${slicedArray[0]}`);
  // trid.innerText=(`${slicedArray[1]}`);
  // trid.innerText=(`${slicedArray[2]}`);
  // trid.innerText=(`${slicedArray[3]}`);
  // // console.log(`${slicedArray[0]}`); // i 7개씩 잘라진 배열 출력
//   }
// });







