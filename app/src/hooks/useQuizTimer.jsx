import { useEffect, useState } from "react";

const GAME_TIME = 10;

export default function useQuizTimer(showExitConfirmation) {

    const [timer, setTimer] = useState(GAME_TIME);

    if (timer < 0) {
        setTimer(GAME_TIME);
    }

    useEffect(() => {

        if (showExitConfirmation) return;

        const timeout = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        return () => clearTimeout(timeout);

    }, [showExitConfirmation]);
    
    return { timer, setTimer };
};
