function launchQuizz(element) {
    console.log(element);
    let mainScreen = document.querySelector("main");
    mainScreen.innerHTML = "";
    mainScreen.innerHTML += insertSelectedQuizz();
}

function insertSelectedQuizz() {
    const insertQuiz = `
    <div class="quiz">
            <div class="quizTitle">
                <img src="/images/quiztitleharrypotter.png">
                <p>O quão Potterhead é você?</p>
            </div>
            <ul>
                <li class="questionTitle">
                    <p>Em qual animal Olho-Tonto Moody transfigurou Malfoy?</p>
                </li>
                <li class="questionAnswer">
                    <img src="/images/Gatineo.png">
                    <p>Gatineo</p>
                </li>
                <li class="questionAnswer">
                    <img src="/images/Gatineo.png">
                    <p>Ratata</p>
                </li>
                <li class="questionAnswer">
                    <img src="/images/Gatineo.png">
                    <p>Sapo gordo</p>
                </li>
                <li class="questionAnswer">
                    <img src="/images/Gatineo.png">
                    <p>Mustela putorius (o Furão)</p>
                </li>
            </ul>
        </div>`;
        return insertQuiz;
}


function launchResult(element) {
    console.log(element);
    let mainScreen = document.querySelector("main");
    mainScreen.innerHTML = "";
    mainScreen.innerHTML += insertQuizResult();
}

function insertQuizResult() {
    const insertResult = `
    <div class="quiz-result">
            <div class="quiz-result-title">
                <h1>88% de acerto: Você é praticamente um aluno de Hogwarts!</h1>
            </div>
            <div class="quiz-result-text">
                <img src="/images/simpsons.png">
                <p>Parabéns Potterhead! Bem-vindx a Hogwarts, aproveite o loop infinito de comida e clique no botão
                    abaixo para usar o vira-tempo e reiniciar este teste.</p>
            </div>
        </div>
        <div class="final-page-options">
            <button>
                Reiniciar Quizz
            </button>
            <p onclick="window.location.reload()">Voltar para home</p>
        </div>`;
        return insertResult;
}


/* -----------------------------------------------*/
function launchSelectedQuizz() {
    let mainScreen = document.querySelector("main");
    mainScreen.innerHTML = "";

    let quizID = 1;
    const quizzPromise = axios.get(`${QUIZZES_URL}` + quizID);
    quizzPromise.then(launchFriendsQuizz);
    quizzPromise.catch(console.log);
}

function launchFriendsQuizz(response) {
    let quizzBanner = document.querySelector(".quizz-banner");
    quizzBanner.innerHTML = '';
    quizzBanner.innerHTML += `
        <div class="quiz-title">
            <img src="${response.data.image}">
            <p>${response.data.title}</p>
        </div>`;
    
    let mainScreen = document.querySelector("main");
    // loop aqui posteriormente pra generalizar
    mainScreen.innerHTML += `
    <div class="quiz">
        <ul>
            <li class="question-title">
                <p>${response.data.questions[0].title}</p>
            </li>
            <li class="question-answer">
                <img src="${response.data.questions[0].answers[0].image}">
                <p>${response.data.questions[0].answers[0].text}</p>
            </li>
            <li class="question-answer">
                <img src="${response.data.questions[0].answers[1].image}">
                <p>${response.data.questions[0].answers[1].text}</p>
            </li>
            <li class="question-answer">
                <img src="${response.data.questions[0].answers[2].image}">
                <p>${response.data.questions[0].answers[2].text}</p>
            </li>
            <li class="question-answer">
                <img src="${response.data.questions[0].answers[3].image}">
                <p>${response.data.questions[0].answers[3].text}</p>
            </li>
        </ul>
    </div>`;
    console.log("finished response.data.questions array");
}

/* -----------------------------------------------*/