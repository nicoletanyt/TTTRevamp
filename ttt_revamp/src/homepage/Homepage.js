import React, {useEffect, useState} from 'react'
import Footnote from './Footnote';
import Timeline from './Timeline';
import HighlightItem from "./HighlightItem";
import { HIGHLIGHTS } from '../Data';

// Import Images
import Banner1 from "../assets/Banner1.png"
import Banner2 from "../assets/Banner2.png";
import Banner3 from "../assets/Banner3.png";

const BANNERS = [Banner1, Banner2, Banner3];

export default function Homepage() {
  const [bannerImg, setBannerImg] = useState(0);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setBannerImg((prevBannerImg) => (prevBannerImg + 1) % BANNERS.length);
    }, 3000);
    return () => clearInterval(imgInterval);
  }, [])

  return (
    <div id="homepage">
      <img src={BANNERS[bannerImg]} alt="Banner" id="banner-img" />,
      <p>
        Top To Toe (TTT) Beauty College started in 1981 to provide its students in
        Singapore with internationally recognised beauty and holistic wellness
        experts from overseas. We have trained our local trainers to have
        expertise that matches international standards. Our high-quality
        training has enabled our graduates to succeed in the industry.
      </p>
      <hr />
      <section>
        <h1>Our Highlights</h1>
        <br/>
        <div id="highlights-wrapper">
          {HIGHLIGHTS.map((item, index) => {
            return (
              <HighlightItem
                key={index}
                image={item.image}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
      </section>
      <hr />
      <section>
        <h1>Milestones</h1>
        <Timeline />
      </section>
      <Footnote />
    </div>
  );
}
