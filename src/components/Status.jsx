import "./Status.scss";
import StatusImg from "../assets/crytocode-assets/status.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export const Status = () => {
    useEffect(() => {
        Aos.init({ duration: 1000});
    })
  return (
    <section className="status">
        <div className="status__container wrapper">
            <div className="status__left" data-aos="zoom-in-up">
            <h2>trust us due to our safe and convenient deposit</h2>
            <p>
                kausvkua cgas aksdcvias kvi b cagsdc msd cgd casdckgasdc kadc 
                sd ckasdcia sdca sdc dc a sdcg kasd casgd ckasdc kagsd
                 asduc kasd ckasdckas dckasdcha sck asdcasd
            </p>
            <a href="#" className="btn">
                KNOW MORE
            </a>
            </div>
            <div className="status__right" data-aos="fade-left">
              <img src={StatusImg} alt="status" className="" />  
            </div>
        </div>
    </section>
  )
}
