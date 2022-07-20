import BenefitCard from "./BenefitCard";

export default function Benefit() {
  return (
    <div className="benefit">
        <div className="benefit-wrapper" >
            <BenefitCard title="Charmander" description="fire ele" iconPath="/image/charmander.png"/>
            <BenefitCard title="Squirtle" description="water ele" iconPath="/image/squirtle.png"/>
            <BenefitCard title="Bulbasaur" description="grass ele" iconPath="/image/bulbasaur.png"/>
        </div>
    </div>
  )
}
