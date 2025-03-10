import "./Footer.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Footer = () => {
     
useEffect(()=> {
    Aos.init({duration: 1000});
})

  return (
    <section className="footer">
        <div className="footer__container wrapper">
            <h2 data-aos="fade-up">Subscribe & get news update </h2>
            <p data-aos="fade-up">
                asvgkash cmas dcksbdcasd cksdckh asdkcasdcj adckasdc aksdcakjsdc ksd jkhsd 
                ds cksd cksd cksdc ksd ckasdckasdkcasdchg kcsda dscashdc ashdc asd ckahsdcahsd c
                sd casd cka sdc sdcb sdkcg asdbcag sdca sdc kasdc 
                asd casd cas dckas dca sdckasdckas dcjabs dckga dcasdch asdc 
                sdcha dcsdc dcksd cgasd csga ckasc kagsd cmasdcka sgdcas
                ascasd casdclascjbach sadc ,asdcakgs clasdc kas dc
                sad c
            </p>
            <form action="#" data-aos="fade-up">
                <input type="email" placeholder="write your email here"/>

                <a href="" className="btn">
                    Subscribe
                </a>
            </form>
        </div>
    </section>
  )
}
