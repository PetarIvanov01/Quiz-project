import { useEffect, useState } from "react";

const GAME_TIME = 10;

export default function useQuizTimer(showExitConfirmation) {

    const [timer, setTimer] = useState(GAME_TIME);

    useEffect(() => {

        if (showExitConfirmation) return;

        else if (timer < 0)  setTimer(GAME_TIME)
        
        const timeout = setTimeout(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        return () => clearTimeout(timeout);

    }, [timer, showExitConfirmation]);

    return { timer, setTimer };
}
