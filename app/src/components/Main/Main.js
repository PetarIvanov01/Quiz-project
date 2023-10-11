import { useEffect } from "react";
import { useNavContext } from "../../context/navigation";

import { MainStyle } from "../../styles/Main/Main.style";
import LogoText from '../Main/Logo'
import GameSection from "./Games/GameSection";

export default function Main() {

   const { notDisabled } = useNavContext();
   useEffect(()=>{

      notDisabled()

   },[notDisabled])

   return (
      <MainStyle>
         <LogoText />

         <GameSection />
      </MainStyle>
   )

}