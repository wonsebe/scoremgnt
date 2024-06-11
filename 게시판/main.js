let boardList = []

//localstorage 에서 studentsNum 받아와서 
//localstorage 에서 studentsName 찾아야함

let memberList = []



printboard();
printboard1();

function printboard() {
    
    boardList = JSON.parse(localStorage.getItem('boardList'));
    if(boardList == null){boardList = []; }

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

// function 검사(){
//     let 검사 = sessionStorage.getItem('studentNum')

//     for(let i = 0; i < 검사.length ; i++){
//         if(){}else{login();}
//     }
    
// } 가서 물어보고할거