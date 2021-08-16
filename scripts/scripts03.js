// esquema da variavel para enviar no post:
let newCreatedQuizz = {
    title: "",
    image: "",
    questions: [],
    levels: []
};

let newQuizzQuestion = {
    title: "",
    color: "",
    answers: []
}; 

let newQuizzAnswer = {
    text: "",
    image: "",
    isCorrectAnswer: false
};

let newQuizzLevel = {
    title: "",
    image: "",
    text: "",
    minValue: 0
};

function createQuizzPage(){
    let mainDiv = document.querySelector("main");
    mainDiv.innerHTML = "";
    mainDiv.innerHTML += `<div class="new-quizz first-page">
                            <h1>
                                Comece pelo começo
                            </h1>
                            <div>
                            <input classname="create-title" type="text" placeholder="Título do seu quizz">
                            <input classname="create-image" type="text" placeholder="URL da imagem do seu quizz">
                            <input classname="create-questions-qtty" type="number" placeholder="Quantidade de perguntas do quizz" min="3" max="10">
                            <input classname="create-levels-qtty" type="number" placeholder="Quantidade de níveis do quizz" min="3" max="10">
                            </div>
                            <button onclick="saveFirstPageInfo(),showSecondPage()"> 
                                Prosseguir para criar perguntas
                            </button>
                        </div>`;
}

function saveFirstPageInfo() {
    /*
    let target = document.querySelector("main .create-title");
    newCreatedQuizz.title = target.value;

    target = document.querySelector("main .create-image");
    newCreatedQuizz.image = target.value;

    target = document.querySelector("main .create-questions-qtty");
    newCreatedQuizz.questions.length = target.value;

    target = document.querySelector("main .create-levels-qtty");
    newCreatedQuizz.levels.length = target.value;
    */

    console.log("created: ", newCreatedQuizz);
}

function showSecondPage(){ 
    let quizzPage = document.querySelector(".new-quizz");
    quizzPage.classList.add("second-page");
    quizzPage.classList.remove("first-page");
    quizzPage.innerHTML = `<h1>
                            Crie suas perguntas
                        </h1>`
    for(let i=0; i<questionsLength ;i++){
    quizzPage.innerHTML += `<div>
                                <h2>Pergunta ${i+1}</h2>
                                <input type="text" placeholder="Texto da pergunta">
                                <input type="color" placeholder="Cor de fundo da pergunta">
                                <h2>Resposta correta</h2>
                                <input type="text" placeholder="Resposta correta">
                                <input type="text" placeholder="URL da imagem">
                                <h2>Resposta incorretas</h2>
                                <input type="text" placeholder="Resposta incorreta 1">
                                <input type="text" placeholder="URL da imagem 1">
                                <input type="text" placeholder="Resposta incorreta 2">
                                <input type="text" placeholder="URL da imagem 2">
                                <input type="text" placeholder="Resposta incorreta 3">
                                <input type="text" placeholder="URL da imagem 3">
                            </div>`
    }
    console.log(createdQuizz);
    quizzPage.innerHTML += `<button onclick="saveSecondPageInfo(),showThirdPage()">
                                Prosseguir para criar níveis
                            </button>`
}

function showThirdPage(){
    let quizzPage = document.querySelector(".new-quiz");
    quizzPage.classList.add("third-page");
    quizzPage.classList.remove("second-page");
    quizzPage.innerHTML = "";
    quizzPage.innerHTML +=`
                        <h1>
                            Agora, decida os níveis
                        </h1>
                        <div>
                            <input type="text" placeholder="Título do seu quizz">
                            <input type="text" placeholder="URL da imagem do seu quizz">
                            <input type="text" placeholder="Quantidade de perguntas do quizz">
                            <input type="text" placeholder="Quantidade de níveis do quizz">
                        </div>
                        <button>
                            Prosseguir para criar perguntas
                        </button>`
}

function saveSecondPageInfo(){
    let inputs = Array.from(document.querySelectorAll("input"));
    console.log(inputs);
    saveOneQuestionInfo(inputs);
}

function saveOneQuestionInfo(inputs){
    newQuizzQuestion[0].title = inputs[0].value;
    newQuizzQuestions[0].color = inputs[1].value;
    for(let j=0;cont<3;cont++){
    newQuizzAnswer[j].title = inputs[2+cont*2].value;
    newQuizzAnswer[j].image = inputs[3+cont*2].value;
    } 
}