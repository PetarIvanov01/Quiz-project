import { Link } from "react-router-dom";
import { GameCardStyle, GameCategory, GamePlayButton, GameQuestions } from "../../../styles/Main/Categories.style";

export default function GameCard() {


    return (
        <>
            <GameCardStyle>
                <GameCategory >
                    <img className='img-category' src="/home-imgs/categories/sport.png" alt="sport" />
                    <p className="text-category">Sport</p>
                </GameCategory>

                <GameQuestions>
                    <img src="/home-imgs/questionicon1@3x.png" alt="" />
                    <p>0/5</p>
                </GameQuestions>

                <GamePlayButton>
                    <Link to={'/game/sport'}><img src="/home-imgs/buttonplay3@3x.png" alt="" /></Link>
                </GamePlayButton>

            </GameCardStyle>

            <GameCardStyle>
                <GameCategory >
                    <img className='img-category' src="/home-imgs/categories/history.png" alt="history" />
                    <p className="text-category">History</p>
                </GameCategory>
                <GameQuestions>
                    <img src="/home-imgs/questionicon1@3x.png" alt="" />
                    <p>0/5</p>
                </GameQuestions>
                <GamePlayButton>
                    <Link to={'/game/history'}><img src="/home-imgs/buttonplay3@3x.png" alt="" /></Link>
                </GamePlayButton>

            </GameCardStyle>

            <GameCardStyle>
                <GameCategory >
                    <img className='img-category' src="/home-imgs/categories/sport.png" alt="general" />
                    <p className="text-category">General</p>
                </GameCategory>
                <GameQuestions>
                    <img src="/home-imgs/questionicon1@3x.png" alt="" />
                    <p>0/5</p>
                </GameQuestions>
                <GamePlayButton>
                    <Link to={'/game/general'}><img src="/home-imgs/buttonplay3@3x.png" alt="" /></Link>
                </GamePlayButton>
            </GameCardStyle>
        </>
    )
}