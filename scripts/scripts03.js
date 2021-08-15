// esquema da variavel para enviar no post
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

function createQuizzPage(){
    let mainDiv=document.querySelector("main");
    mainDiv.innerHTML =`<div class="new-quizz first-page">
                            <h1>
                                Comece pelo começo
                            </h1>
                            <div>
                            <input type="text" placeholder="Título do seu quizz">
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
//function saveInfoFirstPage(){
//     title:<input type="text" placeholder="Título do seu quizz">.value
//     image:<input type="text" placeholder="URL da imagem do seu quizz">.value
//     questions.length:<input type="text" placeholder="Quantidade de perguntas do quizz">.value
//     levels.length:<input type="text" placeholder="Quantidade de níveis do quizz">.value
// }
function showSecondPage(){
//    saveInfoFirstPage;
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
</button>`
}