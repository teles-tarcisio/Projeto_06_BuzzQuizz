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

function createQuizzPage() {
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
                            <button onclick="showSecondPage()"> 
                                Prosseguir para criar perguntas
                            </button>
                        </div>`;
        saveFirstPageInfo();
}

function saveFirstPageInfo() {
    let target = document.querySelector("main .create-title");
    newCreatedQuizz.title = target.value;

    target = document.querySelector("main .create-image");
    newCreatedQuizz.image = target.value;

    target = document.querySelector("main .create-questions-qtty");
    newCreatedQuizz.questions.length = target.value;

    target = document.querySelector("main .create-levels-qtty");
    newCreatedQuizz.levels.length = target.value;

    console.log("created: ", newCreatedQuizz);
}

function showSecondPage() {
    let quizzPage = document.querySelector(".new-quizz");
    quizzPage.classList.add("second-page");
    quizzPage.classList.remove("first-page");
    quizzPage.innerHTML = "";
    quizzPage.innerHTML += `<h1>
                                Crie suas perguntas
                            </h1>
                            <div>
                                <h2>Pergunta 1</h2>
                                <input type="text" placeholder="Texto da pergunta">
                                <input type="text" placeholder="Cor de fundo da pergunta">
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
                            </div>
                            <div>
                                <h2>Pergunta 2</h2>
                                <input type="text" placeholder="Texto da pergunta">
                                <input type="text" placeholder="Cor de fundo da pergunta">
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
                            </div>
                            <button>
                                Prosseguir para criar níveis
</button>`;
}