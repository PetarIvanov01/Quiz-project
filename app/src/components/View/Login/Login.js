import { Link } from "react-router-dom";
import { MainStyle } from "../../../styles/Main/Main.style";
import { ActionLink, FormStyle, FormStyleContainer, PageLogo, TypeFieldStyle, SubmitBtn } from "../../../styles/ViewStyle/AuthForms/LoginStyle.style";
import { useForm } from "../../../hooks/useFrom";

export default function LoginView() {

    const onSubmitHandler = async (data) => {
        try {
            const response = await fetch('http://localhost:5000/api/user/sign-in', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();


        } catch (error) {

            console.log(error)
        }
    }

    const { values, onSubmit, onChangeValues } = useForm({
        email: '',
        password: ''
    }, onSubmitHandler)


    return (

        <MainStyle>

            <FormStyleContainer>

                <PageLogo>
                    <img src="/home-imgs/nerd.png" alt="" />
                    <p className="sign-in-greeting">Log in and prove that you're the ultimate quizmaster!</p>
                </PageLogo>

                <FormStyle onSubmit={onSubmit}>

                    <TypeFieldStyle>
                        <label htmlFor="email">Email</label>
                        <input onChange={onChangeValues} name="email" type="text" id="email" value={values.email} />
                    </TypeFieldStyle>
                    <TypeFieldStyle>
                        <label htmlFor="password">Password</label>
                        <input onChange={onChangeValues} name="password" type="password" id="password" value={values.password} />
                    </TypeFieldStyle>

                    <SubmitBtn>
                        <input onChange={onChangeValues} type="submit" value="Login" />
                    </SubmitBtn>

                    <ActionLink >
                        <p>Not a quizzer yet? </p>
                        <Link to={'/register'}>Sign up</Link>
                    </ActionLink>

                </FormStyle>
            </FormStyleContainer>

        </MainStyle>

    )
}