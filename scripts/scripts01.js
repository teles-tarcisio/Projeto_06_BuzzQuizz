const QUIZZES_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/buzzquizz/quizzes/";


function getAllQuizzes() {
    const quizzPromise = axios.get(QUIZZES_URL);
    quizzPromise.then(printQuizzesToHTML);
    quizzPromise.catch(errorGettingQuizzes);
}

function errorGettingQuizzes(serverError) {
    console.log("error getting quizzes: ", serverError);
}

function printQuizzesToHTML(response) {
    let allQuizzesList = document.querySelector(".all-quizzes ul");
    for (i = 0; i < response.data.length; i++) {
        allQuizzesList.innerHTML += `<li onclick="alert('will launch Friends Quizz'), launchSelectedQuizz()">
        <div> <h2> ${response.data[i].title} </h2> </div>
        <img src="${response.data[i].image}">
        </li>`;
    }
    console.log("finished printing quizzes to html");
}