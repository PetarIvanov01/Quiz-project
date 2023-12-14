import { useEffect, useState } from 'react';
import { useNavContext } from '../../../context/navigation';
import { Outlet } from 'react-router-dom'

import getCategory from "../../../services/quizService"
import { LoadingSpinner } from '../../../styles/modals/LoadingSpinner.style';

export default function FetchQuestionData({
    category
}) {
    const { isDisabled } = useNavContext();

    const [quizData, setQuizData] = useState(null);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        isDisabled();

    }, [isDisabled])

    useEffect(() => {
        if (category && !dataFetched) {
            const getCategoryFunc = getCategory[category];
            getCategoryFunc()
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