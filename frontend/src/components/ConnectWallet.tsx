import React, { useEffect, useState } from "react";
import Cbutton, { Btntype } from "./comm/Cbutton";
import { store } from "@/store";
import { ConnectWalletEth, ruleNetwork } from "@/utils/metamask";
import { updateAccount } from "@/store/reducers/userSlice";
import { message } from "antd";
import { accountFormat } from "@/utils/account";
import styled from "styled-components";

const ConnectWalletSty = styled.div`
.addr-box {
  padding: 10px 18px;
  border-radius: 30px;
  background-color: #fff;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    display: block;
    content: '';
    
  }
  &:hover {

  }
}
`;
export default function ConnectWallet() {
  const [account, setAccount] = useState("");

  const MetaMask = async () => {
    try {
      const res: any = await ConnectWalletEth();
      console.log(res);
      if (res.code === 200) {
        const account = res.data;
        const res2: any = await ruleNetwork();
        if (res2.code === 200) {
          store.dispatch(updateAccount(account[0]));
          message.success("Successful");
        } else {
          store.dispatch(updateAccount(""));
        }
      } else if (res.code === 401) {
        store.dispatch(updateAccount(""));
        // metamsk未安装
        message.info(res.data);
        window.open("https://metamask.io");
      } else {
        store.dispatch(updateAccount(""));
        message.info(res.data);
      }
    } catch (error) {
      store.dispatch(updateAccount(""));
      console.log(error);
    }
  };

  useEffect(() => {
    setAccount(store.getState().userReducer.userInfo.account);
    store.subscribe(() => {
      setAccount(store.getState().userReducer.userInfo.account);
    });
  }, [account]);
  return (
    <ConnectWalletSty>
      {!account ? (
        <div className="connect-wallte" onClick={MetaMask}>
          <Cbutton name="Connect Wallet" type={Btntype.BG}></Cbutton>
        </div>
      ) : (
        <div className="addr-box">
          <span>{accountFormat(account)}</span>
        </div>
      )}
    </ConnectWalletSty>
  );
}
