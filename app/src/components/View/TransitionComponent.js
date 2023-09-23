import { TimerStartStyle, TransitionStyle } from '../../styles/ViewStyle/TransitionComponent.style'
import { useEffect, useState } from 'react'
import FetchQuestionData from './GameComponents/FetchGame';
import { useParams } from 'react-router-dom';

export default function TransitionToGame() {

    const { category } = useParams();
    const [count, setCount] = useState(3);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count >= 1) {
                setCount((count) => count - 1);
                if (count === 1) {
                    setCount('Start');
                }
            }
            else {
                setCount('next');
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [count]);

    if (count === 'next') return <FetchQuestionData category={category} />

    return (
        <TransitionStyle>
            <TimerStartStyle>
                <p>{count}</p>
            </TimerStartStyle>
        </TransitionStyle>
    )

}