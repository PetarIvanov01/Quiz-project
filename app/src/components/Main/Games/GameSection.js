import { CategoriesSection } from "../../../styles/Main/Categories.style";
import GameCard from "./GameCard";
import games from '../../../util/games.json';

export default function GameSection() {


    return (
        <CategoriesSection>
            <p className="categories-text">Categories</p>

            {games.map((e) => <GameCard key={e.category} {...e} />)}
        </CategoriesSection>

    )
}