import "./Header.css";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import burger from "../../assets/menu-burger.svg";
import profilePic from "../../assets/selfphoto.jpg";

function Header() {
  const [nav, setNav] = useState(true);

  const openNav = () => {
    setNav(!nav);
  };

  const [profile, setProfile] = useState(true);
  const showProfile = () => {
    setProfile(!profile);
  };

  const [profileOption, setProfileOptions] = useState(false);
  const showProfileOption = () => {
    setProfileOptions(true);
  };
  const unShowProfileOption = () => {
    setProfileOptions(false);
  };

  return (
    <header className="shadow-md">
      <nav className="display-large relative sm:flex flex-1 flex-row justify-between items-center h-16">
        <div className="ml-8">
          <a href="#">
            <img className="logo-hover" src={logo} width="75px"></img>
          </a>
        </div>
        <div className="flex flex-row gap-3 mr-8 font-medium">
          <a href="#">Meetings</a>
          <a href="#">Contacts</a>
          <a className={`${profile ? "hidden" : ""}`} href="#">
            Signup
          </a>
          <a className={`${profile ? "hidden" : ""}`} href="#">
            Login
          </a>
          <div>
            <img
              className={`${profile ? " rounded-full" : "hidden"}`}
              src={profilePic}
              onMouseOver={showProfileOption}
              onMouseLeave={unShowProfileOption}
              alt="Self photo"
              width="25px"
            />
          </div>
        </div>
      </nav>
      <nav className="sm:hidden relative flex flex-1 flex-row justify-between items-center h-16">
        <div className="ml-8">
          <a href="#">
            <img src={logo} width="75px"></img>
          </a>
        </div>
        <div className="mr-8" onClick={openNav}>
          <img src={burger} alt="burger" width="20px" />
        </div>
      </nav>
      <div
        className={`${profileOption ? "flex flex-col justify-end w-20 h-16 top-9 absolute right-0 mr-8 font-medium " : "hidden"}`}
        onMouseOver={showProfileOption}
        onMouseLeave={unShowProfileOption}
      >
        <a className="w-full" href="#">
          Setting
        </a>
        <a href="#">Logout</a>
      </div>
      <div
        className={`${nav ? "hidden" : "sm:hidden relative flex flex-col gap-3 justify-center font-medium items-center"}`}
      >
        <a href="#">Meetings</a>
        <a href="#">Contacts</a>
        <a className={`${profile ? "hidden" : ""}`} href="#">
          Signup
        </a>
        <a className={`${profile ? "hidden" : ""}`} href="#">
          Login
        </a>
        <a className={`${profile ? " rounded-full" : "hidden"}`}> Logout</a>
      </div>
    </header>
  );
}

export default Header;
