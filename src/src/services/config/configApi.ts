interface Config {
  production: ConfigURL;
  development: ConfigURL;
  localhost: ConfigURL;
}

type ConfigName = "production" | "development" | "localhost";

interface ConfigURL {
  name: ConfigName;
  URL_APP: string;
  URL_SWAP: string;
  USDT_ADDRESS: string;
  STARGRAM_ADDRESS: string;
  BRIDGE_BSC_ADDRESS: string;
  BRIDGE_STV_ADDRESS: string;
}

const config: Config = {
  production: {
    name: "production",
    URL_APP: String(process.env.REACT_APP_PRODUCTION_URL_APP),
    URL_SWAP: String(process.env.REACT_APP_PRODUCTION_URL_SWAP),
    USDT_ADDRESS: String(process.env.REACT_APP_USDT_ADDRESS),
    STARGRAM_ADDRESS: String(process.env.REACT_APP_STARGRAM_ADDRESS),
    BRIDGE_BSC_ADDRESS: String(process.env.REACT_APP_BRIDGE_BSC_ADDRESS),
    BRIDGE_STV_ADDRESS: String(process.env.REACT_APP_BRIDGE_STV_ADDRESS),
  },
  development: {
    name: "development",
    URL_APP: String(process.env.REACT_APP_DEVELOPMENT_URL_APP),
    URL_SWAP: String(process.env.REACT_APP_DEVELOPMENT_URL_SWAP),
    USDT_ADDRESS: String(process.env.REACT_APP_USDT_ADDRESS),
    STARGRAM_ADDRESS: String(process.env.REACT_APP_STARGRAM_ADDRESS),
    BRIDGE_BSC_ADDRESS: String(process.env.REACT_APP_BRIDGE_BSC_ADDRESS),
    BRIDGE_STV_ADDRESS: String(process.env.REACT_APP_BRIDGE_STV_ADDRESS),
  },
  localhost: {
    name: "localhost",
    URL_APP: String(process.env.REACT_APP_LOCALHOST_URL_APP),
    URL_SWAP: String(process.env.REACT_APP_LOCALHOST_URL_SWAP),
    USDT_ADDRESS: String(process.env.REACT_APP_USDT_ADDRESS),
    STARGRAM_ADDRESS: String(process.env.REACT_APP_STARGRAM_ADDRESS),
    BRIDGE_BSC_ADDRESS: String(process.env.REACT_APP_BRIDGE_BSC_ADDRESS),
    BRIDGE_STV_ADDRESS: String(process.env.REACT_APP_BRIDGE_STV_ADDRESS),
  },
};

export default config[process.env.REACT_APP_ENVIRONMENT as ConfigName];
