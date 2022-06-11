import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColor: "#F7FD04",
  burgerColorHover: "#FC5404",
  logo,
  logoWidth: "20vmax",
  navColor1: "#67ba24",
  logoHoverSize: "10px",
  logoHoverColor: "#67ba24",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "#FC5404",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#F7FD04",
  searchIcon: "true",
  SearchIconElement: "Search",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconSize: "2.5vmax",
  profileIconColor: "#FC5404",
  searchIconColor: "#FC5404",
  cartIconColor: "#FC5404",
  profileIconColorHover: "#F7FD04",
  searchIconColorHover: "#F7FD04",
  cartIconColorHover: "#F7FD04",
  cartIconMargin: "1vmax",
  link1Transition: "0.5",
  link1AnimationTime:"0.5"
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
