import "./Fotter.scss";
import Logo from "../assets/crytocode-assets/Logo.png";
import { FaFacebookF , 
    FaInstagram, 
     
    FaYoutube,
 }from "react-icons/fa";
 import Aos from "aos";
 import "aos/dist/aos.css";
 import { useEffect } from "react";


export const Fotter = () => {

    useEffect(()=> {
        Aos.init({duration: 1000});
    })
  return (
    <footer className="fotter">
        <div className="fotter__container wrapper" data-aos="fade-up">
            <div className="fotter__col">
                <img src={Logo} alt="logo" className="" />
                <p>
                    aks xkash kasxkavs kxsa  sxasx kas xkas xkah sx asx 
                     sa ask aks kaskas a skhg 
                      askc
                </p>
            </div>

            <div className="fotter__col">
                <h3>About </h3>
                <a href="" className="">about us</a>
                <a href="" className="">feature</a>
                <a href="" className="">news</a>
                
            </div>

            

            <div className="fotter__col">
                <h3>Company </h3>
                <a href="" className="">cryptocode</a>
                <a href="" className="">security</a>
                <a href="" className="">rankings</a>
                
            </div>

            <div className="fotter__col">
                <h3>Support </h3>
                <a href="" className="">F&Q</a>
                <a href="" className="">Support</a>
                <a href="" className="">Contact us</a>
                
            </div>

            <div className="fotter__col">
                <div className="fotter__icons">
                <h3>Social </h3>
                <a href="" className="fotter__icon">
                    <FaFacebookF />
                </a>
                <a href="" className="fotter__icon">
                    <FaInstagram/>
                </a>
                <a href="" className="fotter__icon">
                    <FaFacebookF />
                </a>
                </div>
                
                
            </div>
        </div>
    </footer>
  )
}
