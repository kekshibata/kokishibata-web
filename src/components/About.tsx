import React, { FC, RefObject } from 'react';
import './About.css';

type Props = {
  reference: RefObject<HTMLHeadingElement>;
};

const About: FC<Props> = (props) => {
  return (
    <>
      <div id="about-section" className="padding-top">
        <h1 className="section-title" ref={props.reference}>
          About
        </h1>
        <div className="flex-container">
          <div className="col-item">
            <div id="profile-circle"></div>
          </div>
          <div className="col-item about-description">
            <h2>柴田 光希 (しばた こうき)</h2>
            <p className="mb-0">学生、フロントエンドWEB開発者。</p>
            <p>
              ReactによるリッチなUI/UX、非同期処理を用いたモダンなWebサイト、アプリケーションの開発をメインにしています。
            </p>
            <div className="social-icons">
              <a href="https://instagram.com/kokishbt/" className="icon-item">
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100004728487210"
                className="icon-item"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/kekshibata" className="icon-item">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/koki-shibata-88494a1b2/"
                className="icon-item"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
