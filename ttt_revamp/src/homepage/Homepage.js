import React, {useEffect, useState} from 'react'
import Footnote from './Footnote';
import Timeline from './Timeline';

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
      <img src={BANNERS[bannerImg]} alt="Banner" />,
      <section>
        <p>Key messages</p>
      </section>
      <section>
        <h1>Highlights</h1>
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
