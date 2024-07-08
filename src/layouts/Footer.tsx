import React from "react";
import { ReactComponent as XIcon } from "@/assets/svg/x.svg";
import { ReactComponent as GitIcon } from "@/assets/svg/git.svg";
import { ReactComponent as TgIcon } from "@/assets/svg/tg.svg";
import { ReactComponent as MedIcon } from "@/assets/svg/med.svg";
import styled from "styled-components";

const FooterSty = styled.div`
  background-color: #f4f4f4;
  span {
    color: rgba(28, 28, 30, 0.72);
    text-align: center;
    font-weight: 400;
    line-height: 140%; /* 150% */
    letter-spacing: 0.32px;
  }
  .icon-box {
    svg {
      cursor: pointer;
    }
  }
`;
export default function Footer() {
  return (
    <FooterSty className="footer flex items-center justify-between px-[12%] md:px-[32px] pb-[107px] md:pb-[77px] md:flex-col-reverse md:gap-[30px]">
      <span className="text-[16px] md:text-[12px]">2024 Company Name. All Rights Reserved.</span>
      <div className="icon-box flex gap-[20px] items-center">
        <XIcon></XIcon>
        <GitIcon></GitIcon>
        <TgIcon></TgIcon>
        <MedIcon></MedIcon>
      </div>
    </FooterSty>
  );
}
