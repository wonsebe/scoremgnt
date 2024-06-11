
studentList= JSON.parse(localStorage.getItem('studentList'));


let loginNo= sessionStorage.getItem('loginNo');

StuInfoPrint();

function StuInfoPrint(){
  console.log('stuInfoPrint');

  if(studentList == null){studentList=[]}
      //찾기
      for(let i=0; i< studentList.length; i++){
          if(studentList[i].no ==studentList){
          document.querySelector('#no').innerHTML = studentList[i].no;
          document.querySelector('#name').innerHTML = studentList[i].name;
          document.querySelector('#sInfo').innerHTML = studentList[i].sInfo; 
          document.querySelector('#phone').innerHTML = studentList[i].phone;
          document.querySelector('#pw').innerHTML = studentList[i].pw;
          return;
      }
   }

}


// localStorage에서 데이터 가져오기
var studentList = JSON.parse(localStorage.getItem('studentList')) || [];

// 테이블에 데이터 추가
var table = document.getElementById('Ss');
studentList.forEach(function(student) {
var row = table.insertRow();
var noCell = row.insertCell(0);
var nameCell = row.insertCell(1);
var sInfoCell = row.insertCell(2);
var phoneCell = row.insertCell(3);
var pwCell = row.insertCell(4);
var buttonCell = row.insertCell(5);
noCell.textContent = student.no;
nameCell.textContent = student.name;
sInfoCell.textContent = student.sInfo;
phoneCell.textContent = student.phone;
pwCell.textContent = student.pw;
var deleteButton = document.createElement('button');
deleteButton.textContent = '학생탈퇴';
deleteButton.onclick = function() {
  deleteRow(this);
};
buttonCell.appendChild(deleteButton);
});

// 테이블에서 행 삭제 함수
function deleteRow(btn) {
var row = btn.parentNode.parentNode;
var rowIndex = row.rowIndex - 1; // 테이블 헤더를 제외한 데이터의 인덱스
let msgg= alert('학생정보를 지우시겠습니까?'); console.log(msgg);
// 배열에서 해당 행의 데이터 삭제
studentList.splice(rowIndex, 1);

// localStorage 업데이트
localStorage.setItem('studentList', JSON.stringify(studentList));

// 테이블에서 해당 행 삭제
row.parentNode.removeChild(row);
}

function __update(번호){
    
}


