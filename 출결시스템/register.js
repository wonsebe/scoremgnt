
let studentList=[
    {studentNum : 0, studentName : "admin", studentCode : 99999, contact : 99999999, pw : 99999999},
]; //학생들 배열

localStorage.getItem('studentList', JSON.stringify(studentList));

function signup(){
    console.log("signup()");
    //호출
    studentList= JSON.parse(localStorage.getItem('studentList'));
    if(studentList ==null){studentList= [];}
    //1. html 에서 입력받은 데이터 가져오기
    let sInfo=document.querySelector('#sInfo').value;
    let name=document.querySelector('#name').value;
    let phone=document.querySelector('#phone').value;
    let pw=document.querySelector('#pw').value;
    
   



    //유효성검사
     //1. 아이디와 비밀번호는 5글자 이상만 가능
          //2. 이름은 3글이상 이상 만 가능
          //3. 전화번호8글자이상

     
     if(sInfo.length <5  ){alert('학번은 5글자 이상 넣어주세요.'); return;}
     if(name.length <3){alert('학생등록실패! 이름은 3글자 이상만 넣어주세요'); return;}
     if(phone.length < 8 || isNaN(phone)){alert('연락처는 -제외한 8글자 이상 입력가능합니다.'); return;}

     for(let i = 0 ; i < studentList.length; i++){
        if(studentList[i].id == id){alert('등록된 학번 입니다.'); return;}
    }
    for(let member of studentList){
        if(member.phone == phone){alert('사용중인 전화번호 입니다.'); return;}
    }

      //만약에 회원목록에 회원이 없으면 1 있으면 마지막회원의 번호 +1
      let no= studentList.length == 0? 1: studentList[studentList.length-1].no +1 //마지막 번호에 부여
      //객체화
      let student= {
        studentNum : no , studentCode : sInfo, studentName : name, contact: phone, pw:pw }; console.log(student);


    //4. 저장
    studentList.push(student);

    //* localStorage 저장
    localStorage.setItem('studentList', JSON.stringify(studentList));

    alert('학생등록완료!'); location.href='stutable.html';

}

