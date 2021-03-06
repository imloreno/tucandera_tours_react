import React from "react";
import "styles/modules/banner.css";

import BannerImg from "img/banner1/banner.png";
// import Img1_M from "img/banner1/phone/a-sky.png";
// import Img2_M from "img/banner1/phone/b-mountain.png";
// import Img3_M from "img/banner1/phone/c-mountain.png";
// import Img4_M from "img/banner1/phone/d-mountain.png";
// import Img1 from "img/banner1/a-sky.png";
// import Img2 from "img/banner1/b-mountain.png";
// import Img3 from "img/banner1/c-mountain.png";
// import Img4 from "img/banner1/d-mountain.png";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <img src={BannerImg} alt="Tucanadera Tours" loading="lazzy" />
        {/* <picture>
          <source srcSet={Img1_M} media="(max-width: 50rem)" />
          <img src={Img1} alt="Tucanadera Tours" loading="lazzy" />
        </picture>
        <picture>
          <source srcSet={Img2_M} media="(max-width: 50rem)" />
          <img src={Img2} alt="Tucanadera Tours" loading="lazzy" />
        </picture> */}
        <div className="banner__title">
          <h1 className="title-font">¿QUE HACER EN SAMAIPATA?</h1>
          <p>Todo lo que puedes hacer en Samaipata</p>
        </div>
        {/* <picture>
          <source srcSet={Img3_M} media="(max-width: 50rem)" />
          <img src={Img3} alt="Tucanadera Tours" loading="lazzy" />
        </picture>
        <picture>
          <source srcSet={Img4_M} media="(max-width: 50rem)" />
          <img
            src={Img4}
            alt="Tucanadera Tours"
            loading="lazzy"
            className="last-banner"
          />
        </picture> */}
      </section>
      <section className="banner2">
        <h3 className="title-font">¡HOLA! BIENVENIDO A SAMAIPATA... </h3>
        <p>
          En esta plataforma encontrarás <b>información de todos los sitios </b>
          que puedes visitar en Samaipata, además de una recopilación de sólo
          los mejores servicios de <b>hospedaje, restaurantes y bares.</b> Con
          la finalidad de ofrecer una mejor experiencia a nuestros visitantes.
        </p>
      </section>
    </>
  );
};

export default Banner;
