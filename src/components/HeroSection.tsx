import React, { FC, RefObject } from 'react';
import { Button } from 'semantic-ui-react';
import './HeroSection.css';

type Props = {
  reference: RefObject<HTMLHeadingElement>;
};

const HeroSection: FC<Props> = (props) => {
  const about = props.reference;
  return (
    <div className="hero-container">
      <video src="/videos/hero-video.mp4" autoPlay loop muted></video>
      <h1>
        Hello I'm <span id="myname">Koki Shibata</span>,
      </h1>
      <h1>a Frontend Web Developer</h1>
      <Button
        basic
        inverted
        color="blue"
        size="large"
        onClick={() => about.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span>About me</span>
      </Button>
    </div>
  );
};

export default HeroSection;
