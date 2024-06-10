

  //현재 로그인된 회원번호를 가지고 회원목록에서 동일한 회원객체 찾기
  studentList= JSON.parse(localStorage.getItem('studentList'));


  let loginNo= sessionStorage.getItem('loginNo');
StuInfoPrint();
function StuInfoPrint(){
    console.log('stuInfoPrint');

    if(studentList == null){studentList=[]}
        //찾기
        for(let i=0; i< studentList.length; i++){
            if(studentList[i].no ==loginNo){
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



editButton.onclick = function() {
  var editButton = document.createElement('button');
editButton.textContent = '학생정보수정';
  editRow(row);
};
editCell.appendChild(editButton);

function edit(row) {
    var noCell = row.cells[0];
    var nameCell = row.cells[1];
    var sInfoCell = row.cells[2];
    var phoneCell = row.cells[3];
    var pwCell = row.cells[4];

    var noInput = document.createElement('input');
    var nameInput = document.createElement('input');
    var sInfoInput = document.createElement('input');
    var phoneInput = document.createElement('input');
    var pwInput = document.createElement('input');

    noInput.value = noCell.textContent;
    nameInput.value = nameCell.textContent;
    sInfoInput.value = sInfoCell.textContent;
    phoneInput.value = phoneCell.textContent;
    pwInput.value = pwCell.textContent;

    noCell.textContent = '';
    nameCell.textContent = '';
    sInfoCell.textContent = '';
    phoneCell.textContent = '';
    pwCell.textContent = '';
    noCell.appendChild(noInput);
    nameCell.appendChild(nameInput);
    sInfoCell.appendChild(sInfoInput);
    phoneCell.appendChild(phoneInput);
    pwCell.appendChild(pwInput);
    nameInput.focus();
  
    var editButton = row.cells[2].getElementsByTagName('button')[0];
    editButton.textContent = '저장';
    editButton.onclick = function() {
      saveRow(row, noInput.value, nameInput.value, sInfoInput.value, phoneInput.value, pwInput.value);
    };
  }
  
  // 저장 함수
  function saveRow(row, newNo, newName, newsInfo, newphone, newpw) {
    var rowIndex = row.rowIndex - 1; // 테이블 헤더를 제외한 데이터의 인덱스
  
    // 배열에서 해당 행의 데이터 수정
    studentList[rowIndex].no = newNo;
    studentList[rowIndex].name = newName;
    studentList[rowIndex].sInfo = newsInfo;
    studentList[rowIndex].phone = newphone;
    studentList[rowIndex].pw = newpw;
  
    // localStorage 업데이트
    localStorage.setItem('studentList', JSON.stringify(studentList));
  
    // 테이블 업데이트
    row.cells[0].textContent = newNo;
    row.cells[1].textContent = newName;
    row.cells[2].textContent = newsInfo;
    row.cells[3].textContent = newphone;
    row.cells[4].textContent = newpw;
  
    // 수정 버튼 초기화
    var editButton = row.cells[2].getElementsByTagName('button')[0];
    editButton.textContent = '수정';
    editButton.onclick = function() {
      editRow(row);
    };
  }