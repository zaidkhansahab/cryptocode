import "./Earnings.scss";
import Img from "../assets/crytocode-assets/earnings.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Earnings = () => {

    useEffect(() => {
        Aos.init({ duration: 1000});
    })
  return (
    <section className="earnings"> 
    <div className="earnings__container wrapper" data-aos="fade-right">
        <div className="earnings__left">
            <img src={Img} alt="earnings" className="" />
        </div>
<div className="earnings__right" data-aos="zoom-in-up">
    <h2 > Track your earnings and cryptocode made it easy </h2>
    <p> nulla bkahd asdsadkhcsd khs chsasjh s chsschs cks cah sca scs 
        as ckash cakhs dcasd hcks dcksgdcsdckdc ksd cusd cksd
         aksh
    </p>
    <a href="#" className="btn">
        GET STARTED
    </a>

</div>
          </div>
    </section>
  )
}
