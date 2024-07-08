import { Button } from "antd";
import React, { useEffect, useState } from "react";
import styles from "@/assets/scss/nav.scss";
import { ReactComponent as MenuMb } from "@/assets/svg/menu-mb.svg";
import { ReactComponent as MenuCl } from "@/assets/svg/menu-close.svg";
import Cbutton, { Btntype } from "@/components/comm/Cbutton";
import ConnectWallet from "@/components/ConnectWallet";
import MobileMeun from "@/components/MobileMeun";

export default function Nav() {
  // 主题色
  const [state, setState] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const [menuShow, setMenuShow] = useState(false);

  const showMenu = () => {
    setMenuShow(true);
  };
  const closeMenu = () => {
    setMenuShow(false);
  };

  // 初始化
  const initTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  // 跟随系统
  const autoTheme = () => {
    localStorage.removeItem("theme");
    initTheme();
  };
  // 改变主题色
  const switchTheme = () => {
    let theme = localStorage.getItem("theme") || state;
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    setState(theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    initTheme();
  }, []);
  return (
    <div
      className={[
        styles["nav-compt"],
        "px-[60px] py-[37px] md:px-[20px] md:py-[15px]",
      ].join(" ")}
    >
      <div className="logo-box"></div>
      <div className={styles["menu-box"]}>
        <div className={[styles["pc-show"], "md:hidden xm:flex"].join(" ")}>
          <span>Doc</span>
          <span>Onboard</span>
          <div className={styles["btn-box"]}>
            <Cbutton name="Join Waitlist" type={Btntype.BOR}></Cbutton>
            <ConnectWallet></ConnectWallet>
          </div>
        </div>
        <div className={[styles["mb-show"], "md:block xm:hidden"].join(" ")}>
          {!menuShow ? (
            <MenuMb onClick={showMenu}></MenuMb>
          ) : (
            <MenuCl onClick={closeMenu}></MenuCl>
          )}
        </div>
      </div>
      <MobileMeun open={menuShow} close={closeMenu}></MobileMeun>
    </div>
  );
}
