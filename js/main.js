let boardList = []

//localstorage 에서 studentsNum 받아와서 
//localstorage 에서 studentsName 찾아야함

let studentList = []



printboard();
printboard1();

logincheck();
logincheck2();

function printboard() {
    
    let loginNo = sessionStorage.getItem('loginNo');
    if(loginNo == null){alert('로그인후 사용 가능한 페이지 입니다.'); location.href="../html/login.html"}

    studentList = JSON.parse(localStorage.getItem('student'));
    if(studentList == null){studentList = [];}

    for(let i = 0 ; i < studentList.length; i++){
        if(studentList[i].no == loginNo){
            boardList[i].writer = studentList[i].no
        }
    }

    boardList = JSON.parse(localStorage.getItem('boardList'));
    if(boardList == null){boardList = [];}

    //어디에
    let board2 = document.querySelector('#board2');
    //무엇을
    let html = ``;
    for(let i = 0 ; i < boardList.length ; i++){
        html += `<tr>
                 <th> ${boardList[i].no} </th>
                 <th> ${boardList[i].title} </th>
                 <th> ${boardList[i].writer} </th>
                 <th> ${boardList[i].date} </th>
                 <tr>`
    }
    
    //출력
    board2.innerHTML = html;
}

function printboard1() {
    
    //어디에
    let board1 = document.querySelector('#board1');

    //무엇을
    let html = ``;
    for(let i = 0 ; i < boardList.length ; i++){
        html += `<tr>
                 <th> ${boardList[i].no} </th>
                 <th> ${boardList[i].title} </th>
                 <th> ${boardList[i].writer} </th>
                 <tr>`
    }



    //출력
    board1.innerHTML = html;
}
