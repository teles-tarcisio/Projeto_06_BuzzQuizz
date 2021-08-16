// GLOBAL VARIABLE ----------------------------------------
// object that replicates a single quizz sent by server:
let localQuizzReplica = {
    id: "",
    title: "",
    image: "",
    questions: [],
    levels: []
};
//---------------------------------------------------------

function printQuizzBanner(localQuizz) {
    let quizzBanner = document.querySelector(".quizz-banner");
    quizzBanner.innerHTML = '';
    quizzBanner.innerHTML += `
            <img src="${localQuizz.image}">
            <p>${localQuizz.title}</p>`;
}

function createListOfCards() {
    let newListOfCards = document.createElement("ul");
    newListOfCards.className = "question-cards-list";

    let mainScreen = document.querySelector("main");
    mainScreen.appendChild(newListOfCards);
}

function createCardSlots(localQuizz) {
    //# of li's created == # of questions in quizz:
    let numberOfQuestions = localQuizz.questions.length;

    let listOfCards = document.querySelector(".question-cards-list");

    for (i = 0; i < numberOfQuestions; i++) {
        let newListItem = document.createElement("li");
        newListItem.className = `card-slot`;
        newListItem.innerHTML += "\n";

        let newInnerUL = document.createElement("ul");
        newInnerUL.className = `question`;
        newInnerUL.innerHTML += "\n";

        newListItem.appendChild(newInnerUL);
        listOfCards.innerHTML += "\n";
        listOfCards.appendChild(newListItem);
    }
}

function createQuestionInCardSlots(localQuizz) {
    //each li_card-slot has one question and multiple answers:
    let numberOfQuestions = localQuizz.questions.length;

    let listInsideCard = document.querySelectorAll(".question-cards-list ul");

    //adding the question inside the frame:
    for (i = 0; i < numberOfQuestions; i++) {
        let newListItem = document.createElement("li");
        newListItem.className = `question-title`;
        newListItem.style.backgroundColor = localQuizz.questions[i].color;
        newListItem.innerHTML = localQuizz.questions[i].title;
        listInsideCard[i].appendChild(newListItem);
        listInsideCard[i].innerHTML += "\n";
    }
}

function createAnswersInEachQuestion(localQuizz) {
    //each li_card-slot has one question and multiple answers:
    let numberOfQuestions = localQuizz.questions.length;

    let listInsideCard = document.querySelectorAll(".question-cards-list ul");

    //adding answers inside frame, after question title:
    for (i = 0; i < numberOfQuestions; i++) {
        let numberOfAnswers = localQuizz.questions[i].answers.length;
        for (j = 0; j < numberOfAnswers; j++) {
            let newListItem = document.createElement("li");
            newListItem.className = `answer`;
            newListItem.setAttribute("onclick", 'alert("clicked an answer")');
                        
            let newAnswerImage = document.createElement("img");
            newAnswerImage.setAttribute("src", localQuizz.questions[i].answers[j].image);
            newListItem.appendChild(newAnswerImage);

            let newAnswerText = document.createElement("p");
            newAnswerText.className = `text`;
            newAnswerText.innerHTML = localQuizz.questions[i].answers[j].text;
            newListItem.appendChild(newAnswerText);

            listInsideCard[i].appendChild(newListItem);
            listInsideCard[i].innerHTML += "\n";
        }
    }

}

function randomComparator() {
    return (Math.random() - 0.5);
}

function randomizeQuizz(quizzObject) {    
    quizzObject.questions = quizzObject.questions.sort(randomComparator);
    for (i = 0; i < quizzObject.questions.length; i++) {
        console.log(quizzObject.questions[i].answers);
        quizzObject.questions[i].answers = quizzObject.questions[i].answers.sort(randomComparator);
        console.log(quizzObject.questions[i].answers);
    }
}

function launchSelectedQuizz(response) {
    console.log("server responded: \n", response.data);

    localQuizzReplica = response.data;
    console.log("received quizz: ", localQuizzReplica.questions);
    
    randomizeQuizz(localQuizzReplica);
    console.log("randomized quizz: ", localQuizzReplica.questions);
                
    printQuizzBanner(localQuizzReplica);

    createListOfCards(localQuizzReplica);

    createCardSlots(localQuizzReplica);

    createQuestionInCardSlots(localQuizzReplica);

    createAnswersInEachQuestion(localQuizzReplica);
}

function getSelectedQuizz(element) {
    let mainScreen = document.querySelector("main");
    mainScreen.innerHTML = "";

    //let quizzID = element.querySelector("div").id;
    let quizzID = 1;
    alert(`id=${quizzID}`);
    const quizzPromise = axios.get(`${QUIZZES_URL}` + quizzID);
    quizzPromise.then(launchSelectedQuizz);
    quizzPromise.catch(console.log);
}


function launchResult(element) {
    console.log(element);
    let mainScreen = document.querySelector("main");
    mainScreen.innerHTML = "";
    mainScreen.innerHTML += insertQuizzResult();
}

function insertQuizzResult() {
    const insertResult = `
    <div class="quizz-result">
            <div class="quizz-result-title">
                <h1>88% de acerto: Você é praticamente um aluno de Hogwarts!</h1>
            </div>
            <div class="quizz-result-text">
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
