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
    //quiz banner @ page top:
    let quizzBanner = document.querySelector(".quizz-banner");
    quizzBanner.innerHTML = '';
    quizzBanner.innerHTML += `
        <div class="quiz-title">
            <img src="${response.data.image}">
            <p>${response.data.title}</p>
        </div>`;

    let mainScreen = document.querySelector("main");
    
    let newListOfCards = document.createElement("ul");
    newListOfCards.className = "question-cards-list";
    mainScreen.appendChild(newListOfCards);
    console.log("created ul_list-of-cards:\n", mainScreen.innerHTML);
    createCardSlots(response);
}

function createCardSlots(response) {
    //number of card slots needed:
    let numberOfQuestions = response.data.questions.length;
    console.log(response.data.questions, "\n# of questions: ", numberOfQuestions);
    
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

    createCardFrameElements(response);
}

function createCardFrameElements(response) {
    //each li_card-slot has one question and multiple answers:
    let numberOfQuestions = response.data.questions.length;
    
    let listOfCardSlots = document.querySelectorAll(".question-cards-list li");
    
    //adding the question inside the frame:
    for (i = 0; i < numberOfQuestions; i++) {
        let newFrameQuestion = document.createElement("li");
        newFrameQuestion.className = `question${i}`;
        listOfCardSlots[i].innerHTML += "\n";
        listOfCardSlots[i].appendChild(newFrameQuestion);
    }
    console.log(document.querySelector("main").innerHTML);
    console.log("added question inside each card frame");
    
    //adding ONE img answer inside the frame:
    for (i = 0; i < numberOfQuestions; i++) {
        let newFrameImg = document.createElement("img");
        newFrameImg.className = `image${i}`;
        listOfCardSlots[i].innerHTML += "\n";
        listOfCardSlots[i].appendChild(newFrameImg);
        listOfCardSlots[i].innerHTML += "\n";    
    }
    console.log(document.querySelector("main").innerHTML);
    console.log("added one img inside each card frame");



    //adding ONE text answer inside the frame:
    for (i = 0; i < numberOfQuestions; i++) {
        let newFrameTxt = document.createElement("p");
        newFrameTxt.className = `answer-text${i}`;
        listOfCardSlots[i].innerHTML += "\n";
        listOfCardSlots[i].appendChild(newFrameTxt);
        listOfCardSlots[i].innerHTML += "\n";    
    }
    console.log(document.querySelector("main").innerHTML);
    console.log("added one answer-text inside each card frame");
}