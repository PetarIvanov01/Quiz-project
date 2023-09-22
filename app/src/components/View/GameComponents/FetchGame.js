import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
export default function FetchQuestionData() {

    const [quizData, setQuizData] = useState(null);

    useEffect(() => {

        questonData()


    }, []);

    
    async function questonData() {

        let res = await fetch('/mockQuizData.json')
        let data = await res.json();
        setQuizData(data)

    }

    return  quizData && <Outlet context={quizData} />
}