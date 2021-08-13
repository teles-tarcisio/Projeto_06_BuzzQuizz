// esquema da variavel para enviar no post(rascunho)
//let CreatedQuiz = {
//     title,
//     image,
//     questions:{
//         title,
//         color,
//         answer: {
//             title,
//             image,
//             isCorrectAnswer
//         }
//     },
//     levels:{
//         title,
//         image, 
//         text,
//         minValue
//     }

// }

function createQuizPage(){
    let mainDiv=document.querySelector("main");
    mainDiv.innerHTML =`<div class="new-quiz first-page">
                            <h1>
                                Comece pelo começo
                            </h1>
                            <div>
                            <input class="quiz-title-input" type="text" placeholder="Título do seu quizz">
                            <input type="text" placeholder="URL da imagem do seu quizz">
                            <input type="text" placeholder="Quantidade de perguntas do quizz">
                            <input type="text" placeholder="Quantidade de níveis do quizz">
                            </div>
                            <button onclick="showSecondPage()"> 
                                Prosseguir para criar perguntas
                            </button>
                        </div>`;
} 
// funcao para salvar dados na variavel antes de envia-la(rascunho)
function saveInfoFirstPage(){
        let title= document.querySelector(".quiz-title-input").value;
        console.log(title);
//     image:<input type="text" placeholder="URL da imagem do seu quizz">.value
//     questions.length:<input type="text" placeholder="Quantidade de perguntas do quizz">.value
//     levels.length:<input type="text" placeholder="Quantidade de níveis do quizz">.value
 }
function showSecondPage(){
    saveInfoFirstPage();
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
                            <button>
                                Prosseguir para criar níveis
</button>`
}