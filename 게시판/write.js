logincheck();
logincheck2();

//로그인 상태 유효성검사 
let loginNo = sessionStorage.getItem('loginNo'); 
  // 2. 만약에 없으면 로그인 페이지 이동 
if( loginNo == null ){ 
 alert('로그인후 글쓰기가 가능합니다'); 
 location.href="../출결시스템/login.html";
}
// 글작성

let boardList = []

function abb() { console.log('abb()');

    boardList = JSON.parse( localStorage.getItem( 'boardList' ) ) ;
    if( boardList == null ){ boardList = []; }

    let title = document.querySelector('#title').value;
    let content = document.querySelector('#content').value;

    let writer = ``;

    let studentList = []
    studentList = JSON.parse(localStorage.getItem('student'));

    if(studentList == null){studentList = [];}

    console.log( studentList );
    console.log( loginNo );

    for(let i = 0 ; i < studentList.length ; i++){
        if(studentList[i].studentNum == loginNo){
            writer = studentList[i].studentName;
            break;
        }
    }
    console.log( boardList );
    let board = {
        no : boardList.length == 0 ? 1 : boardList[boardList.length-1].no +1,
        title : title,
        content : content , 
        writer : writer , 
        date : new Date(),
    };

    //추가
    boardList.push(board);

    localStorage.setItem('boardList', JSON.stringify(boardList));
    //저장
    
    alert('작성 되었습니다.');
    location.href="board.html";

}