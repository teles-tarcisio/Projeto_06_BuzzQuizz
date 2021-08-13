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

    printQuizzBanner(response);

    createListOfCards();

    createCardSlots(response);

    createQuestionInCardSlots(response);

    createAnswersInEachQuestion(response);
}


function printQuizzBanner(serverResponse) {
    let quizzBanner = document.querySelector(".quizz-banner");
    quizzBanner.innerHTML = '';
    quizzBanner.innerHTML += `
        <div class="quiz-title">
            <img src="${serverResponse.data.image}">
            <p>${serverResponse.data.title}</p>
        </div>`;
    console.log("printed quizz banner at the top?");
}

function createListOfCards() {
    let mainScreen = document.querySelector("main");
    let newListOfCards = document.createElement("ul");
    newListOfCards.className = "question-cards-list";
    mainScreen.appendChild(newListOfCards);
    console.log("created ul_list-of-cards:\n", mainScreen.innerHTML);
}

function createCardSlots(serverResponse) {
    //number of card slots needed:
    let numberOfQuestions = serverResponse.data.questions.length;
    console.log(serverResponse.data.questions, "\n# of questions: ", numberOfQuestions);

    let newCardSlot;
    //create # of card slots needed:
    for (i = 0; i < numberOfQuestions; i++) {
        newCardSlot = document.createElement("li");
        newCardSlot.className = `card-slot${i}`;

        document.querySelector("ul.question-cards-list").innerHTML += "\n";
        document.querySelector("ul.question-cards-list").appendChild(newCardSlot);
        document.querySelector("ul.question-cards-list").innerHTML += "\n";
    }
    console.log("created some li_card-slot 's\n", document.querySelector("main").innerHTML);
}

function createQuestionInCardSlots(serverResponse) {
    //each li_card-slot has one question and multiple answers:
    let numberOfQuestions = serverResponse.data.questions.length;

    let listOfCardSlots = document.querySelectorAll(".question-cards-list li");

    //adding the question inside the frame:
    for (i = 0; i < numberOfQuestions; i++) {
        let newFrameQuestion = document.createElement("ul");
        newFrameQuestion.className = `question${i}`;
        listOfCardSlots[i].innerHTML += "\n";
        listOfCardSlots[i].appendChild(newFrameQuestion);
    }
    console.log(document.querySelector("main").innerHTML);
    console.log("added question inside each card frame");
}

function createAnswersInEachQuestion(serverResponse) {
    //each card-slot__ul is ONE question with li__answers inside:
    let numberOfQuestions = serverResponse.data.questions.length;
        
    let listInsideQuestionUL = document.querySelectorAll(".question-cards-list li ul");

    for (i = 0; i < numberOfQuestions; i++) {
        let numberOfAnswers = serverResponse.data.questions[i].answers.length;
        for (j = 0; j < numberOfAnswers; j++) {
            let newListItem = document.createElement("li");
            newListItem.className = `answer${i}${j}`;
            listInsideQuestionUL[i].innerHTML += "\n";
            listInsideQuestionUL[i].appendChild(newListItem);
        }
    }
    console.log(document.querySelector("main").innerHTML);
    console.log("added li's inside question ul inside each card frame?");

}
