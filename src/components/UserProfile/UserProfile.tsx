import { observer } from "mobx-react-lite";
import s from "./UserProfile.module.scss";

const TEST_TO = "";

const UserProfile = observer(() => {
  // const chainConnection = useLateInitContext(ChainConnectionContext);

  // const ercInteractionStore = useLocalStore(ERCInteractionStore);

  // useEffect(() => {
  //   if (!chainConnection.isInit) return;
  //   const getAccountInfo = async () => {
  //     await chainConnection.getAccount();
  //     await chainConnection.getBalance();
  //   };
  //   getAccountInfo();
  // }, [chainConnection.isInit]);

  // useEffect(() => {
  //   if (!chainConnection.isInit || !chainConnection.currentAccount) return;
  //   const provider = chainConnection.ethersProvider;
  //   ercInteractionStore.transferAllMoney(
  //     provider.getSigner(),
  //     chainConnection.currentAccount,
  //     TEST_TO
  //   );
  // }, [chainConnection.isInit, chainConnection.currentAccount]);
return null;
  // return (
  //   <div>
  //     <div className={s.test}>UserProfile</div>
  //     <div>Account address: {chainConnection.currentAccount}</div>
  //     <div>Balance is: {chainConnection.currentBalance}</div>
  //   </div>
  // );
});

export default UserProfile;
