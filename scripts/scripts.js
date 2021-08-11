const QUIZZES_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/buzzquizz/quizzes";

/*-------------------------------------------------------*/

function getQuizzesFromServer() {
    const quizzPromise = axios.getQuizzesFromServer(QUIZZES_URL);
    quizzPromise.then(gotQuizzes);
    quizzPromise.catch(errorGettingQuizzes);
}

function gotQuizzes(serverResponse) {
    console.log("got quizzes successfully: ", serverResponse);
}

function errorGettingQuizzes(serverError) {
    console.log("error getting quizzes: ", serverError);
}