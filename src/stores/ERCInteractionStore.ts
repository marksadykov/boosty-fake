import { BigNumber, ethers } from "ethers";
import { autorun, makeAutoObservable, runInAction } from "mobx";
import { FACTORY_ABI, FACTORY_ADDRESS } from "../network/chain/contracts";
import { POLYGON_MUMBAI_PROVIDER } from "../network/chain/networks";
import { Disposable } from "../utils/types";
import ChainConnectionStore from "./ChainConnectionStore";

export default class ERCInteractionStore implements Disposable {
  provider: ethers.providers.JsonRpcProvider;
  contract: ethers.Contract;
  name = "name";
  symbol = "symbol";
  totalSupply = BigNumber.from(0);
  chainConnection: ChainConnectionStore;
  isError = false;

  constructor(chainConnection: ChainConnectionStore) {
    this.provider = new ethers.providers.JsonRpcProvider(
      POLYGON_MUMBAI_PROVIDER
    );
    this.contract = new ethers.Contract(
      FACTORY_ADDRESS,
      FACTORY_ABI,
      this.provider
    );
    this.chainConnection = chainConnection;

    makeAutoObservable(this);

    autorun(() => {
      console.log(this.name);
      console.log(this.symbol);
      console.log(this.totalSupply);
    });
  }

  getStats = async () => {
    this.name = await this.contract.name();
    this.symbol = await this.contract.symbol();
    this.totalSupply = await this.contract.totalSupply();
  };

  createNFT = async (name: string, symbol: string, maxSupply: BigNumber) => {
    try {
      const signer = this.chainConnection.ethersProvider.getSigner();

      const contractWithWallet = this.contract.connect(signer);

      const tx = await contractWithWallet.createNFT(name, symbol, maxSupply);
      await tx.wait();
    } catch (err) {
      runInAction(() => {
        this.isError = true;
      });
    }
  };

  destroy() {}
}
