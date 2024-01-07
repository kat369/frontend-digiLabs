import React from "react";
import "./Swiper.css";
import angellist from "../Assests/Images/Angellist.png";
import Behance from "../Assests/Images/Behance.png";
import Kin from "../Assests/Images/Kin.png";
import Lottie from "../Assests/Images/Lottie.png";
import Micro from "../Assests/Images/Micro.png";
import Nuxt from "../Assests/Images/Nuxt.png";
import Wise from "../Assests/Images/Wise.png";
import dribble from "../Assests/Images/dribble.png";
import { useInView } from 'react-intersection-observer';

function Swiper() {


  const { ref: swiperref, inView: swipervisible } = useInView();
console.log(swipervisible )

  const data = [
   {
      image: Nuxt,
    }, {
      image: Micro,
    }, {
      image: Lottie,
    },
    {
      image: Wise,
    },
    {
      image: dribble,
    } ,{
      image: Kin,
    }, {
      image: angellist,
    },
    {
      image: Behance,
    },
  ];
  return (
    <>
   
    <div ref={swiperref} className={swipervisible? "swiper-container popout" : "swiper-container" }>
    <div className="swiper-container-logos">
     {data.map((image, index) => (
       <img
         key={index}
         src={image.image}
         alt="swiper-image"
         className="swiper-image"
       />
     ))}
   </div>
   <div className="swiper-container-logos">
     {data.map((image, index) => (
       <img
         key={index}
         src={image.image}
         alt="swiper-image"
         className="swiper-image"
       />
     ))}
   </div>
   </div>
 
 </>
  );
}

export default Swiper;
