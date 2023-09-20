import { Outlet } from 'react-router-dom'
import { TimerStartStyle, TransitionStyle } from '../../styles/ViewStyle/TransitionComponent.style'
import { useEffect, useState } from 'react'

export default function TransitionToGame() {


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


    if (count === 'next') return <Outlet />

    return (
        <TransitionStyle>
            <TimerStartStyle>
                <p>{count}</p>
            </TimerStartStyle>
        </TransitionStyle>
    )

}