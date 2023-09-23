const categoryUrls = {
    sport: 'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple',
    history: 'https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple',
    general: 'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple'
}
async function requester(endpoint) {
    try {

        const res = await fetch(endpoint);

        if (!res.ok) {
            throw new Error('Invalid response!');
        }

        return await res.json();

    }
    catch (error) {
        alert(error.message);
        throw error
    }
}
function shuffleArray(array) {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

function transformQuizData(results) {
    return results.map(item => {
        const question = item.question;
        const correctAnswer = item.correct_answer;
        const incorrectAnswers = item.incorrect_answers;

        const answers = shuffleArray([
            { text: correctAnswer, correct: "true" },
            ...incorrectAnswers.map(answer => ({ text: answer, correct: "false" }))
        ]);

        return {
            question,
            answers
        };
    });
}


async function getSportQuiz() {
    const { results } = await requester(categoryUrls.sport);

    const quizData = transformQuizData(results);
    return quizData
}
async function getHistoryQuiz() {
    const { results } = await requester(categoryUrls.history);

    const quizData = transformQuizData(results);
    return quizData
}
async function getGeneralQuiz() {
    const { results } = await requester(categoryUrls.general);

    const quizData = transformQuizData(results);
    return quizData
}

const category = {
    'sport': getSportQuiz,
    'history': getHistoryQuiz,
    'general': getGeneralQuiz
}
export default category
