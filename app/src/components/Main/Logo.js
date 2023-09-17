import { Link } from "react-router-dom"
import { Logo } from "../../styles/Main/Main.style"

export default function LogoText() {
    

    return (
        <Logo >
            <Link><img src="/home-imgs/logo-home@3x.png" alt="" /></Link>
            <div className="greating">
               <p>Prepare to be quizzed! 🤓 Are you up for the challenge?</p>
            </div>
         </Logo>
    )

}