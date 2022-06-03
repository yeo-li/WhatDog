//start.js
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const endPoint = 12;
const result = document.querySelector("#result");
const select = [];


function calResult() {
    var pointArray = [
        { name: 'E', value: 0, key: 0 },
        { name: 'I', value: 0, key: 1 },
        { name: 'N', value: 0, key: 2 },
        { name: 'S', value: 0, key: 3 },
        { name: 'T', value: 0, key: 4 },
        { name: 'F', value: 0, key: 5 },
        { name: 'P', value: 0, key: 6 },
        { name: 'J', value: 0, key: 7 },
    ]

    var mbtiArray = [
        { name: ['E', 'N', 'T', 'P'], key: 0 },
        { name: ['E', 'N', 'T', 'J'], key: 1 },
        { name: ['E', 'N', 'F', 'P'], key: 2 },
        { name: ['E', 'N', 'F', 'J'], key: 3 },
        { name: ['E', 'S', 'T', 'P'], key: 4 },
        { name: ['E', 'S', 'T', 'J'], key: 5 },
        { name: ['E', 'S', 'F', 'P'], key: 6 },
        { name: ['E', 'S', 'F', 'J'], key: 7 },
        { name: ['I', 'N', 'T', 'P'], key: 8 },
        { name: ['I', 'N', 'T', 'J'], key: 9 },
        { name: ['I', 'N', 'F', 'P'], key: 10 },
        { name: ['I', 'N', 'F', 'J'], key: 11 },
        { name: ['I', 'S', 'T', 'P'], key: 12 },
        { name: ['I', 'S', 'T', 'J'], key: 13 },
        { name: ['I', 'S', 'F', 'P'], key: 14 },
        { name: ['I', 'S', 'F', 'J'], key: 15 },
    ]

    for (let i = 0; i < endPoint; i++) {
        var target = qnaList[i].a[select[i]];
        for (let j = 0; j < pointArray.length; j++) {
            if (target.type === pointArray[j].name) {
                pointArray[j].value += 1;
            }
        }
    }

     pointArray.sort(function (a, b){
        if(a.value > b.value){
            return -1;
        }
        if(a.value < b.value){
            return 1;
        }
        return 0;
    });

    var resultArray = [
        pointArray[0],
        pointArray[1],
        pointArray[2],
        pointArray[3],
    ]

    resultArray.sort(function (a, b){
        if(a.key < b.key){
            return -1;
        }
        if(a.key > b.key){
            return 1;
        }
        return 0;
    })

    for (let j = 0; j < 16; j++) {
        var cnt = 0;
        for (let k = 0; k < 4; k++) {
            if (resultArray[k].name === mbtiArray[j].name[k]) {
                cnt++;
            }
        }
        console.log(mbtiArray[j], cnt);

        if (cnt == 4) {
            
            return mbtiArray[j].key;
        }
        cnt = 0;
    }
        
}

function setResult(){
    let point = calResult();
    console.log(point);
    const resultName = document.querySelector('#resultname');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-'+point+'.jpg';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}


function goResult() {
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        }, 450)
    }, 450);
   setResult();
}

function addAnswer(answerText, qIdx, idx) {
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('Button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function () {
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
            select[qIdx] = idx;
            for (let i = 0; i < children.length; i++) {
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        }, 450);
    }, false);
}

function goNext(qIdx) {
    if (qIdx === endPoint) {
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');

    q.innerHTML = qnaList[qIdx].q;
    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100 / endPoint) * (qIdx) + '%';
}

function begin() {
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        }, 450)
        let qIdx = 0;
        goNext(qIdx);
    }, 450);

}