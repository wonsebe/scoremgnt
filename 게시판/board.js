let boardlist = [
    {no : 1,title : 'TEST입니다.',writer : '본인',date : '2024-6-08', view : '5'  }
]

function add() { console.log('add()');
     location.href="write.html";
}

printboard();
function printboard() {
    
    //어디에
    let boardtbody = document.querySelector('#boardtbody');
    //무엇을
    let html = ``;
    for(let i = 0 ; i < boardlist.length ; i++){
        html += `<tr> 
                 <th> <a href="#"> ${boardlist[i].no} </a> </th>
                 <th> <a href="#"> ${boardlist[i].title} </a> </th>
                 <th> <a href="#"> ${boardlist[i].writer} </a> </th>
                 <th> <a href="#"> ${boardlist[i].date} </a> </th>
                 <th> <a href="#"> ${boardlist[i].view} </a> </th>
                 <tr>`
    }
    //출력
    boardtbody.innerHTML = html;
}