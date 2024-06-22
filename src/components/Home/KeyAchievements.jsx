import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

import logo1 from "../../Assets/Logo_1.png";
import logo2 from "../../Assets/Logo 2.png";
import logo3 from "../../Assets/Logo 3.png";
import logo4 from "../../Assets/Logo 4.png";
import logo5 from "../../Assets/Logo 5.png";

const achievements = [
  {
    logo: logo1,
    description: "Archbishop Desmond Tutu Leadership Fellow",
  },
  {
    logo: logo2,
    description:
      "Fellow, Institute of Chartered Secretaries & Administrators",
  },
  {
    logo: logo3,
    description:
      "Recognized as the Most Influential Young Person in Oyo State under the Governance category by the Oyo State Youth Awards",
  },
  {
    logo: logo4,
    description:
      "Named among the top 100 most influential people of African descent under 40 by the UN-affiliated MIPAD 100 in Politics & Governance",
  },
  {
    logo: logo5,
    description:
      "Founder of African Governance Institute for Development (AGID)",
  },
  {
    logo: logo2,
    description: "Founder of Seyi Adisa Development Initiative (SADI)",
  },
  {
    logo: logo1,
    description: "Founder of 7:11 Empowerment Foundation (7ELEVEN)",
  },
  {
    logo: logo3,
    description: "Co-Founder of T&A Legal",
  },
];

const KeyAchievements = ({ keyProp }) => {
  const [sliderKey, setSliderKey] = useState(keyProp);
  const [sliderInitialized, setSliderInitialized] = useState(false);

  useEffect(() => {
    setSliderKey(null); // Reset slider key
    setSliderInitialized(false); // Reset initialization flag
  }, [keyProp]);

  useEffect(() => {
    if (keyProp && !sliderInitialized) {
      setSliderKey(keyProp);
      setSliderInitialized(true);
    }
  }, [keyProp, sliderInitialized]);
  const settings = {
    key: sliderKey,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Ensure Slider is initialized properly
  const handleSliderInit = () => {
    if (!sliderInitialized) {
      setSliderInitialized(true);
    }
  };

  return (
    <div className="key__achievements">
      <div className="key__achievements_title">
        <p>These are my</p>
        <h3>Key achievements</h3>
      </div>
      <div className="key__achievements__container">
        <Slider {...settings} onInit={handleSliderInit}>
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <img
                src={achievement.logo}
                alt={achievement.description}
                className="achievement-logo"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default KeyAchievements;
