import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
import getCategory from '../../../services/QuizService';
import { LoadingSpinner } from '../../../styles/modals/LoadingSpinner.style';

export default function FetchQuestionData({
    category
}) {
    
    const [quizData, setQuizData] = useState(null);
    const [dataFetched, setDataFetched] = useState(false);

    const getData = useCallback(async () => {
        return await getCategory[category]();
    }, [category]);

    useEffect(() => {
        if (category && !dataFetched) { 
            getData()
                .then(e => {
                    setQuizData(e);
                    console.log(e);
                    setDataFetched(true); 
                })
                .catch(error => {
                    console.error(error);
                    setDataFetched(true); 
                });
        }
    }, [category, getData, dataFetched]);

    return quizData ? <Outlet context={{ quizData, category }} /> : <LoadingSpinner />;
}