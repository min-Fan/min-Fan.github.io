type Chain_list = { [key: string]: ChainInfo }

export const chain_info: Chain_list = {
  11155111: {
    chainid: 11155111,
    hax: '0xaa36a7',
    name: 'Sepolia',
    symbol: 'SepoliaETH',
    rpc: ['https://sepolia.infura.io/v3/'],
    explorer: ['https://sepolia.etherscan.io'],
    nativeCurrency: {
      name: 'SepoliaETH',
      symbol: 'SepoliaETH',
      decimals: 18
    }
  }
}