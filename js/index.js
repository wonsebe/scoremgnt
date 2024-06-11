let student = [
    {studentNum : 0, studentName : "admin", studentCode : 10000, contact : 11111111, pw : 987654321},
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
