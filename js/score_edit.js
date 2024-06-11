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

let newTestDate = 0;

function search(stdNum) {
    let searchCode = document.querySelector("#searchCode").value;
    if (stdNum != 0) {searchCode = stdNum};
    console.log(searchCode)
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
    let inputCode = parseInt(document.querySelector("#inputCode").value);

    targetNum = 0;
    let foundNum = 0;
    for (st of student) {
        if (st.studentCode == inputCode) {
            targetNum = st.studentNum; 
            foundNum = 1;
            break;
        }
    }
    if (foundNum == 0) {alert("학번에 해당하는 학생이 없습니다"); return;}
    let inputYear = parseInt(document.querySelector("#inputYear").value);
    let inputMonth = document.querySelector("#inputMonth").value;
    let inputTestDate = Number(`${inputYear}.${inputMonth}`)

    for (sc of scoreList) {
        if (sc.studentNum == targetNum && sc.testDate == inputTestDate) {
            alert("시험 성적이 중복됩니다"); setDefault(); return;
        }
    }

    let inputKor = parseInt(document.querySelector("#inputKor").value);
    let inputEng = parseInt(document.querySelector("#inputEng").value);
    let inputMath = parseInt(document.querySelector("#inputMath").value);
    let inputSelective = parseInt(document.querySelector("#inputSelective").value);

    
    if (isNumber(inputSelective) == false || inputSelective > 50 || inputSelective < 0 ) {alert("점수를 확인해 주세요"); setDefault(); return;}
    if (isNumber(inputCode) == false || inputCode > 40000 || inputCode < 10000) {alert("학번이 잘못되었습니다"); setDefault(); return;}
    if (isNumber(inputYear) == false || inputYear < 1000 || inputYear >= 10000) {alert("시험연도가 잘못되었습니다"); setDefault(); return;} 
    if (inputMonth == '회차') {alert("회차를 선택해 주세요"); setDefault(); return;}
    if (scoreCheck(inputKor) == false || scoreCheck(inputEng) == false || scoreCheck(inputMath) == false || scoreCheck(inputSelective) == false) {alert("점수를 확인해 주세요"); setDefault(); return;}
    

    let inputScoreNum = scoreList.length == 0 ? 1 : scoreList.length + 1
    let newScore = {scoreNum : inputScoreNum, studentNum : targetNum, korean : inputKor, english : inputEng, math : inputMath, selective : inputSelective, testDate : inputTestDate}
    scoreList.push(newScore);
    console.log(scoreList)
    search(targetNum)
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

function editLine(index) {
    let editCode = document.querySelector(`#code${index}`).innerHTML
    let editName = document.querySelector(`#name${index}`).innerHTML
    let editKor = document.querySelector(`#kor${index}`).innerHTML
    let editEng = document.querySelector(`#eng${index}`).innerHTML
    let editMath = document.querySelector(`#math${index}`).innerHTML
    let editSelective = document.querySelector(`#selective${index}`).innerHTML

    let editYear = document.querySelector(`#year${index}`).innerHTML
    let editMonth = document.querySelector(`#month${index}`).innerHTML
    let numMonth = 0;
    switch (editMonth) {
        case '3월':
            numMonth = 1; break;
        case '6월':
            numMonth = 2; break;
        case '9월':
            numMonth = 3; break;
        case '11월':
            numMonth = 4; break;
    }

    newTestDate = Number(`${editYear}.${numMonth}`)

    document.querySelector("#modal-body").innerHTML = `<form class="form-control">
    <div class="input-group my-1">
        <span class="input-group-text" id="basic-addon1">학번</span>
        <input class="form-control" id="newCode" value="${editCode}" disabled readonly/>
    </div>
    <div class="input-group my-1">
        <span class="input-group-text" id="basic-addon1">이름</span>
        <input class="form-control" id="newName" value="${editName}" disabled readonly/>
    </div>
    <div class="input-group my-1">
        <span class="input-group-text" id="basic-addon1">국어</span>
        <input class="form-control" id="newKor" value="${editKor}"/>
    </div>
    <div class="input-group my-1">
        <span class="input-group-text" id="basic-addon1">영어</span>
        <input class="form-control" id="newEng" value="${editEng}"/>
    </div>
    <div class="input-group my-1">
        <span class="input-group-text" id="basic-addon1">수학</span>
        <input class="form-control" id="newMath" value="${editMath}"/>
    </div>
    <div class="input-group my-1">
        <span class="input-group-text" id="basic-addon1">사회/과학</span>
        <input class="form-control" id="newSelective" value="${editSelective}"/>
    </div>
    </form>`

}

function saveEdit() {
    let newCode = document.querySelector("#newCode").value;
    let stNum = 0;
    for (st of student) {
        if (st.studentCode == newCode) {
            stNum = st.studentNum;
        }
    }
    for (sc of scoreList) {
        if (sc.studentNum == stNum && sc.testDate == newTestDate) {
            sc.korean = Number(document.querySelector("#newKor").value);
            sc.english = Number(document.querySelector("#newEng").value);
            sc.math = Number(document.querySelector("#newMath").value);
            sc.selective = Number(document.querySelector("#newSelective").value);
        }
    }
    search(newCode);
}

function delLine(index) {
    let delCode = document.querySelector(`#code${index}`).innerHTML
    console.log("delcode" + delCode)
    let delYear = document.querySelector(`#year${index}`).innerHTML
    let delMonth = document.querySelector(`#month${index}`).innerHTML
    let stNum = 0;
    let numMonth = 0;
    switch (delMonth) {
        case '3월':
            numMonth = 1; break;
        case '6월':
            numMonth = 2; break;
        case '9월':
            numMonth = 3; break;
        case '11월':
            numMonth = 4; break;
    }
    let delDate = Number(`${delYear}.${numMonth}`)
    
    for (st of student) {
        if (st.studentCode == delCode) {
            stNum = st.studentNum;
        }
    }
    for (sc of scoreList) {
        if (sc.studentNum == stNum && sc.testDate == delDate) {
            scoreList.splice(sc.scoreNum, 1);
        }
    }
    search(delCode);
}

function formatTable(scNum) {
    console.log("formattable")
    for (let i = 0; i < scoreList.length; i++) {
        
        let dateArray = testDateSplit(scoreList[i].testDate)
        if (scoreList[i].scoreNum == scNum) {
            console.log(scoreList[i])
            tableKor = scoreList[i].korean;
            tableEng = scoreList[i].english;
            tableMath = scoreList[i].math;
            tableSelective = scoreList[i].selective;
            tableYear = dateArray[0];
            tableMonth = testMonth(Number(dateArray[1]));
            tableHTML += `<tr scope="col">
                        <td id="code${i}">${tableCode}</td>
                        <td id="name${i}">${tableName}</td>
                        <td id="year${i}">${tableYear}</td>
                        <td id="month${i}">${tableMonth}</td>
                        <td id="kor${i}">${tableKor}</td><td id="eng${i}">${tableEng}</td><td id="math${i}">${tableMath}</td><td id="selective${i}">${tableSelective}</td>
                        <td><button type="button" class="btn btn-sm btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editLine(${i})">
                            수정
                          </button><button class="btn btn-sm btn-warning mx-2" onclick="delLine(${i})">삭제</button></td>
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
    if (isNumber(num) == false) {return false;}
    if (num >= 0 && num <= 100) {
        return true;
    } else {return false;}

}