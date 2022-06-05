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
    const resultName1 = document.querySelector('#resultname1');
    resultName1.innerHTML = infoList[point].name1;
    const resultName2 = document.querySelector('#resultname2');
    resultName2.innerHTML = infoList[point].name2;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-'+point+'.jpg';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;

    if(point==0){

        var ghImg1 = document.createElement('img');
        const ghimgDiv1 = document.querySelector('#ghimg1');
        var ghimgURL1 = 'img/image-5.jpg';
        ghImg1.src = ghimgURL1;
        ghImg1.alt = 5;
        ghImg1.classList.add('img-fluid');
        ghImg1.style="width:150px";
        ghimgDiv1.appendChild(ghImg1);

        var ghImg2 = document.createElement('img');
        const ghimgDiv2 = document.querySelector('#ghimg2');
        var ghimgURL2 = 'img/image-14.jpg';
        ghImg2.src = ghimgURL2;
        ghImg2.alt = 14;
        ghImg2.classList.add('img-fluid');
        ghImg2.style="width:150px";
        ghimgDiv2.appendChild(ghImg2);

        const ghName1 = document.querySelector('#ghname1');
        ghName1.innerHTML = infoList[5].name1;
        const ghName2 = document.querySelector('#ghname2');
        ghName2.innerHTML = infoList[5].name2;
        const ghName3 = document.querySelector('#ghname3');
        ghName3.innerHTML = infoList[14].name1;
        const ghName4 = document.querySelector('#ghname4');
        ghName4.innerHTML = infoList[14].name2;
    }
    else if(point == 1){
        var ghImg1 = document.createElement('img');
        const ghimgDiv1 = document.querySelector('#ghimg1');
        var ghimgURL1 = 'img/image-6.jpg';
        ghImg1.src = ghimgURL1;
        ghImg1.alt = 6;
        ghImg1.classList.add('img-fluid');
        ghImg1.style="width:150px";
        ghimgDiv1.appendChild(ghImg1);

        var ghImg2 = document.createElement('img');
        const ghimgDiv2 = document.querySelector('#ghimg2');
        var ghimgURL2 = 'img/image-11.jpg';
        ghImg2.src = ghimgURL2;
        ghImg2.alt = 11;
        ghImg2.classList.add('img-fluid');
        ghImg2.style="width:150px";
        ghimgDiv2.appendChild(ghImg2);

        const ghName1 = document.querySelector('#ghname1');
        ghName1.innerHTML = infoList[6].name1;
        const ghName2 = document.querySelector('#ghname2');
        ghName2.innerHTML = infoList[6].name2;
        const ghName3 = document.querySelector('#ghname3');
        ghName3.innerHTML = infoList[11].name1;
        const ghName4 = document.querySelector('#ghname4');
        ghName4.innerHTML = infoList[11].name2;
    }
    else if(point == 2){
        var ghImg1 = document.createElement('img');
        const ghimgDiv1 = document.querySelector('#ghimg1');
        var ghimgURL1 = 'img/image-11.jpg';
        ghImg1.src = ghimgURL1;
        ghImg1.alt = 11;
        ghImg1.classList.add('img-fluid');
        ghImg1.style="width:150px";
        ghimgDiv1.appendChild(ghImg1);

        var ghImg2 = document.createElement('img');
        const ghimgDiv2 = document.querySelector('#ghimg2');
        var ghimgURL2 = 'img/image-12.jpg';
        ghImg2.src = ghimgURL2;
        ghImg2.alt = 12;
        ghImg2.classList.add('img-fluid');
        ghImg2.style="width:150px";
        ghimgDiv2.appendChild(ghImg2);

        const ghName1 = document.querySelector('#ghname1');
        ghName1.innerHTML = infoList[11].name1;
        const ghName2 = document.querySelector('#ghname2');
        ghName2.innerHTML = infoList[11].name2;
        const ghName3 = document.querySelector('#ghname3');
        ghName3.innerHTML = infoList[12].name1;
        const ghName4 = document.querySelector('#ghname4');
        ghName4.innerHTML = infoList[12].name2;
    }
    else if(point == 3){
        var ghImg1 = document.createElement('img');
        const ghimgDiv1 = document.querySelector('#ghimg1');
        var ghimgURL1 = 'img/image-7.jpg';
        ghImg1.src = ghimgURL1;
        ghImg1.alt = 7;
        ghImg1.classList.add('img-fluid');
        ghImg1.style="width:150px";
        ghimgDiv1.appendChild(ghImg1);

        var ghImg2 = document.createElement('img');
        const ghimgDiv2 = document.querySelector('#ghimg2');
        var ghimgURL2 = 'img/image-13.jpg';
        ghImg2.src = ghimgURL2;
        ghImg2.alt = 13;
        ghImg2.classList.add('img-fluid');
        ghImg2.style="width:150px";
        ghimgDiv2.appendChild(ghImg2);

        const ghName1 = document.querySelector('#ghname1');
        ghName1.innerHTML = infoList[7].name1;
        const ghName2 = document.querySelector('#ghname2');
        ghName2.innerHTML = infoList[7].name2;
        const ghName3 = document.querySelector('#ghname3');
        ghName3.innerHTML = infoList[13].name1;
        const ghName4 = document.querySelector('#ghname4');
        ghName4.innerHTML = infoList[13].name2;
    }
    else if(point == 4){
        var ghImg1 = document.createElement('img');
        const ghimgDiv1 = document.querySelector('#ghimg1');
        var ghimgURL1 = 'img/image-2.jpg';
        ghImg1.src = ghimgURL1;
        ghImg1.alt = 2;
        ghImg1.classList.add('img-fluid');
        ghImg1.style="width:150px";
        ghimgDiv1.appendChild(ghImg1);

        var ghImg2 = document.createElement('img');
        const ghimgDiv2 = document.querySelector('#ghimg2');
        var ghimgURL2 = 'img/image-10.jpg';
        ghImg2.src = ghimgURL2;
        ghImg2.alt = 10;
        ghImg2.classList.add('img-fluid');
        ghImg2.style="width:150px";
        ghimgDiv2.appendChild(ghImg2);

        const ghName1 = document.querySelector('#ghname1');
        ghName1.innerHTML = infoList[2].name1;
        const ghName2 = document.querySelector('#ghname2');
        ghName2.innerHTML = infoList[2].name2;
        const ghName3 = document.querySelector('#ghname3');
        ghName3.innerHTML = infoList[10].name1;
        const ghName4 = document.querySelector('#ghname4');
        ghName4.innerHTML = infoList[10].name2;
    }
    else if(point == 5){
        var ghImg1 = document.createElement('img');
        const ghimgDiv1 = document.querySelector('#ghimg1');
        var ghimgURL1 = 'img/image-1.jpg';
        ghImg1.src = ghimgURL1;
        ghImg1.alt = 1;
        ghImg1.classList.add('img-fluid');
        ghImg1.style="width:150px";
        ghimgDiv1.appendChild(ghImg1);

        var ghImg2 = document.createElement('img');
        const ghimgDiv2 = document.querySelector('#ghimg2');
        var ghimgURL2 = 'img/image-9.jpg';
        ghImg2.src = ghimgURL2;
        ghImg2.alt = 9;
        ghImg2.classList.add('img-fluid');
        ghImg2.style="width:150px";
        ghimgDiv2.appendChild(ghImg2);

        const ghName1 = document.querySelector('#ghname1');
        ghName1.innerHTML = infoList[1].name1;
        const ghName2 = document.querySelector('#ghname2');
        ghName2.innerHTML = infoList[1].name2;
        const ghName3 = document.querySelector('#ghname3');
        ghName3.innerHTML = infoList[9].name1;
        const ghName4 = document.querySelector('#ghname4');
        ghName4.innerHTML = infoList[9].name2;
    }
    else if(point == 6){
        var ghImg1 = document.createElement('img');
        const ghimgDiv1 = document.querySelector('#ghimg1');
        var ghimgURL1 = 'img/image-8.jpg';
        ghImg1.src = ghimgURL1;
        ghImg1.alt = 8;
        ghImg1.classList.add('img-fluid');
        ghImg1.style="width:150px";
        ghimgDiv1.appendChild(ghImg1);

        var ghImg2 = document.createElement('img');
        const ghimgDiv2 = document.querySelector('#ghimg2');
        var ghimgURL2 = 'img/image-3.jpg';
        ghImg2.src = ghimgURL2;
        ghImg2.alt = 3;
        ghImg2.classList.add('img-fluid');
        ghImg2.style="width:150px";
        ghimgDiv2.appendChild(ghImg2);

        const ghName1 = document.querySelector('#ghname1');
        ghName1.innerHTML = infoList[8].name1;
        const ghName2 = document.querySelector('#ghname2');
        ghName2.innerHTML = infoList[8].name2;
        const ghName3 = document.querySelector('#ghname3');
        ghName3.innerHTML = infoList[3].name1;
        const ghName4 = document.querySelector('#ghname4');
        ghName4.innerHTML = infoList[3].name2;
    }
    else if(point == 7){
        var ghImg1 = document.createElement('img');
        const ghimgDiv1 = document.querySelector('#ghimg1');
        var ghimgURL1 = 'img/image-13.jpg';
        ghImg1.src = ghimgURL1;
        ghImg1.alt = 13;
        ghImg1.classList.add('img-fluid');
        ghImg1.style="width:150px";
        ghimgDiv1.appendChild(ghImg1);

        var ghImg2 = document.createElement('img');
        const ghimgDiv2 = document.querySelector('#ghimg2');
        var ghimgURL2 = 'img/image-2.jpg';
        ghImg2.src = ghimgURL2;
        ghImg2.alt = 2;
        ghImg2.classList.add('img-fluid');
        ghImg2.style="width:150px";
        ghimgDiv2.appendChild(ghImg2);

        const ghName1 = document.querySelector('#ghname1');
        ghName1.innerHTML = infoList[13].name1;
        const ghName2 = document.querySelector('#ghname2');
        ghName2.innerHTML = infoList[13].name2;
        const ghName3 = document.querySelector('#ghname3');
        ghName3.innerHTML = infoList[2].name1;
        const ghName4 = document.querySelector('#ghname4');
        ghName4.innerHTML = infoList[2].name2;
    }
    else if(point == 8){
        var ghImg1 = document.createElement('img');
        const ghimgDiv1 = document.querySelector('#ghimg1');
        var ghimgURL1 = 'img/image-4.jpg';
        ghImg1.src = ghimgURL1;
        ghImg1.alt = 4;
        ghImg1.classList.add('img-fluid');
        ghImg1.style="width:150px";
        ghimgDiv1.appendChild(ghImg1);

        var ghImg2 = document.createElement('img');
        const ghimgDiv2 = document.querySelector('#ghimg2');
        var ghimgURL2 = 'img/image-6.jpg';
        ghImg2.src = ghimgURL2;
        ghImg2.alt = 6;
        ghImg2.classList.add('img-fluid');
        ghImg2.style="width:150px";
        ghimgDiv2.appendChild(ghImg2);
        const ghName1 = document.querySelector('#ghname1');
        ghName1.innerHTML = infoList[4].name1;
        const ghName2 = document.querySelector('#ghname2');
        ghName2.innerHTML = infoList[4].name2;
        const ghName3 = document.querySelector('#ghname3');
        ghName3.innerHTML = infoList[6].name1;
        const ghName4 = document.querySelector('#ghname4');
        ghName4.innerHTML = infoList[6].name2;
    }
    else if(point == 9){
        var ghImg1 = document.createElement('img');
        const ghimgDiv1 = document.querySelector('#ghimg1');
        var ghimgURL1 = 'img/image-3.jpg';
        ghImg1.src = ghimgURL1;
        ghImg1.alt = 3;
        ghImg1.classList.add('img-fluid');
        ghImg1.style="width:150px";
        ghimgDiv1.appendChild(ghImg1);

        var ghImg2 = document.createElement('img');
        const ghimgDiv2 = document.querySelector('#ghimg2');
        var ghimgURL2 = 'img/image-7.jpg';
        ghImg2.src = ghimgURL2;
        ghImg2.alt = 7;
        ghImg2.classList.add('img-fluid');
        ghImg2.style="width:150px";
        ghimgDiv2.appendChild(ghImg2);
        const ghName1 = document.querySelector('#ghname1');
        ghName1.innerHTML = infoList[3].name1;
        const ghName2 = document.querySelector('#ghname2');
        ghName2.innerHTML = infoList[3].name2;
        const ghName3 = document.querySelector('#ghname3');
        ghName3.innerHTML = infoList[7].name1;
        const ghName4 = document.querySelector('#ghname4');
        ghName4.innerHTML = infoList[7].name2;
    }
    else if(point == 10){
        var ghImg1 = document.createElement('img');
        const ghimgDiv1 = document.querySelector('#ghimg1');
        var ghimgURL1 = 'img/image-3.jpg';
        ghImg1.src = ghimgURL1;
        ghImg1.alt = 3;
        ghImg1.classList.add('img-fluid');
        ghImg1.style="width:150px";
        ghimgDiv1.appendChild(ghImg1);

        var ghImg2 = document.createElement('img');
        const ghimgDiv2 = document.querySelector('#ghimg2');
        var ghimgURL2 = 'img/image-6.jpg';
        ghImg2.src = ghimgURL2;
        ghImg2.alt = 6;
        ghImg2.classList.add('img-fluid');
        ghImg2.style="width:150px";
        ghimgDiv2.appendChild(ghImg2);
        const ghName1 = document.querySelector('#ghname1');
        ghName1.innerHTML = infoList[3].name1;
        const ghName2 = document.querySelector('#ghname2');
        ghName2.innerHTML = infoList[3].name2;
        const ghName3 = document.querySelector('#ghname3');
        ghName3.innerHTML = infoList[6].name1;
        const ghName4 = document.querySelector('#ghname4');
        ghName4.innerHTML = infoList[6].name2;
    }
    else if(point == 11){
        var ghImg1 = document.createElement('img');
        const ghimgDiv1 = document.querySelector('#ghimg1');
        var ghimgURL1 = 'img/image-0.jpg';
        ghImg1.src = ghimgURL1;
        ghImg1.alt = 0;
        ghImg1.classList.add('img-fluid');
        ghImg1.style="width:150px";
        ghimgDiv1.appendChild(ghImg1);

        var ghImg2 = document.createElement('img');
        const ghimgDiv2 = document.querySelector('#ghimg2');
        var ghimgURL2 = 'img/image-4.jpg';
        ghImg2.src = ghimgURL2;
        ghImg2.alt = 4;
        ghImg2.classList.add('img-fluid');
        ghImg2.style="width:150px";
        ghimgDiv2.appendChild(ghImg2);
        const ghName1 = document.querySelector('#ghname1');
        ghName1.innerHTML = infoList[0].name1;
        const ghName2 = document.querySelector('#ghname2');
        ghName2.innerHTML = infoList[0].name2;
        const ghName3 = document.querySelector('#ghname3');
        ghName3.innerHTML = infoList[4].name1;
        const ghName4 = document.querySelector('#ghname4');
        ghName4.innerHTML = infoList[4].name2;
    }
    else if(point == 12){
        var ghImg1 = document.createElement('img');
        const ghimgDiv1 = document.querySelector('#ghimg1');
        var ghimgURL1 = 'img/image-4.jpg';
        ghImg1.src = ghimgURL1;
        ghImg1.alt = 4;
        ghImg1.classList.add('img-fluid');
        ghImg1.style="width:150px";
        ghimgDiv1.appendChild(ghImg1);

        var ghImg2 = document.createElement('img');
        const ghimgDiv2 = document.querySelector('#ghimg2');
        var ghimgURL2 = 'img/image-2.jpg';
        ghImg2.src = ghimgURL2;
        ghImg2.alt = 2;
        ghImg2.classList.add('img-fluid');
        ghImg2.style="width:150px";
        ghimgDiv2.appendChild(ghImg2);
        const ghName1 = document.querySelector('#ghname1');
        ghName1.innerHTML = infoList[4].name1;
        const ghName2 = document.querySelector('#ghname2');
        ghName2.innerHTML = infoList[4].name2;
        const ghName3 = document.querySelector('#ghname3');
        ghName3.innerHTML = infoList[2].name1;
        const ghName4 = document.querySelector('#ghname4');
        ghName4.innerHTML = infoList[2].name2;
    }
    else if(point == 13){
        var ghImg1 = document.createElement('img');
        const ghimgDiv1 = document.querySelector('#ghimg1');
        var ghimgURL1 = 'img/image-7.jpg';
        ghImg1.src = ghimgURL1;
        ghImg1.alt = 7;
        ghImg1.classList.add('img-fluid');
        ghImg1.style="width:150px";
        ghimgDiv1.appendChild(ghImg1);

        var ghImg2 = document.createElement('img');
        const ghimgDiv2 = document.querySelector('#ghimg2');
        var ghimgURL2 = 'img/image-3.jpg';
        ghImg2.src = ghimgURL2;
        ghImg2.alt = 3;
        ghImg2.classList.add('img-fluid');
        ghImg2.style="width:150px";
        ghimgDiv2.appendChild(ghImg2);
        const ghName1 = document.querySelector('#ghname1');
        ghName1.innerHTML = infoList[7].name1;
        const ghName2 = document.querySelector('#ghname2');
        ghName2.innerHTML = infoList[7].name2;
        const ghName3 = document.querySelector('#ghname3');
        ghName3.innerHTML = infoList[3].name1;
        const ghName4 = document.querySelector('#ghname4');
        ghName4.innerHTML = infoList[3].name2;
    }
    else if(point == 14){
        var ghImg1 = document.createElement('img');
        const ghimgDiv1 = document.querySelector('#ghimg1');
        var ghimgURL1 = 'img/image-2.jpg';
        ghImg1.src = ghimgURL1;
        ghImg1.alt = 2;
        ghImg1.classList.add('img-fluid');
        ghImg1.style="width:150px";
        ghimgDiv1.appendChild(ghImg1);

        var ghImg2 = document.createElement('img');
        const ghimgDiv2 = document.querySelector('#ghimg2');
        var ghimgURL2 = 'img/image-0.jpg';
        ghImg2.src = ghimgURL2;
        ghImg2.alt = 0;
        ghImg2.classList.add('img-fluid');
        ghImg2.style="width:150px";
        ghimgDiv2.appendChild(ghImg2);
        const ghName1 = document.querySelector('#ghname1');
        ghName1.innerHTML = infoList[2].name1;
        const ghName2 = document.querySelector('#ghname2');
        ghName2.innerHTML = infoList[2].name2;
        const ghName3 = document.querySelector('#ghname3');
        ghName3.innerHTML = infoList[0].name1;
        const ghName4 = document.querySelector('#ghname4');
        ghName4.innerHTML = infoList[0].name2;
    }
    else if(point == 15){
        var ghImg1 = document.createElement('img');
        const ghimgDiv1 = document.querySelector('#ghimg1');
        var ghimgURL1 = 'img/image-11.jpg';
        ghImg1.src = ghimgURL1;
        ghImg1.alt = 11;
        ghImg1.classList.add('img-fluid');
        ghImg1.style="width:150px";
        ghimgDiv1.appendChild(ghImg1);

        var ghImg2 = document.createElement('img');
        const ghimgDiv2 = document.querySelector('#ghimg2');
        var ghimgURL2 = 'img/image-10.jpg';
        ghImg2.src = ghimgURL2;
        ghImg2.alt = 10;
        ghImg2.classList.add('img-fluid');
        ghImg2.style="width:150px";
        ghimgDiv2.appendChild(ghImg2);
        const ghName1 = document.querySelector('#ghname1');
        ghName1.innerHTML = infoList[11].name1;
        const ghName2 = document.querySelector('#ghname2');
        ghName2.innerHTML = infoList[11].name2;
        const ghName3 = document.querySelector('#ghname3');
        ghName3.innerHTML = infoList[10].name1;
        const ghName4 = document.querySelector('#ghname4');
        ghName4.innerHTML = infoList[10].name2;
    }


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