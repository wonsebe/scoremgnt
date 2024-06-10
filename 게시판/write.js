//로그인 상태 유효성검사 

// 글작성

let boardList = [
    {no : 1,title : 'TEST입니다.',writer : '본인',date : '2024-6-08', view : '5' , content : '내용들어갑니다'}
]

function _write() { console.log('_write()');

    let title = document.querySelector('#title').value;
    let content = document.querySelector('#content').value;

    let write = ``;

    for(let i = 0 ; i < boardList.length ; i++){
        if(boardList[i].wirter == writer){
            writer = boardList[i].name;
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
    
    alert('작성 되었습니다.');
    location.href="board.html";

}