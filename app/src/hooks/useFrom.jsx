import { useState } from "react";

export function useForm(initialState, onSubmitHandler) {

    const [values, setValues] = useState(initialState);

    const onChangeValues = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(values);
    };

    return { values, onChangeValues, onSubmit };
};