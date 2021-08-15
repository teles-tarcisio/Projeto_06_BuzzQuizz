// esquema da variavel para enviar no post(rascunho)
let createdQuiz = new Object;
createdQuiz.title='';
createdQuiz.image='';
createdQuiz.questions= [new Object];
createdQuiz.levels= new Object;

createdQuiz.questions.title="";
createdQuiz.questions.color="";
createdQuiz.questions.answer= [new Object];

createdQuiz.questions.answer.title="";
createdQuiz.questions.answer.image="";
createdQuiz.questions.answer.isCorrectAnswer= false;

createdQuiz.levels.title="";
createdQuiz.levels.image="";
createdQuiz.levels.text="";
createdQuiz.levels.minValue=0;


function createQuizPage(){
    let mainDiv=document.querySelector("main");
    mainDiv.innerHTML =`<div class="new-quiz first-page">
                            <h1>
                                Comece pelo começo
                            </h1>
                            <div>
                            <input type="text" placeholder="Título do seu quizz">
                            <input type="text" placeholder="URL da imagem do seu quizz">
                            <input type="text" placeholder="Quantidade de perguntas do quizz">
                            <input type="text" placeholder="Quantidade de níveis do quizz">
                            </div>
                            <button onclick="saveFirstPageInfo(),showSecondPage()"> 
                                Prosseguir para criar perguntas
                            </button>
                        </div>`;
} 
// funcao para salvar dados na variavel antes de envia-la(rascunho)
let questionsLength;
function saveFirstPageInfo(){
    createdQuiz.title = document.querySelector("input:first-child").value;
    console.log(createdQuiz.title)
    createdQuiz.image = document.querySelector("input:nth-child(2)").value;
    console.log(createdQuiz.image)
    questionsLength=Number(document.querySelector("input:nth-child(3)").value);
    console.log(questionsLength)
    let levelsLength=Number(document.querySelector("input:nth-child(4)").value);
    console.log(levelsLength)
}
 function showSecondPage(){ 
    let quizpage = document.querySelector(".new-quiz");
    quizpage.classList.add("second-page");
    quizpage.classList.remove("first-page");
    quizpage.innerHTML = `<h1>
                            Crie suas perguntas
                        </h1>`
    for(let i=0; i<questionsLength ;i++){
    quizpage.innerHTML += `<div>
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
    console.log(createdQuiz);
    quizpage.innerHTML += `<button onclick="saveSecondPageInfo(),showThirdPage()">
                                Prosseguir para criar níveis
                            </button>`
}
function showThirdPage(){
    let quizpage = document.querySelector(".new-quiz");
    quizpage.classList.add("third-page");
    quizpage.classList.remove("second-page");
    quizpage.innerHTML = "";
    quizpage.innerHTML +=`
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
    createdQuiz.questions[0].color = inputs[1].value;
    console.log(createdQuiz.questions[0].color)
    saveOneQuestionInfo(inputs);
}
function saveOneQuestionInfo(inputs){
    createdQuiz.questions[0].title = inputs[0].value;
    createdQuiz.questions[0].color = inputs[1].value;
    for(let j=0;cont<3;cont++){
    createdQuiz.questions[0].answer[j].title = inputs[2+cont*2].value;
    createdQuiz.questions[0].answer[j].image = inputs[3+cont*2].value;
    } 
}