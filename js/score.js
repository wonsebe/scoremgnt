/*
    메모리 설계

    학생 : {학생번호 이름 학번 연락처 비밀번호}
    점수 : {점수번호 학생번호 국어 영어 수학 사회/과학 시험식별}
        시험식별 : ㅁㅁㅁㅁ.ㅇ 년도.1~4, 3월 6월 9월 11월 모의고사
    게시판 : {게사판번호 제목 등록일 조회수 작성자번호 내용}

    색깔 테마 (진한색 > 연한색)
    "#0554F2" "#1675F2" "#3889F2" "#8DB9F2" "#F2F2EB"

    Navbar : "#1675F2"
    width : 1320px;
    10반까지 있음, 1~5반 이과 -> 과학, 6~10반 문과 -> 사회
*/

let score = [
    {scoreNum : 1, studentNum : 1, korean : 100, english : 100, math : 100, selective : 50, testDate : 2024.1}
    {scoreNum : 2, studentNum : 1, korean : 100, english : 100, math : 100, selective : 50, testDate : 2024.2}
    {scoreNum : 3, studentNum : 1, korean : 100, english : 100, math : 100, selective : 50, testDate : 2024.3}
    {scoreNum : 4, studentNum : 1, korean : 100, english : 100, math : 100, selective : 50, testDate : 2024.4}
]

let student = [
    {studentNum : 1, studentName : "aaa", studentCode : 10101, contact : 123-456-7890, pw : 1234},
    {studentNum : 2, studentName : "bbb", studentCode : 10101, contact : 123-456-7890, pw : 1234}
    {studentNum : 3, studentName : "ccc", studentCode : 10101, contact : 123-456-7890, pw : 1234}
    {studentNum : 4, studentName : "ddd", studentCode : 10101, contact : 123-456-7890, pw : 1234}
]

let selYear = 0; // 0 : 선택하지 않음
let selClass = 0;
let selSubject = 0; // 1 2 3 4 국 수 영 사회 과학

drawChart();

function drawChart(){ // 학년 반 선택 후 반 단위 점수 그래프
    
    if (selYear != 0 && selClass != 0 && selSubject != 0){
        let subName = subjectName();
        console.log(`${selYear}학년 ${selClass}반 ${subName}과목 그래프`)
        for (s of student) {// 차트 data 구축 : 학년 반 과목을 고른 후
            let codeData = codeSplit();
            if ()
            let x 

        }



        const chartHTML = document.querySelector("#scoreChart");
            
        new Chart(chartHTML, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: `${selYear}학년 ${selClass}반 ${subName}과목 그래프`,
                    data: [], // {x: 번호(이름), y: 점수}, {...}],
                    backgroundColor: 'rgb(255, 99, 132)'
                  }],
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    }
                }
            }
        }
        );

    }

}



function pop(){
    console.log("pop")
}

function setYear(num){ // 현재 선택한 학년
    selYear = num;
    console.log("선택한 학년 : "+selYear)
    drawChart();
}

function setClass(num){ // 현재 선택한 반
    selClass = num;
    console.log("선택한 반 : "+selClass)
    drawChart();
}

function setSubject(num){ // 현재 선택한 과목
    selSubject = num;
    console.log("선택한 과목 : "+selSubject)
    drawChart();
}

function subjectName(){
    switch (selSubject) {
        case 1:
            console.log("과목 : 국어");
            return '국어';
        case 2:
            console.log("과목 : 영어");
            return '영어';
        case 3:
            console.log("과목 : 수학");
            return '수학';
        case 4:
            if (selClass >=1 && selClass <= 5) {
                console.log("과목 : 사회");
                return '사회';
            } else if (selClass >=6 && selClass <= 10) {
                console.log("과목 : 과학");
                return '과학';
            } else {
                console.log("반이 선택되지 않음")
                return 0;
            }
    }
}

function codeSplit(studentCode){ // 학번 쪼개기 1 / 01 / 01 학년/반/번호
    let code = studentCode
    let 학년 = code / 10000 
    let 반 = (code - 학년*10000) / 100
    let 번호 = ((code - 학년*10000) - 반

}