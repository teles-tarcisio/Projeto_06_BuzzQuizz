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
    console.log(mainDiv.innerHTML);

    mainDiv.querySelector(".screen-01").classList.add("hidden");
    console.log(mainDiv.parentElement.innerHTML);

    mainDiv.querySelector(".screen-02").classList.remove("hidden");
    console.log(mainDiv.parentElement.innerHTML);

}

function getNewQuizzInfo(htmlElement) {
    /* quizz template for testing:
    {
        title: "tretaTitle",
        image: "https://images-na.ssl-images-amazon.com/images/I/71k5kfdB9KL.png",
        questions: [ {}, {}, {} ],
        levels: [ {}, {}, {} ]
    }
    */
    let targetForm = document.querySelector(".screen-02 form");
    newCreatedQuizz.title = targetForm.elements[0].value;
    newCreatedQuizz.image = targetForm.elements[1].value;
    console.log(newCreatedQuizz);
}

function showSecondPage() { 
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
    let quizzPage = document.querySelector(".new-quizz");
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
    //
}

function saveOneQuestionInfo(inputs){
    //
}