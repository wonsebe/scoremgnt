// document.querySelector("#inputSubject").value 
// table : 학번으로 찾기
let targetNum = 0;
let tableList = [];
let tableHTML = '';

let tableCode = 0;
let tableName = '';
let tableKor = 0;
let tableEng = 0;
let tableMath = 0;
let tableSelective = 0;
let tableYear = 0;
let tableMonth = '';

function search() {
    let searchCode = document.querySelector("#searchCode").value;
    tableHTML = '';
    for (st of student) {
        if (st.studentCode == searchCode) {
            tableCode = searchCode;
            tableName = st.studentName;
            targetNum = st.studentNum; break;
        }
    }
    for (sc of scoreList) {
        if (sc.studentNum == targetNum) {
            formatTable(sc.scoreNum);
        }
    }
    document.querySelector("#tbody").innerHTML = tableHTML;
}

function add() {
    let inputCode = Number(document.querySelector("#inputCode").value);
    let inputYear = Number(document.querySelector("#inputYear").value);
    let inputMonth = document.querySelector("#inputMonth").value;

    let inputKor = Number(document.querySelector("#inputKor").value);
    let inputEng = Number(document.querySelector("#inputEng").value);
    let inputMath = Number(document.querySelector("#inputMath").value);
    let inputSelective = Number(document.querySelector("#inputSelective").value);

    if (isNumber(inputCode) == false || inputCode > 40000 || inputCode < 10000) {alert("학번이 잘못되었습니다"); setDefault(); return;}
    else if (isNumber(inputYear) == false || inputYear < 1000 || inputYear >= 10000) {alert("시험연도가 잘못되었습니다"); setDefault(); return;} 
    else if (inputMonth == '회차') {alert("회차를 선택해 주세요"); setDefault(); return;}
    else if (scoreCheck(inputKor) == false || scoreCheck(inputEng) == false || scoreCheck(inputMath) == false || scoreCheck(inputSelective) == false) {alert("점수를 확인해 주세요"); setDefault(); return;}

    let inputTestDate = `${inputYear}.${inputMonth}`
    let inputScoreNum = scoreList.length == 0 ? 1 : scoreList.length + 1
    let newScore = {scoreNum : inputScoreNum, studentNum : 4, korean : 85, english : 100, math : 100, selective : 50, testDate : 2024.4}
}

function setDefault() {
    document.querySelector("#inputCode").value = "";
    document.querySelector("#inputYear").value = "";
    document.querySelector("#inputMonth").value = "회차";
    document.querySelector("#inputKor").value = "";
    document.querySelector("#inputEng").value = "";
    document.querySelector("#inputMath").value = "";
    document.querySelector("#inputSelective").value = "";
}

function editLine() {

}

function delLine() {

}
function formatTable(scNum) {
    for (sc of scoreList) {
        let dateArray = testDateSplit(sc.testDate)
        if (sc.scoreNum == scNum) {
            tableKor = sc.korean;
            tableEng = sc.english;
            tableMath = sc.math;
            tableSelective = sc.selective;
            tableYear = dateArray[0];
            tableMonth = testMonth(Number(dateArray[1]));
            tableHTML += `<tr scope="col">
                        <td>${tableCode}</td>
                        <td>${tableName}</td>
                        <td>${tableYear}</td>
                        <td>${tableMonth}</td>
                        <td>${tableKor}</td><td>${tableEng}</td><td>${tableMath}</td><td>${tableSelective}</td>
                        <td><button class="btn btn-sm btn-warning">수정</button><button class="btn btn-sm btn-warning mx-2">삭제</button></td>
                        </tr>`
        }
    }
}

function testDateSplit(testDate){
    if (testDate != undefined) {
        tDate = String(testDate)
        tdArray = tDate.split(".")
        return tdArray;
    }
}

function testMonth(num){
    switch (num) {
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

function isNumber(num){
    return (typeof num === 'number' && isFinite(num));
}

function scoreCheck(num){
    if (isNumber(num) == true) {
        if (num >= 0 && num <= 100) {
            return true;
        }
    } else {return false;}
}