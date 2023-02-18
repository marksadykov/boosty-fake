import { BigNumber, ethers } from "ethers";
import { makeAutoObservable } from "mobx";
import { Disposable, MetaMaskEthereumProvider } from "../utils/types";

export default class ChainConnectionStore implements Disposable {
  private _metaMaskProvider: MetaMaskEthereumProvider | undefined;

  private _ethersProvider: ethers.providers.Web3Provider | undefined;

  private _currentAccount: string = "";
  private _currentBalance: BigNumber = BigNumber.from(0);

  get currentBalance() {
    return ethers.utils.formatEther(this._currentBalance);
  }

  get currentAccount() {
    return this._currentAccount;
  }

  get metaMaskProvider() {
    return this._metaMaskProvider!;
  }

  get ethersProvider() {
    return this._ethersProvider!;
  }

  constructor() {
    makeAutoObservable(this);
  }

  init = (metaMaskProvider: MetaMaskEthereumProvider) => {
    this._metaMaskProvider = metaMaskProvider;

    this._ethersProvider = new ethers.providers.Web3Provider(metaMaskProvider);

    this.isInit = true;
  };

  isInit: boolean = false;

  chainChanged = (args: any) => {
    console.log("chain changed", args);
  };

  accountsChanged = (args: any) => {
    console.log("accounts changed", args);
  };

  subscribeMetamaskEvents = () => {
    this.metaMaskProvider.on("chainChanged", this.chainChanged);
    this.metaMaskProvider.on("accountsChanged", this.accountsChanged);
  };

  unsubscribeMetamaskEvents = () => {
    this.metaMaskProvider.removeListener("chainChanged", this.chainChanged);
    this.metaMaskProvider.removeListener(
      "accountsChanged",
      this.accountsChanged
    );
  };

  getAccount = async () => {
    try {
      const accounts = await this.ethersProvider.send(
        "eth_requestAccounts",
        []
      );
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.error("Please connect to MetaMask.");
      } else {
        this._currentAccount = accounts[0];
      }
    } catch (err) {
      // Some unexpected error.
      // For backwards compatibility reasons, if no accounts are available,
      // eth_accounts will return an empty array.
      console.error(err);
    }
  };

  getBalance = async () => {
    try {
      this._currentBalance = await this.ethersProvider.getBalance(
        this.currentAccount,
        "latest"
      );
    } catch (err) {
      console.error(err);
    }
  };

  destroy = () => {};
}
