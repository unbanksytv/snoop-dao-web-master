export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/squiddaodev/squid-dao";
export const EPOCH_INTERVAL = 2200;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 13.14;

export const TOKEN_DECIMALS = 9;

export const POOL_GRAPH_URLS = {
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

export const SQUID_NFT_GRAPH_URLS: { [key: string]: string } = {
  // TODO: change to real subgraph URL
  4: "https://api.thegraph.com/subgraphs/name/squiddaodev/snoopdaonftrinkeby",
  1: "https://api.thegraph.com/subgraphs/name/squiddaodev/snoop-dao-nft-mainnet",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  4: {
    DAI_ADDRESS: "0x16e1a5c4fA7A0AFb529FE44938Cd3c4F79Cc9A44", // duplicate
    OHM_ADDRESS: "0x75d9f9179F95b41236329f85EA1C12DA824A77B1",
    STAKING_ADDRESS: "0xD4204408097e26F595b377fdE6bb5F0Ae641d9Bf",
    STAKING_HELPER_ADDRESS: "0x9c8e53C5b1cc6834a29588B659199f411640b038",
    OLD_STAKING_ADDRESS: "0xb640AA9082ad720c60102489b806E665d67DCE32",
    SOHM_ADDRESS: "0xe8fb1c2Bd5DCC22d4Cd418a85F5B9cc339e8AD47",
    OLD_SOHM_ADDRESS: "0x8Fc4167B0bdA22cb9890af2dB6cB1B818D6068AE",
    MIGRATE_ADDRESS: "0x3BA7C6346b93DA485e97ba55aec28E8eDd3e33E2",
    DISTRIBUTOR_ADDRESS: "0x13Dc869A498695c97Da1632D60F8F4Ed68d1551E",
    BONDINGCALC_ADDRESS: "0xB7Da17dFBa21ADae30088E9AB40bd099E4BFA525",
    CIRCULATING_SUPPLY_ADDRESS: "0x5b0AA7903FD2EaA16F1462879B71c3cE2cFfE868",
    TREASURY_ADDRESS: "0xBDeB960973E2342751aFc4f5222260DFF5445d48",
    REDEEM_HELPER_ADDRESS: "0xBd35d8b2FDc2b720842DB372f5E419d39B24781f",
    PT_TOKEN_ADDRESS: "0x0a2d026bacc573a8b5a2b049f956bdf8e5256cfd", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW

    AUCTION_ADDRESS: "0xCbf51067d4cc3acd192121fF0bdCc6428512d214",
    DOG_ADDRESS: "0x4eD2B30Dd772ECDaC27202134D77372097D3F285",
  },
  1: {
    DAI_ADDRESS: "0xBAac2B4491727D78D2b78815144570b9f2Fe8899", // dog
    OHM_ADDRESS: "0x8715cA97c5B464C1957ceFBD18015b5567e52060",
    STAKING_ADDRESS: "0xd09A8524E15f36FeDd8145B134B763d2CdeD8634", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xA7CBd803440C7C315DC08114AFe50DAC8fbB74E2", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0xc187197E43e2175247982A7051FdC342936D922E",
    SOHM_ADDRESS: "0x7597C90c98b611E5d5dB0671180D92189B90C6c6",
    OLD_SOHM_ADDRESS: "0xC96569c5b2c5Ad6115180fa3c97F763Bd13898b3",
    PRESALE_ADDRESS: "0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8",
    AOHM_ADDRESS: "0x24ecfd535675f36ba1ab9c5d39b50dc097b0792e",
    MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d",
    DISTRIBUTOR_ADDRESS: "0x269deAEE3076D313113feF0Da1b1d434fb77e628",
    BONDINGCALC_ADDRESS: "0x3D1E546df52D7AF8ADCFDA1610c5fd0f23dcba9E",
    CIRCULATING_SUPPLY_ADDRESS: "0x0efff9199aa1ac3c3e34e957567c1be8bf295034",
    TREASURY_ADDRESS: "0xf36cb80FB7A184d3243FCF931d7C89f84034A9fa",
    CRUCIBLE_OHM_LUSD: "0x2230ad29920D61A535759678191094b74271f373",
    LQTY: "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d",
    MIST: "0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab",
    REDEEM_HELPER_ADDRESS: "0xCC8bADba566a6aD2d77E46A62015DA341D36Bf58",
    FUSE_6_SOHM: "0x59bd6774c22486d9f4fab2d448dce4f892a9ae25", // Tetranode's Locker
    FUSE_18_SOHM: "0x6eDa4b59BaC787933A4A21b65672539ceF6ec97b", // Olympus Pool Party
    PT_TOKEN_ADDRESS: "0x0E930b8610229D74Da0A174626138Deb732cE6e9", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xEaB695A8F5a44f583003A8bC97d677880D528248", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0xf3d253257167c935f8C62A02AEaeBB24c9c5012a", // NEW

    AUCTION_ADDRESS: "0xe238586A137Cdb7D5981B29B7D793515B2Ff80BB",
    DOG_ADDRESS: "0xBAac2B4491727D78D2b78815144570b9f2Fe8899",
  },
};