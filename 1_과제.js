let 부서배정 = [
    {배정코드 : 1, 배정일 : '2024-5-31', 직책 : '사원', 인사코드 : '1', 부서코드 : '1'},
    {배정코드 : 2, 배정일 : '2024-5-31', 직책 : '대리', 인사코드 : '2', 부서코드 : '1'}
]
let 인사정보 =[
    {인사코드 : 1 , 이름 : '유재석' , 생년월일 : 123456},
    {인사코드 : 2 , 이름 : '강호동' , 생년월일 : 987456},
]
let 부서목록 = [
    { 부서코드 : 1 , 부서명 : '인사팀' , 대표연락처 : '032-555-5555' },
    { 부서코드 : 2 , 부서명 : '마케팅팀' , 대표연락처 : '032-123-4568' },
  ]
  

let a = 3;

function 부서배정추가() {
    
    let 인사코드입력 = document.querySelector('#인사코드입력').value;
    let 부서코드입력 = document.querySelector('#부서코드입력').value;
    let 직책입력 = document.querySelector('#직책입력').value;
    let 배정일입력 = document.querySelector('#배정일입력').value;

    let 배정코드 = 부서배정.length != 0 ? 부서배정[부서배정.length-1].배정코드+1 : 1;

    let 배정 = {배정코드 : 배정코드, 배정일 : 배정일입력, 직책 : 직책입력,인사코드 : 인사코드입력, 부서코드 : 부서코드입력 };

    let sw = false // sw 변수에 false을 저장해두고   
    for(let i=0; i<인사정보.length; i++){
       if( 인사정보[i].인사코드 == 배정.인사코드){
        sw = true; // 만약에 동일한 인사코드가 있으면 sw변수에 찾았다는 증거로 true 넣어주기
        break; // for문 탈출
        //return; // 함수 탈출   
       }
    }
    // 여기가 for 탈출 후 이동되는 곳 

    // 만약에 sw변수가 false(못찾다는 증거) 이면 push 막기 위해 함수 종료 
    if( sw == false ){ alert('등록되지 않은 인사코드입니다.');return };

    let ws = false
    for(let i=0 ; i<부서목록.length; i++){
        if(부서목록[i].부서코드 == 배정.부서코드){
            ws = true;
            break;
        }
    }
    if( ws == false){alert('등록되지 않은 부서코드입니다.');return};



    부서배정.push(배정)

    alert('배정완료')

    부서배정출력();
}
// 여기가 return 했을때 이동 되는 곳 

console.log(부서배정)

부서배정출력();
function 부서배정출력() {
    //어디에
    let 배정출력 = document.querySelector('#배정출력');
    //무엇을
    let html = ``;

    for(let i = 0 ; i < 부서배정.length ; i++){

        let 찾을인사코드 = 부서배정[i].인사코드;
        let 찾은인사 = 인사조회( 찾을인사코드 );
        let 찾은인사명 = 찾은인사.이름;


        인사조회( 부서배정[i].인사코드 ).이름;

        let 찾을부서코드 = 부서배정[i].부서코드;
        let 찾을부서 = 부서조회(찾을부서코드);
        let 찾은부서명 = 찾을부서.부서명;

        html += `<tr> 
                  <td>${ 찾은인사명 }</td> 
                  <td>${찾은부서명} </td> 
                  <td>${부서배정[i].직책}</td> 
                  <td>${부서배정[i].배정일}</td> 
                  <button onclick="remove(${i})">삭제</button>
                 </tr>`
    }


    //출력
    배정출력.innerHTML = html;
}

function 인사조회(인사코드) {
    for(i = 0; i < 인사정보.length; i++){
      if(인사코드 == 인사정보[i].인사코드){
        let 찾은인사 = 인사정보[i] 
        return 찾은인사;
      }
    }
  }

  function 부서조회(부서코드) {
    for(i = 0; i < 부서목록.length; i++){
      if(부서코드 == 부서목록[i].부서코드){
        let 찾은부서 = 부서목록[i] 
        return 찾은부서;
      }
    }
  }
  


////////////////////////////////    부서코드     /////////////////////////////////////////////////////////

  function 부서등록(){ console.log( '부서등록()' );
  
    let departmentName  = document.querySelector('#departmentName').value;  console.log( departmentName );
    let departmentNum  = document.querySelector('#departmentNum').value;  console.log( departmentNum );
    
    let departmentCode = 부서목록.length != 0 ? 부서목록[부서목록.length-1].부서코드+1 : 1;   console.log( departmentCode );
    let newDe = { 부서코드 : departmentCode , 부서명 : departmentName , 대표연락처 : departmentNum }
    
    부서목록.push(newDe);   console.log( 부서목록 );
  
    부서목록출력();
    alert('등록성공')
  
    document.querySelector('#departmentName').value = '';
    document.querySelector('#departmentNum').value = '';
    
  }
  부서목록출력();
  function 부서목록출력(){  console.log('부서목록출력()');
    // 어디에
    let 부서목록출력구역 = document.querySelector('#부서목록출력구역');
    // 무엇을
    let html = ``;
    for( let i = 0 ; i < 부서목록.length ; i++ ){
      html += `<tr> 
                <td> ${부서목록[i].부서코드} </td> 
                <td> ${부서목록[i].부서명} </td> 
                <td> ${부서목록[i].대표연락처} </td>
                </tr>`;
    }
    // 출력
    부서목록출력구역.innerHTML = html;
  }

  /*
  function 부서목록호출(){
    부서목록 = JSON.parse(localStorage.getItem( '부서목록' ) );
    if(부서목록 == null){부서목록 = [];}
  }
  function 부서목록저장(){
    localStorage.setItem( '부서목록' , JSON.stringify(부서목록) );
  }
  */
/////////////////////////////   인사코드   ////////////////////////////////////////////////
  



function 인사등록(){                                            console.log('인사등록()');
    let 이름 = document.querySelector('#이름').value;                 console.log(이름);
    let 생년월일 = document.querySelector('#생년월일').value;         console.log(생년월일);

    let 인사코드 = 인사정보.length != 0 ? 인사정보[인사정보.length-1].인사코드 +1 : 1;
    let 인사 = {인사코드 : 인사코드 , 이름 : 이름 , 생년월일 : 생년월일 };         console.log(인사);

    인사정보.push(인사);    alert('등록완료');              console.log(인사정보);
    인사출력();
}

인사출력();
function 인사출력(){                                        console.log('인사출력()');

    let 인사출력 = document.querySelector('#인사출력');

    let html = '' ;
    for(let i = 0 ; i < 인사정보.length; i++ ){
        html += `<tr>
                    <td>${인사정보[i].인사코드}</td>
                    <td>${인사정보[i].이름}</td>
                    <td>${인사정보[i].생년월일}</td>
                </tr>`

    }        
    인사출력.innerHTML = html;
}

/////////////////////////////////////////////////
function remove(deleteIndex){
    부서배정.splice(deleteIndex,1);
    부서배정출력();
}