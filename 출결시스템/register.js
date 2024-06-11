
let student=[]; //학생들 배열


function signup(){
    console.log("signup()");
    //호출
    student= JSON.parse(localStorage.getItem('student'));
    if(student ==null){student= [];}
    //1. html 에서 입력받은 데이터 가져오기
    let studentCode=document.querySelector('#studentCode').value;
    let studentName=document.querySelector('#studentName').value;
    let contact=document.querySelector('#contact').value;
    let pw=document.querySelector('#pw').value;
    
   



    //유효성검사
     //1. 아이디와 비밀번호는 5글자 이상만 가능
    

     if(studentCode.length <6  ){
        alert('학번은 6글자 이상 넣어주세요.'); return;
        }

        if(pw.length <3){
            alert('비밀번호는 4글자 이상 입력해주세요'); return;

        }
       
     //2. 이름은 3글이상 이상 만 가능
     if(studentName.length <3){alert('학생등록실패! 이름은 3글자 이상만 넣어주세요'); return;}

     if(contact.length<8){alert('연락처는 8자리 이상 입력')}
    
      //만약에 회원목록에 회원이 없으면 1 있으면 마지막회원의 번호 +1
      let no= student.length == 0? 1: student[student.length-1].no +1 //마지막 번호에 부여
      //객체화
      let Sstudent= {
        no : no , studentCode : studentCode, studentName : studentName, contact: contact, pw:pw }; console.log(Sstudent);


    //4. 저장
    student.push(Sstudent);
    //* localStorage 저장
    localStorage.setItem('student', JSON.stringify(student));
    alert('학생확인완료!'); location.href='stutable.html';

}

