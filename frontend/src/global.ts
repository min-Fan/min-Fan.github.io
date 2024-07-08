import { chain_info } from "./config/chain_info"
import { store } from "./store"
import { setChain } from "./store/config/actions"
import config_store from "./store/config/store"
import { updateAccount } from "./store/reducers/userSlice"
import '@/assets/font/font.scss'


if (window.ethereum) {
  // metamask 监听
  window.ethereum.on("accountsChanged", (accounts: Array<string>) => {
    console.log(accounts)
    if (accounts && accounts.length != 0) {
      store.dispatch(updateAccount(accounts[0]))
    } else {
      store.dispatch(updateAccount(''))
    }
  })

  window.ethereum.on("chainChanged", (chainId: string) => {
    console.log(chainId, chain_info[process.env.UMI_CHAINID as string].hax)
    if (chainId != chain_info[process.env.UMI_CHAINID as string].hax) {
      store.dispatch(updateAccount(''))
      config_store.dispatch(setChain(process.env.UMI_CHAINID as string))
    } else {
      config_store.dispatch(setChain(chainId))
    }
  })
}
