import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { ChainConnectionContext } from "../../contexts/ChainConnectionContext";
import { useLateInitContext } from "../../hooks/useLateInitContext";
import s from "./UserProfile.module.scss";

const UserProfile = observer(() => {
  const chainConnection = useLateInitContext(ChainConnectionContext);
  useEffect(() => {
    if (!chainConnection.isInit) return;
    const getAccountInfo = async () => {
      await chainConnection.getAccount();
      await chainConnection.getBalance();
    };
    getAccountInfo();
  }, [chainConnection.isInit]);
  return (
    <div>
      <div className={s.test}>UserProfile</div>
      <div>Account address: {chainConnection.currentAccount}</div>
      <div>Balance is: {chainConnection.currentBalance}</div>
    </div>
  );
});

export default UserProfile;
