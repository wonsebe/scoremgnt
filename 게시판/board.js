
let boardList = []

let studentList = []

function add() { console.log('add()');
     location.href="write.html";
}

printboard();

function printboard() {
    
    boardList = JSON.parse(localStorage.getItem('boardList'));
    if(boardList == null){boardList = [];}

    studentList = JSON.parse(localStorage.getItem('student'));
    if(studentList == null){studentList = []}
    console.log(studentList)

    //어디에
    let boardtbody = document.querySelector('#boardtbody');
    //무엇을
    let html = ``;

    for(let i = 0 ; i < studentList.length; i++){
        boardList[i].writer = studentList[i].studentName
    }

    for(let i = 0 ; i < boardList.length ; i++){
        html += `<tr> 
                 <th> <a href="#"> ${boardList[i].no} </a> </th>
                 <th> <a href="info.html?no=${boardList[i].no}"> ${boardList[i].title} </a> </th>
                 <th> <a href="#"> ${boardList[i].writer} </a> </th>
                 <th> <a href="#"> ${boardList[i].date} </a> </th>
                 <tr>`
    }

    //출력
    boardtbody.innerHTML = html;
}

