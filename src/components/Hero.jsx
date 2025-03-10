import "./Hero.scss";
import Mob from "../assets/crytocode-assets/Mob.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export const Hero = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    });

  return (
    <section className="hero">
<div className="hero__container wrapper">
<div className="hero__left" data-aos="fade-right">
    <img src={Mob} alt="hero"  />
</div>
<div className="hero__right">
    <h1>make esier your crypto transaction </h1>
    <p>
        our criptocurrency offers a fest , secure and affordable alternative for
        all of your finencial needsour criptocurrency offers a fest , secure and affordable alternative forall of your finencial needs
        our criptocurrency offers a fest , secure and affordable alternative forall of your finencial needs
        our criptocurrency offers a fest , secure and affordable alternative forall of your finencial needs
        our criptocurrency offers a fest , secure and affordable alternative forall of your finencial needs
    </p>
    <a href="#" className="btn">TRY FOR FREE</a>
</div>
</div>
    </section>
  )
}
