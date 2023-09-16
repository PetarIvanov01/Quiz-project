import { CategoriesSection, GameCard, GameCategory, GameQuestions,GamePlayButton } from "../../styles/Main/Categories.style";
import { MainStyle, Logo } from "../../styles/Main/Main.style";
import { Link } from "react-router-dom"
export default function Main() {


   return <MainStyle>
      <Logo >
         <Link><img src="./home-imgs/logo-home@3x.png" alt="" /></Link>
         <div className="greating">
            <p>Prepare to be quizzed! 🤓 Are you up for the challenge?</p>
         </div>
      </Logo>

      <CategoriesSection>
         <p className="categories-text">Categories</p>

         <GameCard>
            <GameCategory >
               <img className='img-category' src="/home-imgs/categorysport1icon@3x.png" alt="" />
               <p className="text-category">Sport</p>
            </GameCategory>

            <GameQuestions>
               <img src="/home-imgs/questionicon1@3x.png" alt="" />
               <p>0/5</p>
            </GameQuestions>

            <GamePlayButton>
               <img src="/home-imgs/buttonplay3@3x.png" alt="" />
            </GamePlayButton>

         </GameCard>

         <GameCard>
            <GameCategory >
               <img className='img-category' src="/home-imgs/categorysport1icon@3x.png" alt="" />
               <p className="text-category">Sport</p>
            </GameCategory>
            <GameQuestions>
               <img src="/home-imgs/questionicon1@3x.png" alt="" />
               <p>0/5</p>
            </GameQuestions>
            <GamePlayButton>
               <img src="/home-imgs/buttonplay3@3x.png" alt="" />
            </GamePlayButton>

         </GameCard>

         <GameCard>
            <GameCategory >
               <img className='img-category' src="/home-imgs/categorysport1icon@3x.png" alt="" />
               <p className="text-category">Sport</p>
            </GameCategory>
            <GameQuestions>
               <img src="/home-imgs/questionicon1@3x.png" alt="" />
               <p>0/5</p>
            </GameQuestions>
            <GamePlayButton>
               <img src="/home-imgs/buttonplay3@3x.png" alt="" />
            </GamePlayButton>
         </GameCard>

      </CategoriesSection>
      
   </MainStyle>

}