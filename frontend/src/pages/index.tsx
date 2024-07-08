import React from "react";
import styled from "styled-components";
import styles from "@/assets/scss/index.scss";
import Cbutton, { Btntype } from "@/components/comm/Cbutton";
import CardImg from "@/assets/img/card.png";
import { ReactComponent as CodeBg } from "@/assets/svg/code-bg.svg";

const IndexPage = styled.div`
  width: 100%;
  .section1 {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .main-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }
  }
  .section2 {
    width: 100%;
    border-top: 1px solid rgba(217, 217, 217, 0.2);
  }
  .section3 {
    width: 100%;
    background: #f4f4f4;
    display: flex;
    flex-direction: column;
    .section3-item1 {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left-box {
        color: #000;
        text-align: left;
        display: flex;
        flex-direction: column;
        h1 {
          font-weight: 400;
        }
        .details-box {
          display: flex;
          flex-direction: column;
          h2 {
            font-size: 15.125px;
            font-weight: 700;
            line-height: 25.6px; /* 169.256% */
            letter-spacing: -0.72px;
          }
          span {
            font-size: 14px;
            font-weight: 400;
            line-height: 14px; /* 100% */
            letter-spacing: -0.42px;
          }
          p {
            color: rgba(28, 28, 30, 0.72);
            font-weight: 400;
            line-height: 140%; /* 30.8px */
          }
        }
      }
      .right-box {
        background-color: #fff;
        img {
          width: 100%;
        }
      }
    }
    .section3-item2 {
      color: #000;
      h1 {
        font-weight: 400;
      }
    }
  }
`;
export default function index() {
  return (
    <IndexPage>
      <section className="section1 px-[140px] md:px-[60px] gap-[82px] md:gap-[40px]">
        <div className="main-box max-w-[885px] md:max-w-[307px] ">
          <h1 className={styles["main-box-tit"]}>
            Your Content Title Belongs Here
          </h1>
          <p className={styles["main-box-p"]}>
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
            et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren..
          </p>
        </div>
        <div className={styles["btn-box"]}>
          <Cbutton name="Join Waitlist" type={Btntype.BG}></Cbutton>
        </div>
      </section>
      <section className="section2 grid grid-rows-4 grid-flow-col gap-0 md:flex md:flex-col">
        <div className={[styles["gird-1"], "row-span-4 col-span-2"].join(" ")}>
          <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren.
          </p>
        </div>
        <div className={[styles["gird-2"], "row-span-2 col-span-2"].join(" ")}>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </p>
        </div>
        <div className={[styles["gird-3"], "row-span-2 col-span-2"].join(" ")}>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </p>
        </div>
      </section>
      <section className="section3 pt-[140px] px-[12%] md:pt-[72px] md:px-[32px] rounded-t-[56px] md:rounded-t-[32px] gap-[160px] md:gap-[64px]">
        <div className="section3-item1 md:flex-col md:gap-[40px]">
          <div className="left-box gap-[120px] md:gap-[40px] max-w-[490px] md:max-w-full">
            <h1 className="text-[64px] md:text-[28px]">
              Grow Next-gen Business Smartly
            </h1>
            <div className="details-box gap-[24px] md:gap-[20px]">
              <h2>TypoX</h2>
              <span>to a broader audience</span>
              <p className="text-[22px] md:text-[14px]">
                An Entrance for Web3 Newcomers: Offering intuitive learning and
                knowledge search Experience <br />A Bridge Connecting Web3
                Protocols and Global users: Unifying diverse information sources
                and Web3 Protocols, reducing entry barriers for a wider audience
              </p>
            </div>
          </div>
          <div className="right-box w-[700px] md:w-full py-[133px] md:py-[64px] rounded-tr-[40px] md:rounded-tr-[24px]">
            <img src={CardImg} alt="" />
          </div>
        </div>
        <div className="section3-item2 w-full flex flex-col gap-[65px] md:gap-[40px]">
          <h1 className="text-[64px] md:text-[28px]">
            Grow Next-gen Business Smartly
          </h1>
          <div className="list-box w-full flex flex-row gap-[24px] md:gap-[20px] md:flex-col">
            <div
              className={[
                styles["list-item"],
                "flex-col flex-1 rounded-tl-[56px] md:rounded-tl-[41px] p-[56px] md:py-[30px] md:px-[40px] flex gap-[56px] md:gap-[37px]",
              ].join(" ")}
            >
              <h3 className="text-[32px] md:text-[20px]">
                Trigger actions on Stacks and Bitcoin.
              </h3>
              <div className={styles["code-img"]}>
                <CodeBg></CodeBg>
              </div>
              <p>
                quickly identify the Bitcoin block where a Stacks transaction
                was settled, enabling confidence in the security and longevity
                of assets.
              </p>
            </div>
            <div
              className={[
                styles["list-item"],
                "flex-col flex-1 rounded-tl-[56px] md:rounded-tl-[41px] p-[56px] md:py-[30px] md:px-[40px] flex gap-[56px] md:gap-[37px]",
              ].join(" ")}
            >
              <h3 className="text-[32px] md:text-[20px]">
                Trigger actions on Stacks and Bitcoin.
              </h3>
              <div className={styles["code-img"]}>
                <CodeBg></CodeBg>
              </div>
              <p>
                quickly identify the Bitcoin block where a Stacks transaction
                was settled, enabling confidence in the security and longevity
                of assets.
              </p>
            </div>
            <div
              className={[
                styles["list-item"],
                "flex-col flex-1 rounded-tl-[56px] md:rounded-tl-[41px] p-[56px] md:py-[30px] md:px-[40px] flex gap-[56px] md:gap-[37px]",
              ].join(" ")}
            >
              <h3 className="text-[32px] md:text-[20px]">
                Trigger actions on Stacks and Bitcoin.
              </h3>
              <div className={styles["code-img"]}>
                <CodeBg></CodeBg>
              </div>
              <p>
                quickly identify the Bitcoin block where a Stacks transaction
                was settled, enabling confidence in the security and longevity
                of assets.
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </IndexPage>
  );
}
