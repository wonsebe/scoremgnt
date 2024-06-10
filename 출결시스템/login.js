let memberList = []

//localstorage 에서 학생배열의 학번 비밀번호 호출
//유효성검사
//session storage에 저장
//화면이동
//알림(?)

function login() { console.log('login()');
    //localstorage 에서 학생배열의 학번 비밀번호 호출
    memberList = JSON.parse(localStorage.getItem('student'));
    if(memberList == null){memberList = [];}

    //유효성검사
    let sInfo = document.querySelector('#sInfo').value;
    let pw = document.querySelector('#pw').value;

    for(i = 0; i < memberList.length; i++){
        let member = memberList[i];
        if(member.studentCode == sInfo && member.pw == pw){

            sessionStorage.setItem('studentNum', member.studentNum);

            location.href="../게시판/main.html"
            return;
        }
    }

    //화면이동

    alert('로그인 실패');
}
