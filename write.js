//로그인 상태 유효성검사 

// 글작성

let boardList = []

function _write() { console.log('_write()');

    boardList= JSON.parse(localStorage.getItem('boardList'));
    if(boardList = null){boardList = [];}

    //HTML데이터 호출
    let title = document.querySelector('#title').value;
    let content = document.querySelector('#content').value;

    let write = ``;

    let memberList = [];
    memberList = JSON.parse(localStorage.getItem('memberList'));
    if(memberList == null){memberList = [];}

    for(let i = 0 ; i < memberList.length ; i++){
        if(memberList[i].no == loginNo){
            writer = memberList[i].name;
            break;
        }
    }

    let board = {
        no : boardList.length == 0 ? 1 : boardList[boardList.length-1].no +1,
        title : title,
        content : content , 
        writer : writer , 
        date : new Date(),
        view : 1
    };

    //추가
    boardList.push(board);
    //저장
    localStorage.setItem('boardList' , JSON.stringify(boardList));

    alert('작성 되었습니다.');
    location.href="board.html";

}