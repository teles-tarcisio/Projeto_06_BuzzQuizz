const QUIZZES_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/buzzquizz/quizzes/";

/*Getting all quizzes------------------------------------*/

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
        allQuizzesList.innerHTML += `<li>
        <div> <h2> ${response.data[i].title} </h2> </div>
        <img src="${response.data[i].image}">
        </li>`;
    }
    console.log("finished printing quizzes to html");
}

/*Getting a single quiz------------------------------------*/

function getSingleQuiz(quizID) {
    const quizzPromise = axios.get(`${QUIZZES_URL}` + quizID);
    quizzPromise.then(console.log);
    quizzPromise.catch(console.log);
}



/*Submitting a quiz--------------------------------------*/