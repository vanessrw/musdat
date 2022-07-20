import SubHeader from "components/atoms/SubHeader";

export default function About() {
  const aboutLine1 = "HERE YOU CAN CHOOSE UR FIRST POKEMON !"

  return (
    <div className="about">
      <div className="about-wrapper wrapper">
        <h1 data-aos="fade-down" style={{marginBottom: "50px"}}>STARTER POKEMONS</h1>
        <h3 data-aos="fade-down">{aboutLine1}</h3>
      </div>
    </div>
  )
}
