import React, { FC, RefObject } from 'react';
import { Button } from 'semantic-ui-react';
import './Blog.css';
import ScrollAnimation from 'react-animate-on-scroll';

type Props = {
  reference: RefObject<HTMLHeadingElement>;
};

const Blog: FC<Props> = (props) => {
  return (
    <div id="blog" className="padding-top">
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <h1 className="section-title" ref={props.reference}>
          Blog
        </h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <div className="carousel">
          <div className="carousel-inner">
            <p className="blog-description">準備中...</p>
            <Button inverted color="blue" size="big">
              ブログへ
            </Button>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Blog;
