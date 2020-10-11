import React, { FC, RefObject } from 'react';
import HeroSection from '../HeroSection';
import About from '../About';
import Portfolio from '../Portfolio';
import Blog from '../Blog';
import Contact from '../Contact';
import Footer from '../Footer';

type Props = {
  about: RefObject<HTMLHeadingElement>;
  portfolio: RefObject<HTMLHeadingElement>;
  blog: RefObject<HTMLHeadingElement>;
  contact: RefObject<HTMLHeadingElement>;
};

const Home: FC<Props> = (props) => {
  return (
    <>
      <HeroSection reference={props.about} />
      <div className="container">
        <About reference={props.about} />
        <Portfolio reference={props.portfolio} />
        <Blog reference={props.blog} />
        <Contact reference={props.contact} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
