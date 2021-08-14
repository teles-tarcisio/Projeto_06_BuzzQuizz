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

// GLOBAL VARIABLE ----------------------------------------
// object that replicates a single quizz sent by server:
let localQuizzReplica = {
    id: "",
    title: "",
    image: "",
    questions: [],
    level: []
};
//---------------------------------------------------------

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
    console.log("server responded: \n", response.data);
    
    localQuizzReplica = response.data;
    console.log("replica: ", localQuizzReplica);

    printQuizzBanner(localQuizzReplica);
    
    /*
    createListOfCards();

    createCardSlots(response);

    createQuestionInCardSlots(response);

    createAnswersInEachQuestion(response);
    */
}


function printQuizzBanner(localQuizz) {
    //create new <img src="...">:
    let newBannerImg = document.createElement("img");
    newBannerImg.setAttribute("src", localQuizz.image);
    
    //create new <p> :
    let newBannerTitle = document.createElement("p");
    newBannerTitle.innerHTML = localQuizz.title;

    //create new <div class="quiz-title"> :
    let newDiv = document.createElement("div");
    newDiv.className = "quiz-title";
    //append img and title to created div:
    newDiv.appendChild(newBannerImg);
    newDiv.appendChild(newBannerTitle);

    let quizzTopBanner = document.querySelector(".quizz-banner");
    quizzTopBanner.innerHTML = "";
    //append created div to DOM:
    quizzTopBanner.appendChild(newDiv);

    console.log(quizzTopBanner.innerHTML);
    console.log("printed quizz banner at the top?");
}
