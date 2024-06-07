let boardlist = [];

function add() { console.log('add()');
     location.href="write.html";
}

printboard();
function printboard() {
    
    boardlist = JSON.parse(localStorage.getItem('boardlist'));
    if(boardlist = null){boardlist = [];}

    //어디에
    let boardtbody = document.querySelector('#boardtbody');
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
    boardtbody.innerHTML = html;
}