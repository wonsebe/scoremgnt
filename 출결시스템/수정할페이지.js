function findBoardIndex(번호){
    let findIndex=-1; //못찾았다(인덱스가없다는뜻 -1)를 기본값

    for(let i=0; i<studentList.length; i++){
        //만약에 배열내 i번째 게시물의 번호와 내가 클릭한 번호와 같으면 findIndex에 대입하고 함수 종료
        if(studentList[i].no ==번호){ findIndex=i; return findIndex; }


    }
    //만약에 못찾았다 -1
   return findIndex;

}

function _read(번호) { //실행조건 : 제목 클릭했을 때
    console.log(`내가 클릭한 게시물번호: ${번호}`)
        //어디에
    let viewPage= document.querySelector('#viewPage');

    let findIndex=findBoardIndex(번호);
    if(findIndex==-1) return;
    let student =studentList[findIndex];

    

    
    //-내가 클릭한 게시물번호의 객체를 배열에서 찾자.
   
        //무엇을
        let html =`<h3>상세 페이지</h3>
        <div>${ studentList[findIndex].제목}</div>
        <div>
            <span>학생이름${ studentList[findIndex].조회수 }</span>
            <span>작성일 : ${ student.작성일}</span>
        </div>

        <div>${ student.내용 }</div>
        <button onclick="_update(${student.번호 })">수정</button>
        <button onclick="__delete(${student.번호 })">삭제</button>`;
//출력/대입
viewPage.innerHTML =html;

}
//게시물 번호를 이용한 특정 하나의 게시물객체 인덱스를 찾아주는 함수
function findBoardIndex(번호){
    let findIndex=-1; //못찾았다(인덱스가없다는뜻 -1)를 기본값

    for(let i=0; i<studentList.length; i++){
        //만약에 배열내 i번째 게시물의 번호와 내가 클릭한 번호와 같으면 findIndex에 대입하고 함수 종료
        if(studentList[i].no ==번호){ findIndex=i; return findIndex; }


    }
    //만약에 못찾았다 -1
   return findIndex;

}


function _update(번호){
//클릭한 게시물번호의 객체 인덱스번호 찾기
    let findIndex=findBoardIndex(번호); //내가 선택한 게시물번호를 findBoardIndex 함수에 매개변수로 전달하면 찾은인덱스 반환, 없으면나감
    if(findIndex==-1){return;}

      

    //입력
       let uname=prompt('수정할제목');
       let uphone=prompt('수정할내용');
        //수정된 정보로 구성
       
   
      //수정
      studentList[findIndex].제목 =uname;
      studentList[findIndex].내용 =uphone;
   
        
        _allRead();
        _read(번호);



        function _pwConfirm(Index){

            let confirmPw= prompt('비밀번호');
             //해당 인덱스의 비밀번호와 입력받은 비밀번호가 일치한지 체크
             if( confirmPw!=boardList[Index].비밀번호){
               alert('패스워드가 다릅니다');
                   return false; 
             }
             
             return true;
   }

}
   