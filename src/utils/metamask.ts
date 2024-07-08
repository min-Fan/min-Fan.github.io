import { chain_info } from "@/config/chain_info"
import { store } from "@/store"
import { updateAccount } from "@/store/reducers/userSlice"
import { message } from "antd"

export const ruleNetwork = async () => {
  if (typeof window.ethereum === 'undefined') {
    return {code: 401, data: 'Metamask uninstall'}
  }
  const chain: ChainInfo = chain_info[process.env.UMI_CHAINID as string]
  
  console.log('chain ==>', chain)
  try {
    const chain_now = await window.ethereum.request({ method: "eth_chainId" });
    console.log('chain_now ==>', chain_now)
    if (chain_now != chain.hax) {
      message.info(`Your wallet is not connected to ${chain.name}`);
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chain.hax }],
      });
    } 
    return {code: 200, data: true}
  } catch (switchErr: any) {
    console.log('switchErr ==>', switchErr)
    if (switchErr.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: chain.hax,
              chainName: chain.name,
              rpcUrls: [chain.rpc],
              blockExplorerUrls: [chain.explorer],
              nativeCurrency: {
                name: chain.nativeCurrency.name,
                symbol: chain.nativeCurrency.symbol,
                decimals: chain.nativeCurrency.decimals
              }
            },
          ],
        });
        return {code: 200, data: true}
      } catch (addErr) {
        message.info('Failed to add network');
        console.log('addErr ==>', addErr)
        return {code: 402, data: addErr}
      }
    } else {
      return {code: 403, data: switchErr}
    }
  }
}

export const disMetamask = () => {
  store.dispatch(updateAccount(""));
}

export const ConnectWalletEth = async () => {
  if (typeof window.ethereum === 'undefined') {
    console.log('metamask uninstall')
    return {code: 401, data: 'Metamask Uninstall'}
  }
  try {
    // const isLock = await window.ethereum._metamask.isUnlocked();
    // if (isLock) {
      if (!window.ethereum.selectedAddress) {
        let accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        return {code: 200, data: accounts}
      } else {
        return {code: 200, data: [window.ethereum.selectedAddress]}
      }
    // } else {
    //   return {code: 402, data: 'Metamask Unlocked'}
    // }
  } catch (err: any) {
    return {code: 400, data: err.message}
  }
}