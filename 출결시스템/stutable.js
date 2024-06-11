



let loginNo= sessionStorage.getItem('loginNo');
StuInfo();
function StuInfo(){
  console.log('stuInfo');
  student= JSON.parse(localStorage.getItem('student'));
  if(student == null){student=[]}
      //찾기
      for(let i=0; i< student.length; i++){
          if(student[i].no ==loginNo){
          document.querySelector('#no').innerHTML = student[i].no;
          document.querySelector('#studentName').innerHTML = student[i].studentName;
          document.querySelector('#studentCode').innerHTML = student[i].studentCode; 
          document.querySelector('#contact').innerHTML = student[i].contact;
          document.querySelector('#pw').innerHTML = student[i].pw;
          return;
      }
   }

}

let 수정중 = -1;

_boardPrint();
function  _boardPrint(){ console.log('_boardPrint');
  student= JSON.parse(localStorage.getItem('student'));
    if(student==null){student=[];}
    //어디에
    let stuTbody= document.querySelector('#stuTbody');  console.log(stuTbody);
    //무엇을
    let html='';
    for(let i=0; i < student.length; i++){

        // 만약에 수정선택한 학생이면 
        if( 수정중 == student[i].no ){
            
            html += `<tr>
                    <th>${student[i].no}</th> 
                    <th> <input id="upOate" value='${student[i].studentName}' /></th>
                    <th> <input id="upSate" value='${student[i].studentCode}'</th> 
                    <th> <input id="upPate" value='${student[i].pw}'</th>
                    <th> <input id="upHate" value='${student[i].contact}'</th>
                    <th><button onclick="_delete(${student[i].no})" type="button">삭제</button>
                    <button onclick="__modify(${student[i].no})" type="button">학생정보 상세보기</button>
                    <button onclick="수정활성화(${student[i].no})" type="button">
                        ${ 수정중 == student[i].no ? '수정완료' : '수정활성화' }   
                    </button>
                </tr>`

        }else{

            html += `<tr>
                    <th>${student[i].no}</th> 
                    <th>${student[i].studentName}</th>
                    <th>${student[i].studentCode}</th> 
                    <th>${student[i].pw}</th>
                    <th>${student[i].contact}</th>
                    <th><button onclick="_delete(${student[i].no})" type="button">삭제</button>
                    <button onclick="__modify(${student[i].no})" type="button">학생정보 상세보기</button>
                    <button onclick="수정활성화(${student[i].no})" type="button">
                        ${ 수정중 == student[i].no ? '수정완료' : '수정활성화' }   
                    </button>
                </tr>`
        }
    }
    stuTbody.innerHTML = html;
}


function 수정활성화( no ){
    
    if( 수정중 == -1 ){
        수정중 = no;

    }else{

        // 새로 입력받은 내용물 
      let upOate=  document.querySelector('#upOate').value;
      let upSate=  document.querySelector('#upSate').value;
      let upPate=  document.querySelector('#upPate').value;
      let upHate=  document.querySelector('#upHate').value;

      // 누구를 
      for( let i = 0 ; i<student.length ; i++ ){
        if( student[i].no == no ){

            student[i].studentName = upOate;
            student[i].studentCode = upSate;
            student[i].pw = upPate;
            student[i].contact = upHate;
            

            localStorage.setItem( 'student' , JSON.stringify( student ) );

            break;
        }
      }

        수정중 = -1;
    }

    _boardPrint();

}


function _delete(no){
  console.log('_delete()');
  //-------------------------------------------------------------//
          let findBoardIndex = -1;
      for(let i=0; i< student.length; i++){
          if(student[i].no == no){findBoardIndex =i; break;}
      }

      student.splice(findBoardIndex ,1);  // JS 배열 내 객체 삭제
      localStorage.setItem('student', JSON.stringify(student)); // 삭제 최신화 

      alert('삭제 성공');
      location.href="stutable.html";
      return;
     
  }

  
//4.수정페이지로 이동함수:수정버튼 클릭시 이동
    //로그인된회원 - 게시물작성자 일치 여부
function __modify(no){

    let findBoardIndex = -1;
    for(let i=0; i< student.length; i++){
        if(student[i].no == no){findBoardIndex = i; break;}
    }

    console.log( student );
    
    //무엇을 수정할건지 매개변수 전달
    location.href=`수정페이지.html?no=${ student[findBoardIndex].no }`;

}





