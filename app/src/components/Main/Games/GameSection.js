import { CategoriesSection } from "../../../styles/Main/Categories.style";
import GameCard from "./GameCard";

export default function GameSection() {

    return (
        <CategoriesSection>
            <p className="categories-text">Categories</p>

            <GameCard />
        </CategoriesSection>

    )
}