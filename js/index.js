let student = [
    {studentNum : 999, studentName : "admin", studentCode : 10000, contact : 123-123-1234, pw : 987654321},
    {studentNum : 1, studentName : "aaa", studentCode : 10101, contact : 123-456-7890, pw : 1234},
    {studentNum : 2, studentName : "bbb", studentCode : 10101, contact : 123-456-7890, pw : 1234},
    {studentNum : 3, studentName : "ccc", studentCode : 10101, contact : 123-456-7890, pw : 1234},
    {studentNum : 4, studentName : "ddd", studentCode : 10101, contact : 123-456-7890, pw : 1234}
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

