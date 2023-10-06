export default function useQuizReset({ setTimer, currentQuestion }) {

    function onClickReset(answers) {
        setTimer(0)
    }

    return onClickReset
}