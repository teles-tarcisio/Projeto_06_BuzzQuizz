// esquema da variavel para enviar no post(rascunho)
let createdQuiz = new Object;
createdQuiz.title='';
createdQuiz.image='';
createdQuiz.questions= new Object;
createdQuiz.levels= new Object;

createdQuiz.questions.title="";
createdQuiz.questions.color="";
createdQuiz.questions.answer= new Object;

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
function saveFirstPageInfo(){
    createdQuiz.title = document.querySelector("input:first-child").value;
    console.log(createdQuiz.title)
    createdQuiz.image = document.querySelector("input:nth-child(2)").value;
    console.log(createdQuiz.image)
    let questionsLength=Number(document.querySelector("input:nth-child(3)").value);
    console.log(questionsLength)
    let levelsLength=Number(document.querySelector("input:nth-child(4)").value);
    console.log(levelsLength)
}
 function showSecondPage(){ 
    let quizpage = document.querySelector(".new-quiz");
    quizpage.classList.add("second-page");
    quizpage.classList.remove("first-page");
    quizpage.innerHTML = "";
    quizpage.innerHTML += `<h1>
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
                            <button onclick="saveSecondPageInfo(),showThirdPage()">
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
    console.log("ta indo")  
}