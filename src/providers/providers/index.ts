// @ts-ignore
import WalletConnectLogo from "../logos/walletconnect-circle.svg";
// @ts-ignore
import FortmaticLogo from "../logos/fortmatic.svg";

import { IProviderInfo } from "../../helpers";

export * from "../injected";

export const WALLETCONNECT: IProviderInfo = {
  id: "walletconnect",
  name: "WalletConnect",
  logo: WalletConnectLogo,
  type: "qrcode",
  check: "isWalletConnect",
  package: {
    required: [["infuraId", "rpc"]]
  }
};

export const FORTMATIC: IProviderInfo = {
  id: "fortmatic",
  name: "Fortmatic",
  logo: FortmaticLogo,
  type: "web",
  check: "isFortmatic",
  package: {
    required: ["key"]
  }
};
