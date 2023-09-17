import { MainStyle } from "../../styles/Main/Main.style";
import LogoText from '../Main/Logo'
import GameSection from "./Games/GameSection";

export default function Main() {


   return (
      <MainStyle>
         <LogoText />

         <GameSection />
      </MainStyle>
   )

}