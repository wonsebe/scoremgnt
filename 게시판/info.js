let boardList = [
    {no : 1,title : 'TEST입니다.',writer : '본인',date : '2024-6-08', view : '5' , content : '내용들어갑니다'}
]


board();
function remove () {
    let findboard = -1;
    for(let i =0; i<boardList.length; i++){
        if(boardList[i].no == no){findboard = i; break;}
    }

    if(myboardcheck(findboard) == false){
        alert('게시물의 작성자만 삭제 가능합니다.');
        return;
    }

    boardList.splice(findboard , 1); //배열내 객체를 삭제

    alert('삭제 성공');
    return;
}

function retouch() {
    location.href="retouch.html";
}

function board (){
    //어디에 
    let board
    //무엇을
    let html = ``;
    //출력
    
}