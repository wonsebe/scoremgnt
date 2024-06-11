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
    {studentNum : 4, studentName : "ddd", studentCode : 10101, contact : 123-456-7890, pw : 1234}
*/

let graphScoreList = [];

let selYear = 0; // 0 : 선택하지 않음
let selClass = 0;
let selSubject = 0; // 1 2 3 4 국 수 영 사회 과학
let selSubjectName = '';
let selTestYear = 0;
let selTestMonth = 0;

let graphData = [];
let isGraphDrawn = 0;
drawContent();

function drawContent(){ // 학년 반 선택 후 *반 단위* 점수 그래프, 평균 : 전과목(사회과*2)/4 또는 과목별,
    
    if (selYear != 0 && selClass != 0 && selSubject != 0 && selTestYear != 0 && selTestMonth != 0){ // 모두 체크했을때
        let subName = subjectName();
        let tMonth = testMonth();
        label = `${selYear}학년 ${selClass}반 ${selTestYear}년 ${tMonth} ${subName}과목 그래프`

        let studentNumList = [];
        for (s of student) {// 학생 번호 필터
            let code = s.studentCode;
            let codeData = codeSplit(code);
            if (codeData.year == selYear && codeData.class == selClass) {
                studentNumList.push(s.studentNum);
            }
        }

        let scores = []; //점수값
        for (sn of studentNumList) {
            for (sc of scoreList) {
                let dateArray = testDateSplit(sc.testDate)
                if (sc.studentNum == sn && dateArray[0] == selTestYear && dateArray[1] == selTestMonth) {
                    scores.push(sc[selSubjectName])
                }
            }
        }
        graphScoreList = scores

        // x축 (이름)
        let x = [];
        for (let i = 0; i < studentNumList.length; i++) {
            //studentName
            let stdName = ''
            for (st of student) {
                if (st.studentNum == studentNumList[i]) {
                    stdName = st.studentName; break;
                }
            }   
            x.push(stdName)

        }
        xaxis = x;

        // 그래프
        if (isGraphDrawn == 1) {scoreChart.destroy();}

        chartHTML = document.querySelector("#scoreChart");
        scoreChart = new Chart(chartHTML, {
            type: 'line',
            data: {
                labels: xaxis,
                datasets: [{
                    label : label,
                    data : graphScoreList,
                    backgroundColor : '#8DB9F2'
                    }],
            },
        }
        );

        isGraphDrawn = 1;

        //math
        if (graphScoreList.length != 0){
            document.querySelector("#average").innerHTML = `평균 : ${(math.mean(graphScoreList)).toFixed(2)}`
            document.querySelector("#std").innerHTML = `표준편차 : ${(math.std(graphScoreList)).toFixed(2)}`
        }   

        //table
        document.querySelector("#tableLabel").innerHTML = `${selYear}학년 ${selClass}반 ${selTestYear}년 ${tMonth} 모의고사 점수`;
        let tbodyHTML = ''; // 학번 이름 (연도 회차 필터된) 점수, 학생번호와 testDate로 찾기
        for (sn of studentNumList) {
            let tableCode = 0;
            let tableName = '';
            let tableKor = 0;
            let tableEng = 0;
            let tableMath = 0;
            let tableSelective = 0;
            for (st of student) {
                if (st.studentNum == sn) {
                    tableCode = st.studentCode;
                    tableName = st.studentName;
                    break;
                }
            }
            for (sc of scoreList) {
                let dateArray = testDateSplit(sc.testDate)
                if (sc.studentNum == sn && dateArray[0] == selTestYear && dateArray[1] == selTestMonth) {
                    tableKor = sc.korean;
                    tableEng = sc.english;
                    tableMath = sc.math;
                    tableSelective = sc.selective;
                    break;
                }
            }

            tbodyHTML += `<tr scope="col"><td>${tableCode}</td><td>${tableName}</td><td>${tableKor}</td><td>${tableEng}</td><td>${tableMath}</td><td>${tableSelective}</td></tr>`
        }
        document.querySelector('#tbody').innerHTML = tbodyHTML;
    };
}

function setYear(num){ // 현재 선택한 학년
    selYear = num;
    console.log("선택한 학년 : "+selYear)
    drawContent();
}

function setClass(num){ // 현재 선택한 반
    selClass = num;
    console.log("선택한 반 : "+selClass)
    drawContent();
}

function setSubject(num){ // 현재 선택한 과목
    selSubject = num;

    switch (selSubject) {
        case 1:
            selSubjectName = 'korean'; break;
        case 2:
            selSubjectName = 'english'; break;
        case 3:
            selSubjectName = 'math'; break;
        case 4:
            selSubjectName = 'selective'; break;
    }
    console.log("선택한 과목 : "+selSubject)
    drawContent();
}

function setTestYear(num){ // 현재 선택한 시험 연도
    selTestYear = num;
    console.log("시험 연도 : "+selTestYear)
    drawContent();
}

function setTestMonth(num){ // 현재 선택한 시험 회차
    selTestMonth = num;
    console.log("시험 회차 : "+selTestMonth)
    drawContent();
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

function testMonth(){
    switch (selTestMonth) {
        case 1:
            return '3월';
        case 2:
            return '6월';
        case 3:
            return '9월';
        case 4:
            return '11월';
    }
}

function codeSplit(studentCode){ // 학번 쪼개기 1 / 01 / 01 -> {학년 year / 반 class / 번호 no}
    let code = Number(studentCode);
    let year = parseInt(code / 10000);
    let clas = parseInt((code - year*10000) / 100)
    let no = parseInt((code - year*10000) - clas*100)
    return {"year" : year, "class" : clas, "no" : no};
}

function testDateSplit(testDate){
    if (testDate != undefined) {
        tDate = String(testDate)
        tdArray = tDate.split(".")
        return tdArray;
    }
}
