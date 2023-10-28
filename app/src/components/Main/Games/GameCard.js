import { Link } from "react-router-dom";
import { GameCardStyle, GameCategory, GamePlayButton, GameQuestions } from "../../../styles/Main/Categories.style";

export default function GameCard({ imgLink, category, to }) {




    return (
        <GameCardStyle>
            <GameCategory >
                <img className='img-category' src={imgLink} alt={category} />
                <p className="text-category">{category}</p>
            </GameCategory>

            <GameQuestions>
                <img src="/home-imgs/questionicon1@3x.png" alt="" />
                <p>0/5</p>
            </GameQuestions>

            <GamePlayButton>
                <Link to={`/game/${to}`}><img src="/home-imgs/buttonplay3@3x.png" alt="" /></Link>
            </GamePlayButton>

        </GameCardStyle>
    )
}