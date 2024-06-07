/*
    메모리 설계

    학생 : {학생번호 이름 학번 연락처 비밀번호}
    점수 : {점수번호 학생번호 국어 영어 수학 사회/과학 시험식별}
        시험식별 : ㅁㅁㅁㅁ.ㅇ 년도.1~4, 3월 6월 9월 11월 모의고사
    게시판 : {게사판번호 제목 등록일 조회수 작성자번호 내용}

    색깔 테마 (진한색 > 연한색)
    "#0554F2" "#1675F2" "#3889F2" "#8DB9F2" "#F2F2EB"

    Navbar : "#1675F2"
*/

let score = [{scoreNum : 1, studentNum : 1, korean : 100, english : 100, math : 100, selective : 50, testDate : 2024.1}]
let selYear = 0;
let selClass = 0;
drawChart();

function drawChart(){ // 학년 반 선택 후 반 단위 점수 그래프
    const ctx = document.querySelector("#myChart");
        
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
        }
    );

}

function pop(){
    console.log("pop")
}

function setYear(num){ // 현재 선택한 학년
    selYear = num;
    console.log("선택한 학년 : "+selYear)
}

function setClass(num){ // 현재 선택한 반
    selClass = num;
    console.log("선택한 반 : "+selClass)
}