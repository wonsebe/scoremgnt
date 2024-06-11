logincheck();
logincheck2();

function signup(){
    console.log("signup()");
    //호출
    student= JSON.parse(localStorage.getItem('student'));
    if(student ==null){student= [];}
    //1. html 에서 입력받은 데이터 가져오기
    let sInfo=document.querySelector('#sInfo').value;
    let name=document.querySelector('#name').value;
    let phone=document.querySelector('#phone').value;
    let pw=document.querySelector('#pw').value;

    //조건
     //1. 아이디와 비밀번호는 5글자 이상만 가능
          //2. 이름은 3글이상 이상 만 가능
          //3. 전화번호8글자이상
     
     if(sInfo.length <5  ){alert('학번은 5글자 이상 넣어주세요.'); return;}
     if(name.length <3){alert('학생등록실패! 이름은 3글자 이상만 넣어주세요'); return;}
     if(phone.length < 8 || isNaN(phone)){alert('연락처는 -제외한 8글자 이상 입력가능합니다.'); return;}

     for(let i = 0 ; i < student.length; i++){
        if(student[i].studentNum == sInfo){alert('등록된 학번 입니다.'); return;}
    }
    for(let member of student){
        if(member.phone == phone){alert('사용중인 전화번호 입니다.'); return;}
    }

      //만약에 회원목록에 회원이 없으면 1 있으면 마지막회원의 번호 +1
      let studentNum = student.length == 0? 1: student[student.length-1].studentNum +1 //마지막 번호에 부여
      //객체화
      let studentInfo= {
        studentNum : studentNum , studentCode : sInfo, studentName : name, contact: phone, pw:pw };
        console.log(studentInfo);


    //4. 저장
    student.push(studentInfo);

    //* localStorage 저장
    localStorage.setItem('student', JSON.stringify(student));

    alert('학생등록완료!'); location.href='stutable.html';

}

