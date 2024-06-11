let stuent = []

//localstorage 에서 학생배열의 학번 비밀번호 호출
//유효성검사
//session storage에 저장
//화면이동
//알림(?)

function login() { console.log('login()');
    //localstorage 에서 학생배열의 학번 비밀번호 호출
    student = JSON.parse(localStorage.getItem('student'));
    if(student == null){student = [];}

    //유효성검사
    let studentCode = document.querySelector('#studentCode').value;
    let pw = document.querySelector('#pw').value;

    for(i = 0; i < student.length; i++){
        let member = student[i];
        if(member.studentCode == studentCode && member.pw == pw){

            sessionStorage.setItem( 'loginNo' ,  member.studentNum );

            location.href="../html/main.html"
            return;
        }
    }

    //화면이동

    alert('로그인 실패');
}
