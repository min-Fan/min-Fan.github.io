import { Drawer } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ConnectWallet from "./ConnectWallet";
import Cbutton, { Btntype } from "./comm/Cbutton";

const MobileMeunSty = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .waitlist-box {
    width: 260px;
    div {
      background-color: transparent;
      color: #000;
      border-color: #000;
      span {
        font-weight: 500;
      }
    }
  }
  .connect-box {
    width: 260px;
    .addr-box {
      background: #000;
      color: #fff;
      span {
        font-weight: 500;
      }
    }
  }
`;

type MobileMeunProps = {
  open: boolean;
  close: () => void;
};
export default function MobileMeun(props: MobileMeunProps) {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
    props.close();
  };
  return (
    <Drawer
      placement="top"
      closable={false}
      onClose={onClose}
      open={props.open}
      key="meun-mobile"
    >
      <MobileMeunSty>
        <span>Doc</span>
        <span>Onboard</span>
        <div className="waitlist-box">
          <Cbutton name="Join Waitlist" type={Btntype.BOR}></Cbutton>
        </div>
        <div className="connect-box">
          <ConnectWallet></ConnectWallet>
        </div>
      </MobileMeunSty>
    </Drawer>
  );
}
