const QUIZZES_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/buzzquizz/quizzes/";


function getAllQuizzes() {
    const quizzPromise = axios.get(QUIZZES_URL);
    quizzPromise.then(printQuizzesToHTML);
    quizzPromise.catch(errorGettingQuizzes);
}

function errorGettingQuizzes(serverError) {
    console.log("error getting quizzes: ", serverError);
}


const allQuizzesArray = [];
function printQuizzesToHTML(serverResponse) {
    for (i = 0; i < serverResponse.data.length; i++) {
        allQuizzesArray.push(serverResponse.data[i]);        
    };
    console.log(allQuizzesArray);

    let allQuizzesList = document.querySelector(".all-quizzes ul");
    for (i = 0; i < allQuizzesArray.length; i++) {
        allQuizzesList.innerHTML += `<li onclick="alert('launch Friends test Quizz'), launchSelectedQuizz()">
        <div > <h2> ${allQuizzesArray[i].title} </h2> </div>
        <img src="${allQuizzesArray[i].image}">
        </li>`;
    }
    console.log("finished printing quizzes to html");
}
