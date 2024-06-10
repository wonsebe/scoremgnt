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
    {scoreNum : 1, studentNum : 1, korean : 100, english : 100, math : 100, selective : 50, testDate : 2024.1},
    {scoreNum : 2, studentNum : 1, korean : 100, english : 100, math : 100, selective : 50, testDate : 2024.2},
    {scoreNum : 3, studentNum : 1, korean : 100, english : 100, math : 100, selective : 50, testDate : 2024.3},
    {scoreNum : 4, studentNum : 1, korean : 100, english : 100, math : 100, selective : 50, testDate : 2024.4}
]

let student = [
    {studentNum : 1, studentName : "aaa", studentCode : 10101, contact : 123-456-7890, pw : 1234},
    {studentNum : 2, studentName : "bbb", studentCode : 10102, contact : 123-456-7890, pw : 1234},
    {studentNum : 3, studentName : "ccc", studentCode : 10103, contact : 123-456-7890, pw : 1234},
    {studentNum : 4, studentName : "ddd", studentCode : 10104, contact : 123-456-7890, pw : 1234}
]

let selYear = 0; // 0 : 선택하지 않음
let selClass = 0;
let selSubject = 0; // 1 2 3 4 국 수 영 사회 과학
let selScoreMode = 1;
let selTestYear = 2024;
let selTestMonth = 1;
let isGraphDrawn = 0;
drawChart();

function drawChart(){ // 학년 반 선택 후 *반 단위* 점수 그래프, 평균 : 전과목(사회과*2)/4 또는 과목별,
    
    if (selYear != 0 && selClass != 0 && selSubject != 0){
        let subName = subjectName();
        label = `${selYear}학년 ${selClass}반 ${subName}과목 그래프`
        let studentNumList = [];
        let y = [];
        for (s of student) {// 차트 data 구축 : 학년 반 과목을 고른 후
            let code = s.studentCode;
            let codeData = codeSplit(code);
            if (codeData.year == selYear && codeData.class == selClass) {
                studentNumList.push(s.studentNum);
            }
        }

        console.log(studentNumList); //필터링된 학생 번호 목록

        if (isGraphDrawn == 1) {scoreChart.destroy();}

        let graphData = []; 
        //for () {

    
        chartHTML = document.querySelector("#scoreChart");
        scoreChart = new Chart(chartHTML, {
            type: 'line',
            data: {
                datasets: [{
                    "label" : label,
                    "data" : graphData, // {x: 번호(이름), y: 점수}, {...}],
                    "backgroundColor" : 'rgb(255, 99, 132)'
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

        isGraphDrawn = 1;
    };
}

function drawTable(){
    
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

function setScoreMode(num){ // 현재 선택한 점수분석
    selScoreMode = num;
    console.log("점수 분석 : "+selScoreMode)
    drawChart();
}

function setTestYear(num){ // 현재 선택한 시험 연도
    selTestYear = num;
    console.log("시험 연도 : "+selTestYear)
    drawChart();
}

function setTestMonth(num){ // 현재 선택한 시험 회차
    selTestMonth = num;
    console.log("시험 회차 : "+selTestMonth)
    drawChart();
}

function subjectName(){
    switch (selSubject) {
        case 1:
            return '국어';
        case 2:
            return '영어';
        case 3:
            return '수학';
        case 4:
            if (selClass >=1 && selClass <= 5) {
                return '사회';
            } else if (selClass >=6 && selClass <= 10) {
                return '과학';
            } else {
                return 0;
            }
    }
}

function codeSplit(studentCode){ // 학번 쪼개기 1 / 01 / 01 -> {학년 year / 반 class / 번호 no}
    let code = Number(studentCode);
    let year = parseInt(code / 10000);
    let clas = parseInt((code - year*10000) / 100)
    let no = parseInt((code - year*10000) - clas*100)
    return {"year" : year, "class" : clas, "no" : no};
}
