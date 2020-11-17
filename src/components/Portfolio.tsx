import React, { FC, RefObject } from 'react';
import './Portfolio.css';
// import ScrollAnimation from 'react-animate-on-scroll';

import Card from './PortfolioCard';

type Props = {
  reference: RefObject<HTMLHeadingElement>;
};

const Portfolio: FC<Props> = (props) => {
  return (
    <>
      <div id="portfolio" className="padding-top">
        {/* <ScrollAnimation animateIn="fadeInUp" animateOnce={true}> */}
        <h1 className="section-title" ref={props.reference}>
          Portfolio
        </h1>
        {/* </ScrollAnimation> */}
        <div className="flex-container">
          <div className="col-item">
            {/* <ScrollAnimation animateIn="fadeInUp" animateOnce={true}> */}
            <Card
              path="/images/mysite.png"
              name="柴田光希のホームページ(this page)"
              date="October, 2020"
              description="Reactを主に用いたシングルページのシンプルなWEBページです。レスポンシブ対応。"
            />
            {/* </ScrollAnimation> */}
          </div>
          <div className="col-item">
            {/* <ScrollAnimation animateIn="fadeInUp" animateOnce={true}> */}
            <Card
              path="/images/microsoft.png"
              name="Microsoftホームページ(模写)"
              date="July, 2020"
              description="自主制作としてHTML, CSSを用いてMicrosoftのHPを模写したものです。レスポンシブ対応。"
              link="https://kokiluci.github.io/microsoft_rep/"
            />
            {/* </ScrollAnimation> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
