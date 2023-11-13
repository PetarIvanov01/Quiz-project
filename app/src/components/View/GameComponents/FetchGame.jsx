import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
import getCategory from '../../../services/QuizService';
import { LoadingSpinner } from '../../../styles/modals/LoadingSpinner.style';

export default function FetchQuestionData({
    category
}) {

    const [quizData, setQuizData] = useState(null);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        if (category && !dataFetched) {
            getCategory[category]()
                .then(e => {
                    setQuizData([...e]);
                    setDataFetched(true);
                })
                .catch(error => {
                    console.error(error);
                    setDataFetched(true);
                });
        }
    }, [category, dataFetched]);

    return quizData ? <Outlet context={{ quizData, category }} /> : <LoadingSpinner />;
}