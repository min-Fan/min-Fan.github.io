declare interface Window {
  ethereum: any
}

type NativeCurrency = {
  name: string,
  symbol: string,
  decimals: number
}

type ChainInfo = {
  name: string,
  hax: string,
  rpc: Array<string>,
  chainid: number,
  symbol: string,
  explorer: Array<string>,
  nativeCurrency: NativeCurrency
}