

let student=[];

let urlParams= new URL(location.href).searchParams; console.log('urlParams');
let no= urlParams.get('no'); //클릭된 게시물 번호
console.log(no);



__update();
function __update(){
    console.log('__update()');

    student=JSON.parse(localStorage.getItem("student"));
    if(student == null){student=[];}
    let stuBox= document.querySelector('#stuBox');
    let html ='';

    
    //무엇을
   
    let findIndex= -1;
    for(let i=0; i< student.length; i++){
        if(student[i].no==no){findIndex= i; break;}
    }

   // if( findIndex == -1 ){ alert('로그인후 가능한 페이지'); location.href='register.html'; }

    console.log(`${student[findIndex]}`)    
    //3.찾은 인덱스의 게시물 정보를 출력
    html += `   
                학생이름<div>${student[findIndex].name}</div>            
                학번<div>${student[findIndex].sInfo}</div>
                연락처<div>${student[findIndex].phone}</div>
                비밀번호<div>${student[findIndex].pw}</div>
                
            `

    //출력
    stuBox.innerHTML=html; console.log('stuBox');
}

