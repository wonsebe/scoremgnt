let student = [
    {studentNum : 0, studentName : "admin", studentCode : 10000, contact : 11111111, pw : 987654321},
    {studentNum : 1, studentName : "user", studentCode : 10101, contact : 11111111, pw : 987654321},
    {studentNum : 2, studentName : "user1", studentCode : 10102, contact : 11111111, pw : 987654321}
]

let scoreList = [
    {scoreNum : 1, studentNum : 1, korean : 100, english : 100, math : 100, selective : 50, testDate : 2024.1},
    {scoreNum : 2, studentNum : 1, korean : 80, english : 100, math : 100, selective : 50, testDate : 2024.2},
    {scoreNum : 3, studentNum : 1, korean : 70, english : 100, math : 100, selective : 50, testDate : 2024.3},
    {scoreNum : 4, studentNum : 1, korean : 90, english : 100, math : 100, selective : 50, testDate : 2024.4},
    {scoreNum : 5, studentNum : 2, korean : 100, english : 100, math : 100, selective : 50, testDate : 2024.4},
    {scoreNum : 6, studentNum : 3, korean : 70, english : 100, math : 100, selective : 50, testDate : 2024.4},
    {scoreNum : 7, studentNum : 4, korean : 85, english : 100, math : 100, selective : 50, testDate : 2024.4}
]

localStorage.setItem('student', JSON.stringify(student));


function logout() {
    sessionStorage.removeItem('')
}

function login() {

    

    let studentCode = sessionStorage.getItem('studentCode');
    if(studentCode == null){studentCode = 0}

    let nav = document.querySelector('#navbar')
    let html = ``;
    
    if(studentCode != 0) {
        html += `<li class="nav-item"><a class="nav-link" > ${studentName} </a> </li>`;
        html += `<li class="nav-item"><a class="nav-link" href="#" onclick="logout()"> 로그아웃 </a> </li>`;
    }else{location.href="../출결시스템/login.html"}

    nav.innerHTML += html;
}

/////////////////////////////////////////////////////// 유효성 검사
function logincheck2() {
    let loginNo = sessionStorage.getItem('loginNo');
    if(loginNo == null){loginNo = -1}

    let nav = document.querySelector('#navbarNav')
    let html = ``;

    if(loginNo == 0){
       html += `<li class="nav-item"><a class="nav-link" href="main.html">메인화면 </a> </li>
        <li class="nav-item"><a class="nav-link" href="../출결시스템/register.html">출결관리시스템 </a> </li>
        <li class="nav-item"><a class="nav-link" href="../출결시스템/stutable.html"> 학생부  </a> </li>
        <li class="nav-item"><a class="nav-link" href="../score.html">모의고사 성적  </a> </li>
        <li class="nav-item"><a class="nav-link" href="board.html">학생 게시판 </a> </li>`
    } else if(loginNo != -1){
        html += `<li class="nav-item"><a class="nav-link" href="main.html">메인화면 </a> </li>
        <li class="nav-item"><a class="nav-link" href="../score.html">모의고사 성적  </a> </li>
        <li class="nav-item"><a class="nav-link" href="board.html">학생 게시판 </a> </li>`
      } else{
          location.href="../출결시스템/login.html"
      }


    nav.innerHTML = html;
}


function logincheck() {
    let loginNo = sessionStorage.getItem('loginNo');
    if(loginNo == null){loginNo = -1}

    let nav1 = document.querySelector('#navbar')
    let html = ``;

    if(loginNo == 0){
      html += `<li class="nav-item"><a class="nav-link"> 관리자 </a> </li>`;
      html += `<li class="nav-item"><a class="nav-link" href="../출결시스템/login.html" onclick="logout()">로그아웃</a> </li>`
    }
    else if(loginNo != -1){
      html += `<li class="nav-item"><a class="nav-link"> 학생 </a> </li>`;
      html += `<li class="nav-item"><a class="nav-link" href="../출결시스템/login.html" onclick="logout()">로그아웃</a> </li>`
    } else{
        location.href="../출결시스템/login.html"
    }

    nav1.innerHTML = html;
}

///////////////////////////////////////////////////////////////////////////////

