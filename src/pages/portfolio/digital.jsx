import React from "react";
import "./styles/digital.scss";

// Framer motion
import { motion } from "framer-motion";

import TopBar from "../../components/TopBar";
import PortfolioNav from "../../components/PortfolioNav";
import NavBar from "../../components/NavBar";

export default function Digital() {
  return (
    <div className="portfolio-digital">
      <title>Steve Antonioni - Portfolio</title>
      <TopBar />

      <motion.div
        className="img-container-parent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="img-container-outerWrapper">
          <div className="img-container">
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--8AeVCZBi--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/576a2a9300bb288e525166d50f749378/Justine_BW_1.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--LTFwkjCL--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/5d5eb39e779a7c804cd6d7fe4d02e82e/Kailee_BW_1.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--A-WRyxqZ--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/ad71cd14cf2eca301926a13eb595fae5/Justine_Vogue_1.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--SdeHdNU4--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/40cac3025cef715fc83bb5a3ccd42d65/Justine_Vogue_3.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--ue-ORXRW--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/137991e02c10cb027324592a433888d1/Justine_Vogue_2.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--d1SKaiia--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/76594ad9731f6b64d69ad749329b3fa2/Kailee_Vogue_3.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--__YEiVGB--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/93960e7cbf4412bb207cef3c0bab92b8/Kailee_Vogue_2.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--5JDtp-9a--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/267fd9da6237edfd3e5d1cdb69820e6a/Kailee_Vogue_1.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--uDVy4AlB--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/5f6b0aeb1074d504004e741cd919c48a/Hospital.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--DZYvLkwK--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/c14a3db0933c18c405e6ef3c5bba044b/Well_1.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--yo3mUXdY--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/4a87855ca018ce1def4f47d1556506a7/Well_2.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--dX0tAGJa--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/91e0d56a91aa85baecb6e0956350208b/Well_3.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--ygSMVtAd--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/89f460c0172bb1e522e715c8aee8a787/Madeira.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--J24Y9waB--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/ec71b8f3a738936315f5b065e5b03481/Ian_1.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--xuvYujUN--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/00e7954f349db1824af3847f55221a28/Crown_Jewel.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--B_FvDheq--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/6a282cb37a63b428f4f6e9ea8b5b41cc/Jasper_Portrait.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--OMCnvogA--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/a7e15a03d913e692460d7fad6a0c10aa/Epic.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--oANDCCQs--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/109afa5a9772dc915ceabf31f458edc9/Framed_Peak_1.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--DeKR6J51--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/f42d65972a2aaf7a86abc57f34b25e8e/Lake_Bled.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--6BadBcLZ--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/731fc73b0ced7340eaffe362a66ba5c5/Moraine_Lake_1.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--0y3BQqaQ--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/d2e5b4e561d28c84b1112a2b81eb131f/Green_Peaks.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--vuVGlAbD--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/0bd5913fb6ab32c44bd74f5a7be249a6/Car_Final_2.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--MoYbq3pg--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/0b267bd7ed42b65bf2938b1f11827435/Inside_car_1.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--jrp50XjO--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/209fe49be603d70a93ee104ccf8413e2/Building_Dark_with_clouds.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--FffOHQjf--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/ef0a280d2d6b7d4dd61b163cacc30227/Cool_roof.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--I7PKGY2Z--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/458288a9582b7289449fa30d70c61212/Double_towers.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--cQon8TXs--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/c9e0d58860ba32597e6f6d47004b3328/Metal_Birds.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--ItzmanQP--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/a227162da656aec24b55192e85f8a284/Tall_pointy_building.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--h8QJBzBR--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/b61764b2377038fbbbcf604994ec6434/Florence_Uffizi_BW.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--MEkTh25e--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/2aba07a98789622aa71cd522e8d45d49/Gloriette_of_Schonbrunn.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--iyGbpTbJ--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/3b47468d44927b55d86b0f7c3d1f2d99/Couple_and_Tree_BW.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--0qke3xtv--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/e052644f95dbc4f611afdbf05a03c40f/Florence_Bridge_BW.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--6k3JauEk--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/56d0d6252f687b5fb00864fced5e11c3/Costa_Rica_JPG.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--T52phdJr--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/6680cce10114418e56edf70145995823/Looming.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--JpfM56HP--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/7a21cd2418fe5098dc872631829f8bf5/Venice_in_Colour.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--IS1Et2nb--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/ec042c7d51fae2d858609f8879d8ad34/Jaco_Final.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--vpJRDnr9--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/f9f53b17b3a39b18a7f4ed94f95293b2/Black_Bullet.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--yrEhOvni--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/5e15e0f8353a8baa551f3bd56b9d57cb/Luke_close_up.jpg"
              alt=""
            />
            <img
              className="img-container__image"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--HB9BgDRd--/c_limit,g_center,h_550,w_65535/fl_keep_iptc.progressive,q_95/v1/7f5f6d7e58aacaf5a0e66342660199f5/King_in_the_North.jpg"
              alt=""
            />
          </div>
        </div>
      </motion.div>

      <PortfolioNav />
      <NavBar />
    </div>
  );
}
