import React, { FC, useState, RefObject } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

type Props = {
  about: RefObject<HTMLHeadingElement>;
  portfolio: RefObject<HTMLHeadingElement>;
  blog: RefObject<HTMLHeadingElement>;
  contact: RefObject<HTMLHeadingElement>;
};

const Navbar: FC<Props> = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const about = props.about;
  const portfolio = props.portfolio;
  const blog = props.blog;
  const contact = props.contact;

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          KOKI<span id="lastname">SHIBATA</span>
        </div>

        <div className="navbar-menu-lg">
          <Link to="/">
            <div
              className="navbar-menu-item"
              onClick={() =>
                about.current?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              About
            </div>
          </Link>
          <Link to="/">
            <div
              className="navbar-menu-item"
              onClick={() =>
                portfolio.current?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Portfolio
            </div>
          </Link>
          <Link
            to="/"
            onClick={() => blog.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="navbar-menu-item">Blog</div>
          </Link>
          <Link
            to="/"
            onClick={() =>
              contact.current?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <div className="navbar-menu-item">Contact</div>
          </Link>
        </div>
        <div className={click ? 'navbar-menu-sm active' : 'navbar-menu-sm'}>
          <Link
            to="/"
            onClick={() => {
              setClick(false);
              about.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="navbar-menu-sm-item">About</div>
          </Link>
          <Link
            to="/"
            onClick={() => {
              setClick(false);
              portfolio.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="navbar-menu-sm-item">Portfolio</div>
          </Link>
          <Link
            to="/"
            onClick={() => {
              setClick(false);
              blog.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="navbar-menu-sm-item">Blog</div>
          </Link>
          <Link
            to="/"
            onClick={() => {
              setClick(false);
              contact.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="navbar-menu-sm-item">Contact</div>
          </Link>
        </div>
        <div
          className={click ? 'menu-trigger active' : 'menu-trigger'}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
