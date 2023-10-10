export default function formatStats(quizData) {
    return quizData.filter((curr) => curr.answer === true).length;
}