import { transformQuizData } from "../util/quizUtils";

const categoryUrls = {
    sport: 'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple',
    history: 'https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple',
    general: 'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple'
};

async function requester(endpoint) {
    try {

        const res = await fetch(endpoint);

        if (!res.ok) {
            throw new Error('Invalid response!');
        }

        const data = await res.json();

        if (data) {
            return transformQuizData(data.results);
        }
        
        return null;
    }
    catch (error) {
        alert(error.message);
        throw error
    }
};

async function getSportQuiz() {

    return await requester(categoryUrls.sport);
};
async function getHistoryQuiz() {

    return await requester(categoryUrls.history);
};
async function getGeneralQuiz() {

    return await requester(categoryUrls.general);
};

const category = {
    'sport': getSportQuiz,
    'history': getHistoryQuiz,
    'general': getGeneralQuiz
};
export default category;
