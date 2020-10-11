import React, { FC, RefObject } from 'react';
import { Button } from 'semantic-ui-react';
import './Blog.css';

type Props = {
  reference: RefObject<HTMLHeadingElement>;
};

const Blog: FC<Props> = (props) => {
  return (
    <div id="blog" className="padding-top">
      <h1 className="section-title" ref={props.reference}>
        Blog
      </h1>
      <div className="carousel">
        <div className="carousel-inner">
          <p className="blog-description">準備中...</p>
          <Button inverted color="blue" size="big">
            ブログへ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
