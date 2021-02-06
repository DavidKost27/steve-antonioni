import * as React from "react";
import "./styles/film.scss";

import TopBar from "../../components/TopBar";
import PortfolioNav from "../../components/PortfolioNav";
import NavBar from "../../components/NavBar";

const Portfolio = () => {
  return (
    <main className="portfolio">
      <title>Steve Antonioni - Portfolio</title>
      <TopBar />

      <div className="img-container-parent">
        <div className="img-container-outerWrapper">
          <div className="img-container">
            <img
              className="img-container__image "
              src="https://format-com-cld-res.cloudinary.com/image/private/s--Czd4ubou--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/819662ccdb13583d3ce2bc7e5a969580/000063510036.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--TGnUUy6_--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/4fb054feb94698909a2d3b8013c60884/Flower_building_de.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--GhhpT5JK--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/e596162e473e6ab8599716de22ce9037/Windmill_2.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--OGvcDSHa--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/116e7a598287acaf36ed52a2cdf54f0d/84380002.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--x31s2lwy--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/3e7837484ba4452f45804d56b7030a84/3.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--8BRg6k-q--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/30614dcb1997d786b5b2d1437410dc4c/Antwerp_Central.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--NmjbUinI--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/f16fe94bd9679e2d5dafb5d6c2c1514c/Antwerp_alley.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--FogbfFYR--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/dee442c08db75e343a7c5328998f9a9f/Beach_Sunset_Plants.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--HAE5D_M4--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/ff2f30c55a4028b0a3ed33c02a412d18/Building_1.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--swvOY4o6--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/1c1462c0bd5b7e500e5d26a0e7b2d8ae/Through_the_Leaves.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--tpsjbgvI--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/4b6aae1bf9ac72e5855dc0b490cf3279/000097030020.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--sSpdpqg2--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/80eaebc56136f51b7b218fe53efa1955/Justine_Deck.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--BzJ2dhkd--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/8b7d366a21abe5bd84cd333900ad0419/Red_light_buildings.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--0DXZBIi4--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/db11e36934594d00283956fe915f0f3f/Bruge_church.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--8JgdfC_4--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/9e00b5802d1836823cc0741dfdfbcff3/Amsterdam_horizontal.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--eBtJGZrA--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/a126b05734aed3b90e7fd4e0bb661d6b/Fountain.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <PortfolioNav />
      <NavBar />
    </main>
  );
};

export default Portfolio;
