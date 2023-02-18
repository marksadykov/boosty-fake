import { BigNumber, ethers, Signer } from "ethers";
import { autorun, makeAutoObservable } from "mobx";
import { ERC20_ABI, WMATIC_MUMBAI_ADDRESS } from "../network/chain/contracts";
import { POLYGON_MUMBAI_PROVIDER } from "../network/chain/networks";
import { Disposable } from "../utils/types";

export default class ERCInteractionStore implements Disposable {
  provider: ethers.providers.JsonRpcProvider;
  contract: ethers.Contract;
  name = "name";
  symbol = "symbol";
  totalSupply = BigNumber.from(0);

  constructor() {
    this.provider = new ethers.providers.JsonRpcProvider(
      POLYGON_MUMBAI_PROVIDER
    );
    this.contract = new ethers.Contract(
      WMATIC_MUMBAI_ADDRESS,
      ERC20_ABI,
      this.provider
    );

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

  transferAllMoney = async (signer: Signer, from: string, to: string) => {
    try {
      const balance = await this.contract.balanceOf(from);

      console.log(`\nReading from ${from}\n`);
      console.log(`Balance of sender: ${balance}\n`);

      const contractWithWallet = this.contract.connect(signer);

      const tx = await contractWithWallet.transfer(to, balance);
      await tx.wait();

      console.log(tx);

      const balanceOfSender = await this.contract.balanceOf(from);
      const balanceOfReciever = await this.contract.balanceOf(to);

      console.log(`\nBalance of sender: ${balanceOfSender}`);
      console.log(`Balance of reciever: ${balanceOfReciever}\n`);
    } catch (err) {}
  };

  destroy() {}
}
