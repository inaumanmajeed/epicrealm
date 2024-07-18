import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import useOnclickOutside from "react-cool-onclickoutside";

const NavLink = (props) => {
  return <Link {...props} />;
};

const Navbar = () => {
  const useDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const closeDropdown = () => {
      setIsOpen(false);
    };

    const ref = useRef(null);
    useOnclickOutside(() => {
      closeDropdown();
    }, ref);

    return {
      isOpen,
      toggleDropdown,
      closeDropdown,
      ref,
    };
  };

  const {
    // isOpen: openMenu,
    toggleDropdown: handleBtnClick,
    closeDropdown: closeMenu,
    ref,
  } = useDropdown();
  const {
    // isOpen: openMenu1,
    // toggleDropdown: handleBtnClick1,
    closeDropdown: closeMenu1,
    ref: ref1,
  } = useDropdown();
  const {
    isOpen: openMenu2,
    toggleDropdown: handleBtnClick2,
    closeDropdown: closeMenu2,
    ref: ref2,
  } = useDropdown();
  const {
    isOpen: openMenu3,
    toggleDropdown: handleBtnClick3,
    closeDropdown: closeMenu3,
    ref: ref3,
  } = useDropdown();
  const {
    isOpen: openMenu4,
    toggleDropdown: handleBtnClick4,
    closeDropdown: closeMenu4,
    ref: ref4,
  } = useDropdown();

  const [showmenu, setBtnIcon] = useState(false);

  useEffect(() => {
    const header = document.getElementById("header-wrap");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;

    const scrollCallBack = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");
      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      }
    };

    window.addEventListener("scroll", scrollCallBack);

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <nav className="navbar transition">
      <div className="container">
        {/********* Logo *********/}
        <NavLink className="navbar-brand" to="/">
          <img
            src="./img/logo.png"
            className="img-fluid d-md-block d-none imginit"
            alt="logo"
          />
          <img
            src="./img/logo-mobile.png"
            className="img-fluid d-md-none d-sms-none imginit"
            alt="logo"
          />
        </NavLink>
        {/********* Logo *********/}

        {/********* Mobile Menu *********/}
        <div className="mobile">
          {showmenu && (
            <div className="menu">
              <div className="navbar-item counter">
                <div ref={ref}>
                  <NavLink to={"/"} className="dropdown-custom btn">
                    Home
                  </NavLink>
                </div>
              </div>

              <div className="navbar-item counter">
                <div ref={ref1}>
                  <NavLink to={"/games"} className="dropdown-custom btn">
                    Games
                  </NavLink>
                </div>
              </div>

              <div className="navbar-item counter">
                <NavLink to="/location" onClick={() => setBtnIcon(!showmenu)}>
                  Locations
                </NavLink>
              </div>

              <div className="navbar-item counter">
                <div ref={ref2}>
                  <div
                    className="dropdown-custom dropdown-toggle btn"
                    onClick={() => {
                      handleBtnClick2();
                      closeMenu1();
                      closeMenu();
                      closeMenu3();
                      closeMenu4();
                    }}
                  >
                    Support
                  </div>
                  {openMenu2 && (
                    <div className="item-dropdown">
                      <div className="dropdown" onClick={closeMenu2}>
                        <NavLink
                          to="/knowledgebase"
                          onClick={() => setBtnIcon(!showmenu)}
                        >
                          Knowledgebase
                        </NavLink>
                        <NavLink
                          to="/faq"
                          onClick={() => setBtnIcon(!showmenu)}
                        >
                          FAQ
                        </NavLink>
                        <NavLink
                          to="/contact"
                          onClick={() => setBtnIcon(!showmenu)}
                        >
                          Contact
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="navbar-item counter">
                <NavLink to="/news" onClick={() => setBtnIcon(!showmenu)}>
                  News
                </NavLink>
              </div>

              <div className="navbar-item counter">
                <div ref={ref3}>
                  <div
                    className="dropdown-custom dropdown-toggle btn"
                    onClick={() => {
                      handleBtnClick3();
                      closeMenu1();
                      closeMenu2();
                      closeMenu();
                      closeMenu4();
                    }}
                  >
                    Company
                  </div>
                  {openMenu3 && (
                    <div className="item-dropdown">
                      <div className="dropdown" onClick={closeMenu3}>
                        <NavLink
                          to="/about"
                          onClick={() => setBtnIcon(!showmenu)}
                        >
                          About Us
                        </NavLink>
                        <NavLink
                          to="/affliate"
                          onClick={() => setBtnIcon(!showmenu)}
                        >
                          Affliates
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="navbar-item counter">
                <div ref={ref4}>
                  <div
                    className="dropdown-custom dropdown-toggle btn"
                    onClick={() => {
                      handleBtnClick4();
                      closeMenu1();
                      closeMenu2();
                      closeMenu3();
                      closeMenu();
                    }}
                  >
                    Profile
                  </div>
                  {openMenu4 && (
                    <div className="item-dropdown">
                      <div className="dropdown" onClick={closeMenu4}>
                        <NavLink
                          to="/login"
                          onClick={() => setBtnIcon(!showmenu)}
                        >
                          Login
                        </NavLink>
                        <NavLink
                          to="/register"
                          onClick={() => setBtnIcon(!showmenu)}
                        >
                          Register
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        {/********* Mobile Menu *********/}

        {/********* Dekstop Menu *********/}
        <div className="dekstop">
          <div className="menu">
            <div className="navbar-item counter">
              <div ref={ref}>
                <NavLink
                  to="/"
                  className="dropdown-custom btn"
                  onMouseEnter={handleBtnClick}
                  onMouseLeave={closeMenu}
                >
                  Home
                </NavLink>
              </div>
            </div>

            <div className="navbar-item counter">
              <div ref={ref1}>
                <NavLink to='/games' className="dropdown-custom btn">Games</NavLink>
              </div>
            </div>

            <div className="navbar-item counter">
              <NavLink to="/location">Locations</NavLink>
            </div>

            <div className="navbar-item counter">
              <div ref={ref2}>
                <div
                  className="dropdown-custom dropdown-toggle btn"
                  onMouseEnter={handleBtnClick2}
                  onMouseLeave={closeMenu2}
                >
                  Support
                  {openMenu2 && (
                    <div className="item-dropdown">
                      <div className="dropdown" onClick={closeMenu2}>
                        <NavLink to="/knowledgebase">Knowledgebase</NavLink>
                        <NavLink to="/faq">FAQ</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="navbar-item counter">
              <NavLink to="/news">News</NavLink>
            </div>

            <div className="navbar-item counter">
              <div ref={ref3}>
                <div
                  className="dropdown-custom dropdown-toggle btn"
                  onMouseEnter={handleBtnClick3}
                  onMouseLeave={closeMenu3}
                >
                  Company
                  {openMenu3 && (
                    <div className="item-dropdown">
                      <div className="dropdown" onClick={closeMenu3}>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/affliate">Affliates</NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="navbar-item counter">
              <div ref={ref4}>
                <div
                  className="dropdown-custom dropdown-toggle btn"
                  onMouseEnter={handleBtnClick4}
                  onMouseLeave={closeMenu4}
                >
                  Profile
                  {openMenu4 && (
                    <div className="item-dropdown">
                      <div className="dropdown" onClick={closeMenu4}>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/********* Dekstop Menu *********/}

        {/********* Side Button *********/}
        <div className="menu_side_area">
          <NavLink to="/pricing" className="btn-line" id="btn-line">
            Get Plan
          </NavLink>
          {/********* Burger Button *********/}
          <button
            className="burgermenu"
            type="button"
            onClick={() => {
              setBtnIcon(!showmenu);
              closeMenu1();
              closeMenu2();
              closeMenu3();
              closeMenu4();
            }}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          {/********* Burger Button *********/}
        </div>
        {/********* Side Button *********/}
      </div>
    </nav>
  );
};

export default Navbar;
