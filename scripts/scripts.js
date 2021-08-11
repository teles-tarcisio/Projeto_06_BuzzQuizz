const QUIZZES_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/buzzquizz/quizzes";

/*-------------------------------------------------------*/

function getQuizzesFromServer() {
    const quizzPromise = axios.get(QUIZZES_URL);
    quizzPromise.then(gotQuizzes);
    quizzPromise.catch(errorGettingQuizzes);
}

function gotQuizzes(serverResponse) {
    console.log("got quizzes successfully: ", serverResponse.data);
    printQuizzesToHTML(serverResponse);
    
}
function errorGettingQuizzes(serverError) {
    console.log("error getting quizzes: ", serverError);
}

function printQuizzesToHTML(received) {
    let allQuizzesList = document.querySelector(".all-quizzes ul");
    allQuizzesList.innerHTML += `<li>
    <div> <h2> ${received.data[0].title} </h2> </div>
    <img src="${received.data[0].image}">
    </li>`;
}
