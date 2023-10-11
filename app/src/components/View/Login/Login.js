import { Link } from "react-router-dom";
import { MainStyle } from "../../../styles/Main/Main.style";
import { ActionLink, FormStyle, FormStyleContainer, PageLogo, TypeFieldStyle } from "../../../styles/ViewStyle/AuthForms/LoginStyle.style";

export default function LoginView() {

    return (

        <MainStyle>

            <FormStyleContainer>

                <PageLogo>
                    <img src="/home-imgs/nerd.png" alt="" />
                    <p className="sign-in-greeting">Log in and prove that you're the ultimate quizmaster!</p>
                </PageLogo>
                
                <FormStyle>

                    <TypeFieldStyle>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </TypeFieldStyle>
                    <TypeFieldStyle>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </TypeFieldStyle>


                    <ActionLink >
                        <p>Not a quizzer yet? </p>
                        <Link to={'/register'}>Sign up</Link>
                    </ActionLink>

                </FormStyle>
            </FormStyleContainer>

        </MainStyle>

    )
}