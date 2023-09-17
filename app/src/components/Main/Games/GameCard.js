import { Link } from "react-router-dom";
import { GameCardStyle, GameCategory, GamePlayButton, GameQuestions } from "../../../styles/Main/Categories.style";

export default function GameCard() {


    return (
        <>
            <GameCardStyle>
                <GameCategory >
                    <img className='img-category' src="/home-imgs/categorysport1icon@3x.png" alt="" />
                    <p className="text-category">Sport</p>
                </GameCategory>

                <GameQuestions>
                    <img src="/home-imgs/questionicon1@3x.png" alt="" />
                    <p>0/5</p>
                </GameQuestions>

                <GamePlayButton>
                    <Link to={'/game'}><img src="/home-imgs/buttonplay3@3x.png" alt="" /></Link>
                </GamePlayButton>

            </GameCardStyle>

            <GameCardStyle>
                <GameCategory >
                    <img className='img-category' src="/home-imgs/categorysport1icon@3x.png" alt="" />
                    <p className="text-category">Sport</p>
                </GameCategory>
                <GameQuestions>
                    <img src="/home-imgs/questionicon1@3x.png" alt="" />
                    <p>0/5</p>
                </GameQuestions>
                <GamePlayButton>
                    <Link to={'/game'}><img src="/home-imgs/buttonplay3@3x.png" alt="" /></Link>
                </GamePlayButton>

            </GameCardStyle>

            <GameCardStyle>
                <GameCategory >
                    <img className='img-category' src="/home-imgs/categorysport1icon@3x.png" alt="" />
                    <p className="text-category">Sport</p>
                </GameCategory>
                <GameQuestions>
                    <img src="/home-imgs/questionicon1@3x.png" alt="" />
                    <p>0/5</p>
                </GameQuestions>
                <GamePlayButton>
                    <Link to={'/game'}><img src="/home-imgs/buttonplay3@3x.png" alt="" /></Link>
                </GamePlayButton>
            </GameCardStyle>
        </>
    )
}