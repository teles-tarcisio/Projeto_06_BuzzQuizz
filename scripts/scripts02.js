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
            <p>Voltar para home</p>
        </div>`;
        return insertResult;
}