const showVerb = document.getElementById('showVerb');
const showImage = document.getElementById('showImage');
const showAudio = document.getElementById('showAudio');

const first = document.getElementById('first-verb');
const second = document.getElementById('second-verb');
const third = document.getElementById('third-verb');
const fourth = document.getElementById('fourth-verb');

const next = document.getElementById('next');
const verbCounter = document.getElementById('verb-counter');
const allRightCounter = document.getElementById('all-right-answer');
const verbsContainer = document.getElementById('verbs-container');

const numberOfVerbs = verbs.length;

console.log(numberOfVerbs);

let answerRoulette = [0, 1, 1, 1]
let everyNumberOfVerbs = [];
let rightAnswer;
let allRightAnswers;

next.addEventListener('click', function () {
    ponerVerbo();
    next.style.display = 'none';
})

function ponerVerbo() {
    showVerb.innerHTML = "Deposita 200 bitcoins para jugar"
}