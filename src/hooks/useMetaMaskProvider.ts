import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect, useState } from "react";
import { MetaMaskEthereumProvider } from "../utils/types";

export const useMetaMaskProvider = () => {
  const [provider, setProvider] = useState<MetaMaskEthereumProvider | null>(
    null
  );
  useEffect(() => {
    const retrieveProvider = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        if (provider !== window.ethereum) {
          console.error("Do you have multiple wallets installed?");
        } else {
          setProvider(provider);
        }
      } else {
        console.error("Please install MetaMask!");
      }
    };
    retrieveProvider();
  }, []);
  return provider;
};
