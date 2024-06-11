/*
  수정페이지 
    1. URL 매개변수/쿼리스트링 의 게시물번호( no ) 호출 
    2. 해당 게시물번호의 title,content 정보를 html 대입 
    3. 새롭게 입력받은 값 수정처리 
*/

let no = new URL (location.href).searchParams.get('no');
console.log(no)

let boardList = [];

board();

logincheck();
logincheck2();

function board() {

  boardList = JSON.parse(localStorage.getItem('boardList'));
  if(boardList == null){boardList = [];}

  for(let i = 0 ; i < boardList.length; i++){
    if(boardList[i].no == no) {
      document.querySelector('#title').value = boardList[i].title;
      document.querySelector('#content').value = boardList[i].content;

      return;
    }
  }
}

function retouch() {

  let title = document.querySelector('#title').value;
  let content = document.querySelector('#content').value;

  for(let index in boardList){
    if(boardList[index].no == no){
      boardList[index].title = title;
      boardList[index].content = content;

      localStorage.setItem('boardList', JSON.stringify(boardList));

      alert('수정완료 되었습니다.');
      location.href=`../html/info.html?no=${no}`
    }
  }
}