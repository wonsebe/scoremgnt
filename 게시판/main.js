let boardlist = [
    {no : 1,title : 'TEST입니다.',writer : '본인',date : '2024-6-08', view : '5'  }
]

printboard();
printboard1();
function printboard() {
    
    //어디에
    let board2 = document.querySelector('#board2');
    //무엇을
    let html = ``;
    for(let i = 0 ; i < boardlist.length ; i++){
        html += `<tr>
                 <th> ${boardlist[i].no} </th>
                 <th> ${boardlist[i].title} </th>
                 <th> ${boardlist[i].writer} </th>
                 <th> ${boardlist[i].date} </th>
                 <th> ${boardlist[i].view} </th>
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
    for(let i = 0 ; i < boardlist.length ; i++){
        html += `<tr>
                 <th> ${boardlist[i].no} </th>
                 <th> ${boardlist[i].title} </th>
                 <th> ${boardlist[i].writer} </th>
                 <tr>`
    }
    


    //출력
    board1.innerHTML = html;
}