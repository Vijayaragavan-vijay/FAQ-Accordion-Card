const ques1 = document.querySelector('#ques1');
const ques2 = document.querySelector('#ques2');
const ques3 = document.querySelector('#ques3');
const ques4 = document.querySelector('#ques4');
const ques5 = document.querySelector('#ques5');
const arrow1 = document.querySelector('#btn1');
const arrow2 = document.querySelector('#btn2');
const arrow3 = document.querySelector('#btn3');
const arrow4 = document.querySelector('#btn4');
const arrow5 = document.querySelector('#btn5');
let count1 = 0,
    count2 = 0,
    count3 = 0,
    count4 = 0,
    count5 = 0;

const box = document.querySelector('#box');

ques1.addEventListener('click', show1);
ques2.addEventListener('click', show2);
ques3.addEventListener('click', show3);
ques4.addEventListener('click', show4);
ques5.addEventListener('click', show5);

arrow1.addEventListener('click', show1);
arrow2.addEventListener('click', show2);
arrow3.addEventListener('click', show3);
arrow4.addEventListener('click', show4);
arrow5.addEventListener('click', show5);

ques1.addEventListener('mouseover', movein);
ques2.addEventListener('mouseover', movein)
ques3.addEventListener('mouseover', movein);
ques4.addEventListener('mouseover', movein)
ques5.addEventListener('mouseover', movein);

ques1.addEventListener('mouseout', moveout);
ques2.addEventListener('mouseout', moveout)
ques3.addEventListener('mouseout', moveout);
ques4.addEventListener('mouseout', moveout)
ques5.addEventListener('mouseout', moveout);

function show1() {
    if (count1 % 2 == 0) {

        ques1.nextElementSibling.nextElementSibling.style.display = 'block';
        ques1.nextElementSibling.style.transform = 'rotate(-180deg)';
        questionDark(ques1);
        count1++;
    } else {
        ques1.nextElementSibling.nextElementSibling.style.display = 'none';
        ques1.nextElementSibling.style.transform = 'rotate(0deg)';
        questionlight(ques1);
        count1++;
    }
}

function show2() {
    if (count2 % 2 == 0) {
        ques2.nextElementSibling.nextElementSibling.style.display = 'block';
        ques2.nextElementSibling.style.transform = 'rotate(-180deg)';
        questionDark(ques2);
        count2++;
    } else {
        ques2.nextElementSibling.nextElementSibling.style.display = 'none';
        ques2.nextElementSibling.style.transform = 'rotate(0deg)';
        questionlight(ques2);
        count2++;
    }
}

function show3() {
    if (count3 % 2 == 0) {
        ques3.nextElementSibling.nextElementSibling.style.display = 'block';
        ques3.nextElementSibling.style.transform = 'rotate(-180deg)';
        questionDark(ques3);
        count3++;
    } else {
        ques3.nextElementSibling.nextElementSibling.style.display = 'none';
        ques3.nextElementSibling.style.transform = 'rotate(0deg)';
        questionlight(ques3);
        count3++;
    }
}

function show4() {
    if (count4 % 2 == 0) {
        ques4.nextElementSibling.nextElementSibling.style.display = 'block';
        ques4.nextElementSibling.style.transform = 'rotate(-180deg)';
        questionDark(ques4);
        count4++;
    } else {
        ques4.nextElementSibling.nextElementSibling.style.display = 'none';
        ques4.nextElementSibling.style.transform = 'rotate(0deg)';
        questionlight(ques4);
        count4++;
    }
}

function show5() {
    if (count5 % 2 == 0) {
        ques5.nextElementSibling.nextElementSibling.style.display = 'block';
        ques5.nextElementSibling.style.transform = 'rotate(-180deg)';
        questionDark(ques5);
        count5++;
    } else {
        ques5.nextElementSibling.nextElementSibling.style.display = 'none';
        ques5.nextElementSibling.style.transform = 'rotate(0deg)';
        questionlight(ques5);
        count5++;
    }
}


function questionDark(item) {
    item.style.color = 'black';
    // item.style.fontWeight = '500';
    item.style.fontStyle = 'bolder';
    item.style.fontSize = '12px';
    item.style.fontWeight = "700"
}

function questionlight(el) {
    el.style.color = 'hsl(237, 12%, 33%)';
    el.style.fontStyle = 'normal';
    el.style.fontWeight = "100"
}

function movein() {
    box.style.transform = 'translateX(35px) scaleX(-1)';
    box.style.transition = '0.7s'
}

function moveout() {
    box.style.transform = 'translateX(0px) scaleX(-1)';
    box.style.transition = '0.9s'
}