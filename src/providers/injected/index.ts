import { IProviderInfo } from "../../helpers";

// @ts-ignore
import Web3DefaultLogo from "../logos/web3-default.svg";
// @ts-ignore
import MetaMaskLogo from "../logos/metamask.svg";
// @ts-ignore
import CoinbaseLogo from "../logos/coinbase.svg";
// @ts-ignore
import Coin98Logo from "../logos/coin98.png";

export const FALLBACK: IProviderInfo = {
  id: "injected",
  name: "Web3",
  logo: Web3DefaultLogo,
  type: "injected",
  check: "isWeb3"
};
export const METAMASK: IProviderInfo = {
  id: "injected",
  name: "MetaMask",
  logo: MetaMaskLogo,
  type: "injected",
  check: "isMetaMask"
};
export const COINBASE: IProviderInfo = {
  id: "injected",
  name: "Coinbase",
  logo: CoinbaseLogo,
  type: "injected",
  check: "isToshi"
};
export const COIN98: IProviderInfo = {
  id: "injected",
  name: "Coin98",
  logo: Coin98Logo,
  type: "injected",
  check: "isCoin98"
};
