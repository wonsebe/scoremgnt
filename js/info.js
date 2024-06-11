let urlParams = new URL(location.href).searchParams;
let no = urlParams.get('no');

let boardList = []


board();
logincheck();
logincheck2();

function board(){
    //어디에 
    let boardBox = document.querySelector('#boardBox');
    //무엇을
    let html = ``;

    boardList = JSON.parse(localStorage.getItem('boardList'));
    if(boardList == null){boardList = [];}

    let findindex = -1;
    for(let i = 0 ; i < boardList.length; i++){
        if(boardList[i].no == no){findindex = i; break;}    
    }
    let board = boardList[findindex];

    html+= `<div>${ boardList[ findindex ].title }</div>
            <div>${ boardList[ findindex ].content }</div>
            <div>${ boardList[ findindex ].no }</div>
            <div>${ board.writer }</div>
            <div>${ board.date }</div>
            <div>${ board.view }</div>`

    //출력
    boardBox.innerHTML = html;
}

function remove() {

    let findboard = -1;
    for(let i =0; i<boardList.length; i++){
        if(boardList[i].no == no){findboard = i; break;}
    }
    boardList.splice(findboard , 1); //배열내 객체를 삭제

    localStorage.setItem('boardList' , JSON.stringify(boardList));

    alert('삭제 성공');
    location.href="board.html";
    return;
}

function retouch() {

    let findboard = -1;
    for(let i = 0; i < boardList.length; i++ ){
        if(boardList[i].no == no){findboard = i; break;}
    }

    location.href=`../html/retouch.html?no=${ no }`;
    
}
